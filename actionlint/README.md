# actionlint plugin

[actionlint](https://github.com/rhysd/actionlint) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add actionlint "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/actionlint/plugin.toml" --global
proto install actionlint
```

### Per-project install

```shell
proto plugin add actionlint "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/actionlint/plugin.toml"
proto pin actionlint latest --resolve
```
