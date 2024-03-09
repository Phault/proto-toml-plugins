# Octopus CLI plugin

[Octopus CLI](https://octopus.com/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add octopus "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/octopus/plugin.toml" --global
proto install octopus
```

### Per-project install

```shell
proto plugin add octopus "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/octopus/plugin.toml"
proto pin octopus latest --resolve
```
