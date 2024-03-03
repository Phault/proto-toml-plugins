# CMake plugin

[CMake](https://cmake.org) plugin for [proto](https://github.com/moonrepo/proto).

> [!IMPORTANT]
> Due to a limitation of TOML-based plugins, only the `cmake` executable is available. 
> Related issue: https://github.com/moonrepo/schema-plugin/issues/21.

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add cmake "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/cmake/plugin.toml" --global
proto install cmake
```

### Per-project install

```shell
proto plugin add cmake "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/cmake/plugin.toml"
proto pin cmake latest --resolve
```
