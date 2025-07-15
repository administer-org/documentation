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

## `Utilities.CreateReflection`

Creates a reflected image.

::: code-group
```luau [Annotation]
Utilities.CreateReflection(
    ImageURL: string
): EditableImage
```

```luau [Example]
script.Parent.Image = Utilities.CreateReflection(Utilities.Icon("thumbs-up"))
```
:::

## `Utilities.Translate`

Gets a translated string based on its identifier. Prefers the users Roblox locale but overriding via Settings is possible. If the string was not found, it will return the identifier back.

::: code-group
```luau [Annotation]
Utilities.Translate(
    Identifier: string
): string
```

```luau [Example]
print(Utilities.Translate("generic.ThankYou")) --// -> Gracias!
print(Utilities.Translate("generic.strings.DoesNotExist")) --// -> generic.strings.DoesNotExist
```
:::

## `Utilities.Icon`

Gets an Icon and returns its asset URL. If the icon is not valid to the current selected pack, `rbxassetid://nil` is returned.

::: code-group
```luau [Annotation]
Utilities.Icon(
    IconName: string
): string
```

```luau [Example]
script.Parent.Image = Utilities.Icon "user" --// -> rbxassetid://15317920838
script.Parent.Image = Utilities.Icon "middle_finger" --// -> rbxassetid://nil
```

:::

## `Utilities.ToSentenceCase`

Takes in a sentence and turns it into sentence case. Does not preserve anything after the first letter, so you might want to concentrate other proper nouns.

::: code-group
```luau [Annotation]
Utilities.ToSentenceCase(
    Sentence: string
): string
```

```luau [Example]
print(Utilities.ToSentenceCase("hello, bob!")) --// Hello, bob!
print(Utilities.ToSentenceCase("SCRIPT ERRORS MAKE ME ANGRY.")) --// Script errors make me angry.
print(Utilities.ToSentenceCase("I love reading the Administer Documentation.")) --// I love reading the administer documentation.
```

:::

## `Utilities.Heartbeat`

Spawns Administer's internal heartbeat function.

::: warning
Not for external use.
:::

::: code-group
```luau [Annotation]
Utilities.Heartbeat(): ()
```

```luau [Example]
task.defer(Utilities.Heartbeat)
```

:::

## `Utilities.ProcessDono`

Internal wrapper for processing donations and showing confetti if it was purchased.

::: warning
Not for external use.
:::

::: code-group
```luau [Annotation]
Utilities.ProcessDono(
    Player: Player,
	GamePassId: number, 
	WasPurchased: boolean
): ()
```

```luau [Example]
Var.Services.MarketplaceService.GamePassPurchaseCompleted:Connect(Utilities.ProcessDono)
```

:::
