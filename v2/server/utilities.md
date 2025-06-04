# Utilities

Various useful functions and values for use in scripts.

## `Utilities.GetSetting`

Gets a setting from the Administer settings index.

::: warning
This feature is not done. Settings are not ready for use yet.
:::

::: code-group
```luau [Annotation]
Utilities.GetSetting(
    Setting: string,
    SettingGroup: string,
    UserId: number?
)
```

```luau [Example]
print(Utilities.GetSetting(
    "Scale", 
    "Administer.Interface",
     -1 --// default
))
```

```luau [Output (success)]
any
```

```luau [Output (failure)]
{
    false,
    "Setting not found"
}
```

:::

## `Utilities.Logging`

Many functions for creating logs which replicate to the Logs menu in the panel.

### Print
standard `print()`, will not display in the log if `Verbose` is false

### Warn
`warn()` with a traceback

### SWarn
`warn()` without a traceback

### Error
`error()` with a traceback

### Debug
`print()` with a traceback, is not disabled by `Verbose`

<br>

::: code-group
```luau [Annotation]
Utilities.Logging: {
    Print: (...) -> ()
    Warn: (...) -> ()
    SWarn: (...) -> ()
    Error: (...) -> ()
    Debug: (...) -> ()
}
```

```luau [Example]
Utils.Logging.Warn("Something went wrong here!")
Utils.Logging.Print(ErrorData)
```

:::

## `Utilities.IsAdmin`

Checks if a user is an admin or not.

::: code-group
```luau [Annotation]
Utilities.IsAdmin(
    Player: Player
)
```

```luau [Example]
print(`pyxfluff {Utils.IsAdmin(game.Players.pyxfluff).IsAdmin and "is" or "is not"} an admin!`)
```

```luau [Output (success)]
{
    IsAdmin = true,
    Reason = "This person is in the ranks index.",
    RankID = "Administrator", --// this property mostly only exists for compatibility, you should use RankName now
    RankName = "Administrator"
}
```

```luau [Output (failure)]
{
    IsAdmin = false,
    RankID = 0
}
```

:::

## `Utilities.NewNotification`

Creates a new notification.

::: tip
This function yields until it is closed or the user interacts with it. You may want to wrap it in `task.spawn` or `task.defer`.
:::

::: code-group
```luau [Annotation]
Utilities.NewNotification(
    Admin: Player,
    Body: string,
    Title: strig,
    Icon: string,
    Duration: number,
    NotificationSound: string,
    Options: {
        {
            Icon: string,
            Callback: () -> ()
        }
    }
)
```

```luau [Example]
Util.NewNotification(
    game.Players.pyxfluff,
    string.format(Util.t(Player, "onboarding.Welcome"), Config.Name, Rank.Name, Util.GetSetting("Keybind")),
    string.format(Util.t(Player, "onboarding.Head"), Config.Name),
    "rbxassetid://16105499426",
    15,
    nil,
    {}
)
```

```luau [Output (success)]
{ true }
```

```luau [Output (failure)]
{ false }
```

:::

## `Utilities.NewRemote`

Creates a RemoteEvent or RemoteFunction with some quality-of-life parameters.

::: code-group
```luau [Annotation]
Utilities.NewRemote(
    RemoteType: "RemoteEvent" | "RemoteFunction",
    RemoteName: string,
    AuthRequired: boolean,
    Callback: (...any) -> (...any),
    AppName: string?
)
```

```luau [Example]
print(Utilities.GetSetting(
    "Scale", 
    "Administer.Interface",
     -1 --// default
))
```

```luau [Output (success)]
any
```

```luau [Output (failure)]
{
    false,
    "Setting not found"
}
```

:::
