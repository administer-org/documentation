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
    Title: string,
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

## `Utilities.Time.RelativeFormat`

Formats a Unix timestamp to a phrase. Supports minutes, hours, days, weeks, and years. Anything below one minute is rendered as "Just Now".

::: code-group
```luau [Annotation]
Utilities.Time.RelativeFormat(
    Time: number
)
```

```luau [Example]
print(`This rank was created {Utilities.Time.RelativeFormat(Rank.CreatedTime)}!`)
```

:::

## `Utilities.Time.FormatSeconds`

Turns seconds into hh:mm:ss format.

::: code-group
```luau [Annotation]
Utilities.Time.FormatSeconds(
    Seconds: number
)
```

```luau [Example]
print(`I have been playing this game for {Utilities.Time.FormatSeconds(os.time() - Player.JoinTime)}`)
```

:::

## `Utilities.GetGameOwner`

Returns a table with the game owner's ID and member type.

::: code-group
```luau [Annotation]
Utilities.GetGameOwner(): {
    ID: number,
    MemberType: "User" | "Group"
}
```

```luau [Example]
local Result = Utilities.GetGameOwner()

print(`The owner of this game is a {Result.MemberType} and their ID is {Result.ID}!`)
```

:::

## `Utilities.GetShortNumber`

Takes in a number and renders a short number (101000 -> 101k)

::: code-group
```luau [Annotation]
Utilities.GetShortNumber(
    Number: number
)
```

```luau [Example]
print(`This game has {Utilities.GetShortNumber(game.VisitCount)} visits!`)
```
:::

## `Utilities.RoundMS`

Takes a number or string with seconds and turns it into milliseconds with 4 decimal spots

::: code-group
```luau [Annotation]
Utilities.RoundMS(
    Number: number
)
```

```luau [Example]
local Start = tick()

task.wait(math.random(1, 5))

print(`Completed in {Utilities.RoundMS(tick() - Start)}ms!`)
```

:::

## `Utilities.GetGameMedia`

Gets the first large 16:9 thumbnail of your game.

::: code-group
```luau [Annotation]
Utilities.GetGameMedia(): string
```

```luau [Example]
script.Parent.Image = Utilities.GetGameMedia()
```

:::

## `Utilities.GetGameIcon`

Like the previous function, but it returns the 4:3 game icon instead.

::: code-group
```luau [Annotation]
Utilities.GetGameIcon(): string
```

```luau [Example]
script.Parent.Image = Utilities.GetGameIcon()
```

:::

## `Utilities.GetServerRegion`

Gets the region of the server that the game is currently running in. Returns a string like `US\California` or `Europe\London`. 

::: code-group
```luau [Annotation]
Utilities.GetServerRegion(): string
```

```luau [Example]
print(`We are running in: {Utilities.GetServerRegion()}`)
```

:::

## `Utilities.GetProminentColor`

Returns the RGB value (in a table) containing the prominent color of a user's profile picture. Uses AOS and the Roblox Proxy.

::: code-group
```luau [Annotation]
Utilities.GetProminentColor(
    UserID: number
): { number, number, number }
```

```luau [Example]
local Color = Utilities.GetProminentColor(133017837)

script.Parent.ImageColor3 = Color3.fromRGB(Color[1], Color[2], Color[3])
```

:::

## `Utilities.GetFilteredString`

Returns a string that has been passed through `TextService:FilterStringAsync`.

::: code-group
```luau [Annotation]
Utilities.GetFilteredString(
    Player: Player,
    String: string
): { boolean, string }
```

```luau [Example]
local function MakeAnnouncement(Player, String)
    Var.Remotes.Announce:FireAllClients(`{Player.Name} says: {String}`)
end

MakeAnnouncement(game.Players.pyxfluff, Utilities.GetFilteredString(game.Players.Pyxfluff, "Hello world!")[2])
```

```luau [Result (success)]
{
    true,
    "(filtered string)"
}
```

```luau [Result (failure)]
{
    false,
    "Failed to filter: Something went wrong."
}
```

:::

## `Utilities.Icon`

Gets the asset ID of an icon from the game's [default icon pack](/v2/help/icon-packs). Unlike its client counterpart, it does not wrap in `rbxassetid://`. Missing icons will return `nil`. 

::: code-group
```luau [Annotation]
Utilities.Icon(
    IconID: string
)
```

```luau [Example]
print(Utilities.Icon("user-shield")) --// -> 80051630716373
```
:::

## `Utilities.UpdateCallback`

Takes in a list of items to perform update checks on. Currently, it only supports `{ "org.admsoftware.Core }` as an input, but support for checking for app updates from AOS will be coming soon.

::: code-group
```luau [Annotation]
Utilities.UpdateCallback(
    Services: { string }
)
```

```luau [Example]
local Output = Utilities.UpdateCallback({ "org.admsoftware.Core" })

print(`Administer is {Output.Administer.is_outdated and "out of date!" or "up to date!"}`)
```
:::

## `Utilities.CountryToFlag`

Gets the flag emoji from a country code.

::: code-group
```luau [Annotation]
Utilities.CountryToFlag(
    CountryCode: string
)
```

```luau [Example]
print(`I love {Utilities.CountryToFlag("US")} America!`)
```
:::

## `Utilities.CheckVersion`

Checks Administer's version (using UpdateCallback), and if it's version is new, will save the current Unix time to `AppDB.InstallDates`. Returns the timestamp of when the latest version was installed.

::: code-group
```luau [Annotation]
Utilities.CheckVersion()
```

```luau [Example]
print(`This Administer version was installed on {Utilities.CheckVersion()}!`)
```
:::
