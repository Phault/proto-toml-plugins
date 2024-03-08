# Biome plugin

[Biome](https://biomejs.dev) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add biome "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/biome/plugin.toml" --global
proto install biome
```

## Per-project install

```shell
proto plugin add biome "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/biome/plugin.toml"
proto pin biome latest --resolve
```
