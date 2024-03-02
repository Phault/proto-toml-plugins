# uv plugin

[uv](https://github.com/astral-sh/uv) plugin for [proto](https://github.com/moonrepo/proto).

> [!WARNING]
> Due to a limitation in the extraction library that proto uses, macOS is not currently supported.
> See https://github.com/moonrepo/starbase/issues/56 for details.

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add uv "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/uv/plugin.toml" --global
proto install uv
```

### Per-project install

```shell
proto plugin add uv "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/uv/plugin.toml"
proto pin uv latest --resolve
```
