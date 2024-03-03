# Ninja plugin

[Ninja](https://ninja-build.org) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add ninja "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/ninja/plugin.toml" --global
proto install ninja
```

### Per-project install

```shell
proto plugin add ninja "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/ninja/plugin.toml"
proto pin ninja latest --resolve
```
