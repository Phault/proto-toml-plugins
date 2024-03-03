# just plugin

[just](https://github.com/casey/just) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add just "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/just/plugin.toml" --global
proto install just
```

### Per-project install

```shell
proto plugin add just "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/just/plugin.toml"
proto pin just latest --resolve
```
