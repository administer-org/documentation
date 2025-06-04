# Frontend

Functions for communicating with the Administer frontend.

## `FrontendAPI.VersionCheck`

Performs an Administer version check based on your default AOS URL `/pub/versions`. Eventually, this will check for app versions too, just not yet. 

::: code-group

```lua [Annotation]
FrontendAPI.VersionCheck(
    Player: Player
)
```

```lua [Example]
FrontendAPI.VersionCheck(game.Players.pyxfluff)
```

```lua [Output (success)]
{
    provided_information: {any},
    versions: {any}
}
```

```lua [Output (failure)]
{
    false,
    {...}
}
```

:::

## `FrontendAPI.UpdateHomePage`

Updates the saved widgets for a given player.

::: code-group
```lua [Annotation]
FrontendAPI.UpdateHomePage(
    Player: Player,
    NewData: {
        EventType: "UPDATE" | "REMOVE",
        WidgetID: string,
        NewIdentifier: string
    }
)
```

```lua [Example]
FrontendAPI.UpdateHomePage(
    game.Players.pyxfluff,
    {
        EventType = "UPDATE",
        WidgetID = "LargeBox1",
        NewIdentifier = "PlayerManagement\\ServerStats"
    }
)
```

```lua [Output (success)]
{
    Success = true,
    Message = "Done!"
}
```

```lua [Output (failure)]
{
    Success = false,
    Message = "Something happened on Roblox's end, please try again later."
}
```

:::
