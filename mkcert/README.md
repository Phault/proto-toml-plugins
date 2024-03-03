# mkcert plugin

[mkcert](https://github.com/FiloSottile/mkcert) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add mkcert "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/mkcert/plugin.toml" --global
proto install mkcert
```

### Per-project install

```shell
proto plugin add mkcert "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/mkcert/plugin.toml"
proto pin mkcert latest --resolve
```
