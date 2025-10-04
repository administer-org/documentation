# Admins

Admins page helper.

## `Admins.Load`

Refreshes (or loads) the list of admin ranks and their members. Does not return any data.

::: code-group
```luau [Annotation]
Admins.Load(): ()
```

```luau [Example]
while task.wait(20) do
    Admins.Load()
end
```
:::

## `Admins.ClearEditState`

Resets the `Env` module to wipe out persisting data from previous rank edits.

::: code-group
```luau [Annotation]
Admins.ClearEditState(Env: { any }): ()
```

```luau [Example]
Admins.ClearEditState()
```
:::

## `Admins.GetEditState`

Gets a fresh copy of the Admin environment with `Strings` cleared for easier reading and processing.

::: code-group
```luau [Annotation]
Admins.GetEditState(): { AdminState }
```

```luau [Example]
print(Admins.GetEditState())
```
:::

## `Admins.OpenCreator`

Opens the rank creator.

::: code-group
```luau [Annotation]
Admins.OpenCreator()
```
:::

## `Admins.CloseCreator`

Closes the rank creator.

::: code-group
```luau [Annotation]
Admins.CloseCeator()
```
:::

## `Admins.RunCreatorApp`

Loads the Rank Creator.

::: warning
Not for external use.
:::

::: code-group
```luau [Annotation]
Admins.RunCreatorApp()
```
:::
