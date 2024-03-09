# Gitleaks plugin

[Gitleaks](https://gitleaks.io) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add gitleaks "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/gitleaks/plugin.toml" --global
proto install gitleaks
```

### Per-project install

```shell
proto plugin add gitleaks "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/gitleaks/plugin.toml"
proto pin gitleaks latest --resolve
```
