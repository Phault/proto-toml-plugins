# oxlint plugin

[oxlint](https://oxc-project.github.io) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add oxlint "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/oxlint/plugin.toml" --global
proto install oxlint
```

## Per-project install

```shell
proto plugin add oxlint "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/oxlint/plugin.toml"
proto pin oxlint latest --resolve
```
