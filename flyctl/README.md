# flyctl plugin

[flyctl](https://github.com/superfly/flyctl) plugin for [proto](https://github.com/moonrepo/proto).

Included:

- flyctl
- fly (alias of `flyctl`)

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add flyctl "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/flyctl/plugin.toml" --global
proto install flyctl
```

### Per-project install

```shell
proto plugin add flyctl "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/flyctl/plugin.toml"
proto pin flyctl latest --resolve
```
