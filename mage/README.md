# Mage plugin

[Mage](https://magefile.org) plugin for [proto](https://github.com/moonrepo/proto).

> [!IMPORTANT]
> There does not appear to be an official build of 1.15.0 available for Apple silicon.

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add mage "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/mage/plugin.toml" --global
proto install mage
```

### Per-project install

```shell
proto plugin add mage "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/mage/plugin.toml"
proto pin mage latest --resolve
```
