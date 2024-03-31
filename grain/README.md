# Grain plugin

[Grain](https://grain-lang.org) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add grain "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/grain/plugin.toml" --global
proto install grain
```

## Per-project install

```shell
proto plugin add grain "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/grain/plugin.toml"
proto pin grain latest --resolve
```
