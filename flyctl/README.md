# flyctl plugin

[flyctl](https://github.com/superfly/flyctl) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

> [!NOTE]
> This tool is usually available both as `flyctl` and the newer `fly` alias.
>
> The instructions below assume you're using the new alias, if not replace `fly` with `flyctl`.
>
> If you need both, you'll have to register and install the plugin twice.

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add fly "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/flyctl/plugin.toml" --global
proto install fly
```

### Per-project install

```shell
proto plugin add fly "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/flyctl/plugin.toml"
proto pin fly latest --resolve
```
