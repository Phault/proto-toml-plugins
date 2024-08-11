# pixi plugin

[pixi](https://github.com/prefix-dev/pixi) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add pixi "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/pixi/plugin.toml" --global
proto install pixi
```

### Per-project install

```shell
proto plugin add pixi "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/pixi/plugin.toml"
proto pin pixi latest --resolve
```
