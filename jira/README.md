# JiraCLI plugin

[JiraCLI](https://github.com/ankitpokhrel/jira-cli) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add jira "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/jira/plugin.toml" --global
proto install jira
```

### Per-project install

```shell
proto plugin add jira "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/jira/plugin.toml"
proto pin jira latest --resolve
```
