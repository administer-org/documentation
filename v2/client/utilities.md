# Utilities

Various functions for use in many different files. Somewhat mirrored with [the server module.](/v2/server/utilities)

## `Utilities.GetSetting`

Gets a setting from the `Administer` settings index regardless of category.

::: warning
If you are loading settings at runtime, they might not be loaded yet. Implementing `GetSettingChanged` or `Var.Remotes.SettingsLoaded.OnClientEvent:Wait()` is never a bad idea.
:::

::: code-group
```luau [Annotation]
Utilities.GetSetting(
    Setting: string
): any
```

```luau [Example]
local Language = Utilities.GetSetting("Locale")

print({
    "en": "Hello!",
    "es" = "Hola!",
    "fr" = "Bonjour!"
}[Language])
```
:::

## `Utilities.GetSettingChanged`

Returns a RemoteEvent which is fired every time a setting is changed.

::: code-group
```luau [Annotation]
Utilities.GetSettingChanged(
    Setting: string
): RemoteEvent
```

```luau [Example]
Utilities.GetSettingChanged("AnimationSpeed").OnClientEvent:Connect(function(NewValue)
    print(`The animation speed is now {NewValue}!`)
end)
```
:::

## `Utilities.ShortNumber`

Gets a minified number.

::: code-group
```luau [Annotation]
Utilities.ShortNumber(
    Number: number
): string
```

```luau [Example]
local BigNumber = 875834923

script.Parent.Text = Utilities.ShortNumber(BigNumber)
```
:::

## `Utilities.FormatRelativeTime`

Takes a Unix timestamp (1752386926) and converts it to a relative timestamp (4 minutes ago)

::: code-group
```luau [Annotation]
Utilities.FormatRelativeTime(
    UnixDate: number
): string
```

```luau [Example]
print(`This documentation entry was written {Utilities.FormatRelativeTime(
    1752386926
)}`) --// This documentation entry was written 3 minutes ago
```
:::

## `Utilities.Logging.Print`

Prints something out.

::: code-group
```luau [Annotation]
Utilities.Logging.Print(
    ...
)
```
:::

## `Utilities.Logging.Warn`

Creates a warning with a traceback.

::: code-group
```luau [Annotation]
Utilities.Logging.Warn(
    ...
)
```
:::

## `Utilities.Logging.Error`

Creates an error.

::: code-group
```luau [Annotation]
Utilities.Logging.Error(
    Message: string
)
```
:::

## `Utilities.NewNotification`

Creates a new notification.

::: code-group
```luau [Annotation]
Utilities.NewNotification(
    UnixDate: number
): string
```

```luau [Example]
print(`This documentation entry was written {Utilities.FormatRelativeTime(
    1752386926
)}`) --// This documentation entry was written 3 minutes ago
```
:::
