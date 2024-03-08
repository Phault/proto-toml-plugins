# Task plugin

[Task](https://taskfile.dev) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add task "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/task/plugin.toml" --global
proto install task
```

### Per-project install

```shell
proto plugin add task "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/task/plugin.toml"
proto pin task latest --resolve
```
