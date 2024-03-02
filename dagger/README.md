# Dagger plugin

[Dagger](https://dagger.io) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add dagger "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/dagger/plugin.toml" --global
proto install dagger
```

### Per-project install

```shell
proto plugin add dagger "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/dagger/plugin.toml"
proto pin dagger latest --resolve
```
