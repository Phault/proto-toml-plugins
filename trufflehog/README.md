# TruffleHog plugin

[TruffleHog](https://github.com/trufflesecurity/trufflehog) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add trufflehog "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/trufflehog/plugin.toml" --global
proto install trufflehog
```

### Per-project install

```shell
proto plugin add trufflehog "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/trufflehog/plugin.toml"
proto pin trufflehog latest --resolve
```
