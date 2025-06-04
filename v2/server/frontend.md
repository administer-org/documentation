# Frontend

Functions for communicating with the Administer frontend.

## `FrontendAPI.VersionCheck`

Performs an Administer version check based on your default AOS URL `/pub/versions`. Eventually, this will check for app versions too, just not yet. 

::: code-group

```luau [Annotation]
FrontendAPI.VersionCheck(
    Player: Player
)
```

```luau [Example]
FrontendAPI.VersionCheck(game.Players.pyxfluff)
```

```luau [Output (success)]
{
    provided_information: {any},
    versions: {any}
}
```

```luau [Output (failure)]
{
    false,
    {...}
}
```

:::

## `FrontendAPI.UpdateHomePage`

Updates the saved widgets for a given player.

::: code-group
```luau [Annotation]
FrontendAPI.UpdateHomePage(
    Player: Player,
    NewData: {
        EventType: "UPDATE" | "REMOVE",
        WidgetID: string,
        NewIdentifier: string
    }
)
```

```luau [Example]
FrontendAPI.UpdateHomePage(
    game.Players.pyxfluff,
    {
        EventType = "UPDATE",
        WidgetID = "LargeBox1",
        NewIdentifier = "PlayerManagement\\ServerStats"
    }
)
```

```luau [Output (success)]
{
    Success = true,
    Message = "Done!"
}
```

```luau [Output (failure)]
{
    Success = false,
    Message = "Something happened on Roblox's end, please try again later."
}
```

:::
