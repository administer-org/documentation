# BootstrapGame

Tools for managing a game's first run.

## `BootstrapGame`

::: warning Note
Administer does not verify if this is actually a first run or not, running this function will perform a setup regardless.
:::

Initializes a game. Adds an Administrator rank, adds the default AOS Instance (and registers it as primary), installs default apps.

::: code-group
```luau [Annotation]
BootstrapGame()
```

```luau [Example]
BootstrapGame()
```
:::
