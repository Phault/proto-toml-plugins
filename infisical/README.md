# Infisical plugin

[Infisical](https://infisical.com) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add infisical "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/infisical/plugin.toml" --global
proto install infisical
```

### Per-project install

```shell
proto plugin add infisical "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/infisical/plugin.toml"
proto pin infisical latest --resolve
```
