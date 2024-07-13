# watchexec plugin

[watchexec](https://github.com/watchexec/watchexec) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add watchexec "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/watchexec/plugin.toml" --global
proto install watchexec
```

### Per-project install

```shell
proto plugin add watchexec "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/watchexec/plugin.toml"
proto pin watchexec latest --resolve
```
