# atmos plugin

[atmos](https://github.com/cloudposse/atmos) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add atmos "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/atmos/plugin.toml" --global
proto install atmos
```

### Per-project install

```shell
proto plugin add atmos "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/atmos/plugin.toml"
proto pin atmos latest --resolve
```
