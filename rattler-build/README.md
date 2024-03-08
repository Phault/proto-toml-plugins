# rattler-build plugin

[rattler-build](https://prefix-dev.github.io/rattler-build/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add rattler-build "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/rattler-build/plugin.toml" --global
proto install rattler-build
```

### Per-project install

```shell
proto plugin add rattler-build "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/rattler-build/plugin.toml"
proto pin rattler-build latest --resolve
```
