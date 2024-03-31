# Pact Verifier CLI plugin

[Pact Verifier CLI](https://github.com/pact-foundation/pact-reference/tree/master/rust/pact_verifier_cli) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add pact_verifier_cli "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/pact_verifier_cli/plugin.toml" --global
proto install pact_verifier_cli
```

### Per-project install

```shell
proto plugin add pact_verifier_cli "source:https://raw.githubusercontent.com/Phault/proto-toml-plugins/main/pact_verifier_cli/plugin.toml"
proto pin pact_verifier_cli latest --resolve
```
