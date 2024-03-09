import { parse } from "@std/toml";
import { join, dirname } from "@std/path";

/**
 * Quick and very dirty script to generate most of the JS needed to submit plugins for https://moonrepo.dev/docs/proto/tools#third-party
 */

interface ProtoToolDoc {
  name: string;
  description: string;
  homepageUrl?: string;
  repoUrl: string;
  noIcon?: boolean; // If no SVG
  pluginLocator?: string;
  pluginType: "toml" | "wasm";
  usageId?: string;
  author: string;
  bins?: string[];
  globalsDirs?: string[];
  detectionSources?: {
    file: string;
    label?: string;
    url?: string;
  }[];
}

type Prototools = {
  plugins: Record<string, string>;
};

type PluginToml = {
  name: string;
  resolve: {
    "git-url": string;
  };
};

const currentPrototoolsTsx = await fetch(
  "https://raw.githubusercontent.com/moonrepo/moon/master/website/src/data/proto-tools.tsx",
).then((r) => r.text());

const [_, currentToolsObjectJs] =
  currentPrototoolsTsx.match(
    /export const THIRD_PARTY_TOOLS[^=]+=\s+([^;]+)/,
  ) ?? [];

if (!currentToolsObjectJs)
  throw new Error("Failed to find THIRD_PARTY_TOOLS object");

const existingTools = eval?.(`(${currentToolsObjectJs})`) as Record<
  string,
  ProtoToolDoc
>;

const root = join(import.meta.dirname!, "..");

const prototools = parse(
  await Deno.readTextFile(join(root, ".prototools")),
) as Prototools;

const markdownLinkRegex = /\[[^\]]+\]\(([^)]+)\)/;

const blacklist = [
  // registered as flyctl
  "fly",
];

const newTools = Object.entries(prototools.plugins)
  .filter(([id]) => !existingTools[id])
  .filter(([id]) => !blacklist.includes(id))
  .map(([id, source]) => {
    const relativePluginPath = source.split(":").at(-1)!;

    const pluginTomlRaw = Deno.readTextFileSync(join(root, relativePluginPath));
    const pluginToml = parse(pluginTomlRaw) as PluginToml;

    const readme = Deno.readTextFileSync(
      join(root, dirname(relativePluginPath), "README.md"),
    );
    const [_, homepageUrl] = markdownLinkRegex.exec(readme) ?? [];

    return [
      id,
      {
        author: "Phault",
        bins: [id],
        description: "",
        homepageUrl,
        name: pluginToml.name,
        noIcon: true,
        pluginLocator: `source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/${relativePluginPath}`,
        pluginType: "toml",
        repoUrl: "https://github.com/Phault/proto-toml-plugins",
      },
    ] satisfies [string, ProtoToolDoc];
  });

const combinedTools = Object.fromEntries(
  Object.entries(existingTools)
    .concat(newTools)
    .toSorted(([a], [b]) => a.localeCompare(b)),
);

console.log(JSON.stringify(combinedTools, undefined, 2));
