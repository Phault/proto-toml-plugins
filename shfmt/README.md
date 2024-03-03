# shfmt plugin

[shfmt](https://github.com/mvdan/sh) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add shfmt "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/shfmt/plugin.toml" --global
proto install shfmt
```

### Per-project install

```shell
proto plugin add shfmt "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/shfmt/plugin.toml"
proto pin shfmt latest --resolve
```
