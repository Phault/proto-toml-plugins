# Hurl plugin

[Hurl](https://hurl.dev/) plugin for [proto](https://github.com/moonrepo/proto).

> [!NOTE]
> Only the `hurl` binary is added to PATH, `hurlfmt` is not.
> This is a limitation of TOML plugins.

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add hurl "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/hurl/plugin.toml" --global
proto install hurl
```

### Per-project install

```shell
proto plugin add hurl "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/hurl/plugin.toml"
proto pin hurl latest --resolve
```
