# AdminRunner

AdminRunner has many functions and utilities for managing admins.

## `AR.Bootstrap`

Spawns a new admin panel for a given user and creates a welcome notification instructing them on how to open it.

::: code-group

```luau [Annotation]
AR.Bootstrap(
    Player: Player,
    RankID: number
)
```

```luau [Example]
game.Players.PlayerAdded:Connect(function(Player))
    if Player.Name == "Roblox" then
        AR.Bootstrap(Player, "Administrator")
    end
end)
```

:::

## `AR.CanUseApp`

Returns a boolean for if a given player or rank can access an app based on its AppID (`AppParent` or `AppParent\SubApp`)

::: code-group

```luau [Annotation]
AR.CanUseApp(
    Identifier: Player | String<RankName>,
    AppIdentifier: string
)
```

```luau [Example]
print(`I... {AR.CanUseApp(game.Player.pyxfluff, "PlayerManagement")} use Player Management!`)
```

```luau [Output]
true
```

:::

## `AR.PlayerAdded`

Used internally as a hook for the `Players.PlayerAdded`  `RBXScriptSignal`. Can be used to check if players are still admins.

If you are looking to disable double-bootstrap protection, disable `DisableBootstrapProtection` in [Vars.]() <!-- TODO -->


::: code-group

```luau [Annotation]
AR.PlayerAdded(
    Player: Player, 
    ForceAdmin: boolean, 
    IsScan: boolean
)
```

```luau [Example]
game.Players.PlayerAdded:Connect(AR.PlayerAdded)
```

```luau [Output (failure)]
{
    false,
    "This person is already an admin and by default cannot be bootstrapped twice. Change this in the configuration module."
}
```

```luau [Output (success)]
{
    true,
    "Done"
}
```

:::

## `AR.Removing`

Cleans up after an admin after they leave. Also meant to be a script hook internally.


::: code-group

```luau [Annotation]
AR.Removing(Player: Player)
```

```luau [Example]
game.Players.PlayerRemoving:Connect(AR.Removing)
```

:::

## `AR.Scan`

Runs [PlayerAdded](#ar-playeradded) on every person in your game. If you would like everybody to have super admin no matter what, make `ForceAdmin = true`.

::: code-group

```luau [Annotation]
AR.Scan(
    ForceAdmin: boolean
)
```

```luau [Example]
game:GetService("MessagingService").MessageReceived:Connect(Message, Data)
    if Message == "ScanForAdmins" then
        AR.Scan(false)
    end
end)
```

:::

## `AR.Ranks.New`

Creates a new admin rank with the provided data.

::: code-group

```luau [Annotation]
AR.Ranks.New(Data: {
    AdmRankVersion = 3,
    
    Name: string,
    Protected: boolean,
    Members: {
        {
            ID: number,
            MemberType: "Group" | "User",
            GroupRank: number?
        }
    },

    Apps: {
        SuperAdmin: boolean?,
        ...any
    },

    CreationReason: string,
    ActingUser: number,
    
    Color: string,

    IsEdit: boolean?,
    Overwrite: boolean?
})
```

```luau [Example]
Admins.Ranks.New({
    AdmRankVersion = 3,
    
    Name = "Administrator",
    Protected = true,
    Members = {
        {
            ID = Owner.ID,
            MemberType = (Owner.MemberType) :: "Group" | "User",
            GroupRank = 255
        }
    },

    Apps = {
        SuperAdmin = true
    },

    CreationReason = "Added by System for first-time setup.",
    ActingUser = 1,
    
    Color = "23ff74"
})
```

```luau [Output (failure)]
{
    false,
    "Apps was missing in provided table"
}
```

```luau [Output (success)]
{
    true,
    "Success in 0.073472s!"
}
```

:::

## `AR.Ranks.GetAll`

Starts multiple threads to get all ranks in the RankIndex.

::: code-group

```luau [Annotation]
AR.Ranks.GetAll()
```

```luau [Example]
print(AR.Ranks.GetAll())
```

```luau [Output]
{
    {
        Protected = true,
        Modified = 1748057698,
        Members = {
            {
                ID = 133017837,
                MemberType = "User",
                GroupRank = 255
            }
        },
        CreationReason = "Added by System for first-time setup.",
        Modifications = {
            {
                ActingAdmin = 1,
                Actions = { "created this rank" },
                Reason = "Created this from the rank editor."
            }
        },
        Name = "Administrator",
        AdmRankVersion = 3,
        Apps = {
            SuperAdmin = true
        },
        CreatorID = 1,
        RankID = 1,
        Color = "23ff74"
    }
}
```

:::

## `AR.Socket`

Used as an internal MessagingService wrapper.

::: warning
You shouldn't be using this generally, it is useful for internal Administer code but not outside of it
:::

::: code-group

```luau [Annotation]
AR.Socket(
    Message: {
        Data: { Message, Content }
    }
)
```

:::
