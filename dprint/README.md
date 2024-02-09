# dprint plugin

[dprint](https://dprint.dev) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto tool add dprint "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/dprint/plugin.toml" --global
proto install dprint
```

## Per-project install

```shell
proto tool add dprint "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/dprint/plugin.toml"
proto pin dprint
```
