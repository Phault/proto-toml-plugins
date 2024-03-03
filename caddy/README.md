# Caddy plugin

[Caddy](https://caddyserver.com) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add caddy "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/caddy/plugin.toml" --global
proto install caddy
```

### Per-project install

```shell
proto plugin add caddy "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/caddy/plugin.toml"
proto pin caddy latest --resolve
```
