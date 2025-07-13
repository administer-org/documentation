# ClientSettings

Controller for the `Options` Configuration subapp

## `ClientSettings.LoadCategories`

Loads a group of categories from a Settings type.

::: code-group
```luau [Annotation]
ClientSettings.LoadCategories(
    Categories: { SettingCategory }
)
```
:::

## `ClientSettings.LoadSettings`

Loads settings based on a category, mostly an internal wrapper for use within `LoadCategories`.

::: code-group
```luau [Annotation]
ClientSettings.LoadSettings(
    SettingCategory: SettingCategory
)
```
:::

## `ClientSettings.ClearSettings`

Cleans up a settings list.

::: code-group
```luau [Annotation]
ClientSettings.ClearSettings()
```
:::
