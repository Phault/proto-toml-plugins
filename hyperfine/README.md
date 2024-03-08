# hyperfine plugin

[hyperfine](https://github.com/sharkdp/hyperfine) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add hyperfine "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/hyperfine/plugin.toml" --global
proto install hyperfine
```

### Per-project install

```shell
proto plugin add hyperfine "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/hyperfine/plugin.toml"
proto pin hyperfine latest --resolve
```
