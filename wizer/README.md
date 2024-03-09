# Wizer plugin

[Wizer](https://github.com/bytecodealliance/wizer) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add wizer "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/wizer/plugin.toml" --global
proto install wizer
```

### Per-project install

```shell
proto plugin add wizer "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/wizer/plugin.toml"
proto pin wizer latest --resolve
```
