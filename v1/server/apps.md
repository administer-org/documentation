# Apps

Handles loading Apps, managing AOS Instances, and more.

## `Apps` (parent)

::: warning
Generally you should not be using module properties. Use APIs when possible.
:::

Contains some properties which may be useful for debugging.

::: code-group

```luau [Annotation]
{
	ServerAPI = {},
	InvocationAPI = {},
	RunningApps = { App }
}
```

:::

## `Apps.InvocationAPI.RichConfig`: `Types.RichConfig`

Returns a `RichConfig` object. For more information, please refer to the [InvocationAPI guide.](/v2/apps/types/invocation-api.md)

::: code-group

```luau [Annotation]
Apps.InvocationAPI.RichConfig: {
		AppMeta: {
			Name: string,
			Icon: string,
			Version: string,
			Description: string
		},

		Dependencies: {
			Administer: string,
			SettingsAPI: string,
			AppPlatform: string,

			AdministerModules: {
                {
                    Type: "SERVER" | "CLIENT"
                    Name: string
                }
            },

			IsAdministerVersionRelevant: boolean
		},

		TextCommands: {}, --// Reserved for future use
		State: {}
	}
```

```luau [Example]
local RichConfig = InvokeAPI.RichConfig()

RichConfig.AppMeta.Name = "Player Management"
RichConfig.AppMeta.Description = "Manage your game's players from anywhere!"
RichConfig.AppMeta.Icon = require(game.ServerScriptService.Administer.Loader.Core.Icons).users
RichConfig.AppMeta.Copyright = "2024 - 2025 pyxfluff"
RichConfig.AppMeta.Version = "2.0.0"

RichConfig.Dependencies.AppPlatform = "min:2.0.0;max:3.0.0"
RichConfig.Dependencies.Administer = "min:2.0.0;max:3.0.0"
RichConfig.Dependencies.SettingsAPI = "2.0"
RichConfig.Dependencies.AdministerModules = {
    {
        Type = "SERVER",
        Name = "AdminRunner"
    },
    {
        Type = "SERVER",
        Name = "Utilities"
    }
}

RichConfig.ClientFrame = script.PlayerManagement.UI.PlayerManagement
RichConfig.Bootstrap = require(script.PlayerManagement.Main)
```

:::

## `App.InvocationAPI.Construct`

Compile and executes an Administer app.

::: code-group

```luau [Annotation]
InvokeAPI.Construct(Config: RichConfig, MiscData: {...})
```

```luau [Example]
InvokeAPI.Construct(RichConfig, a)
```

```luau [Output (failure)]
{
    false,
    "this app does not support your administer version. please upgrade to the latest version of Administer."
}
```

```luau [Output (success)]
{
    true,
    {}
}
```

:::

## `App.LoadLocal`

Loads an app either from its module ID or local location and gives it access to the InvocationAPI required to execute the app.

::: code-group

```luau [Annotation]
App.LoadLocal(
	Path: number | Instance,
	AppMeta: { InstallDate: number, InstallSource: string, AppID: number }
): Types.Response
```

```luau [Example]
App.LoadLocal(
	game.ServerScriptService.Administer.LocalApps.PlayerManagement,
	{ 
        InstallDate = os.time(), 
        InstallSource: "AppMarketplace/2.0", 
        AppID: 133017837
    }
): Types.Response
```

```luau [Output (failure)]
--// This app cannot be loaded as it has failed a test, this is probably due to an outdated Administer version. The server says: {{failure reason}}
nil
```

```luau [Output (success)]
{
    true,
    {
        AppID = 133017837,
        BuildTime = 23.138,
        Description = "Test app.",
        InstallSource = "AppMarketplace/2.0",
        InstalledSince = os.time(),
        Copyright = "pyxfluff 2025",
        Version = "2.0.0",
        Icon = "rbxassetid://13234542324",
        Name = "Test App"
    }
}
```

:::


## `Apps.Initialize`

::: info
You probably should not be using this. It exists for Administer to use internally.
:::

Loads the AppDB and loads marketplace apps. This function must be called in order for Administer to load admins. Because of this, there is a polling limit for how long it is willing to wait for every app will load which can be changed by accessing `Var.AppPollingLimit`.

::: code-group

```luau [Example]
App.Initialize()
```

```luau [Output (annotation)]
boolean
```

:::

## `App.Uninstall`

Uninstalls an app based on its asset ID.

::: code-group

```luau [Annotation]
App.Uninstall(AppID: number)
```

```luau [Example]
App.Uninstall(83492944)
```

```luau [Output (failure)]
{
    false,
    "Something went wrong."
}
```

```luau [Output (success)]
{
    true,
    "Done!"
}
```

:::

## `Apps.GetAll`

Gets a list of all apps, depending on the `Source` 

::: code-group

```luau [Annotation]
App.GetAll(
    "DataStore_Raw" | "Combined" | "Bootstrapped" | nil
): {boolean, any}
```

```luau [Example]
local BootstrappedApps = App.GetAll("Bootstrapped")
local AppsDataStore = App.GetAll("DataStore_Raw")
```

```luau [Output (failure)]
{
    false,
    "Source must be of value nil | Bootstrapped | DataStore_Raw | Combined"
}
```

```luau [Output (success)]
{
    true,
    {...}
}
```

:::

## `Apps.Install`

Installs an app based on its raw app ID. After it's installed, the app will be executed. In order for the app to be successfully installed, it must not be a duplicate.

AppName parameter exists for displaying in the UI for unauthorized users in the rank creator, it won't impact the Library menu.

::: code-group

```luau [Annotation]
App.Install(
    AppID: number,
    InstallContext: string,
    AppName: string
): {boolean, string}
```

```luau [Example]
local Result = App.Install(
    133017837,
    "AppMarketplace/2.0",
    "My cool app"
)
```

```luau [Output (failure)]
{
    false,
    "This app is a duplicate."
}
```

```luau [Output (success)]
{
    true,
    "Installation completed!"
}
```

:::

## `Apps.ServerAPI.new`

Installs an AOS instance and performs checks on it. 

The AOS Instance must be online because Administer will attempt to reach `/pub/.administer`, which should return technical data, specifically `{server: "AdministerAppServer"}`, which is what Administer uses to verify it is a valid AOS instance. You can see an example of what data it returns [here.](https://aos-canary.admsoftware.org/pub/.administer)

::: code-group

```luau [Annotation]
App.ServerAPI.new(
    URL: string,
    ActingUser: int
)
```

```luau [Example]
App.ServerAPI.new(
    "https://aos-eur-1.admsoftware.org",
    133017837
)
```

```luau [Output (failure)]
{
    false,
    "Something went wrong, please check the logs."
}
```

```luau [Output (success)]
{
    true,
    "Done!"
}
```

:::

## `Apps.ServerAPI.GetList`

Gets a list of Assets from all installed AOS instances. You may also specify a specific server if you only want results from that.

::: code-group

```luau [Annotation]
App.ServerAPI.GetList(
    SpecificServer: string,
    Area: string --// Generally "Themes", "Featured", or "Apps"
):
    {
        [string] = {
            {
                ["Server"] = string,
                ["developer"] =  {
                    ["ID"] = number,
                    ["Name"] = string
                },
                ["downloads"] = number,
                ["id"] = string,
                ["last_update"] = number,
                ["name"] = string,
                ["object_type"] = string,
                ["rating"] = number,
                ["short_desc"] = string,
                ["weighted_score"] = string
            }
        }
    }
```

```luau [Example]
local AppList = App.ServerAPI.GetList(nil, "Featured")

for _, App in AppList["https://aos-canary.admsoftware.org"] do
    print(`{App.name}'s ID is {App.id}!`)
end
```

```luau [Output (failure)]
{
    ["https://aos-canary.admsoftware.org"] = {
        false,
        429
    }
}
```

```luau [Output (success)]
{
    ["https://aos-canary.admsoftware.org"] =  {
        [1] = {
            ["Server"] = "https://aos-canary.admsoftware.org",
            ["developer"] = {
                ["ID"] = 133017837,
                ["Name"] = "pyxfluff"
            },
            ["downloads"] = 11,
            ["id"] = "org.admsoftware.Reporter",
            ["last_update"] = 1747539649.39724,
            ["name"] = "2.0 Feedback Assistant",
            ["object_type"] = "app",
            ["rating"] = 1,
            ["short_desc"] = "Quick reporting",
            ["weighted_score"] = 7.5
        }
    },
    ["https://aos-us-2.admsoftware.org"] = {
        ...
    }
}
```

:::



## `Apps.ServerAPI.RegisterPrimary`

Registers an AOS Node as it's primary. This is generally used for our production servers, but in a multi-node cluster it may be useful.

::: code-group

```luau [Annotation]
App.ServerAPI.RegisterPrimary(
    URL: string
)
```

```luau [Example]
App.ServerAPI.RegisterPrimary(
    "https://aos-eur-1.admsoftware.org"
)
```

```luau [Output (failure)]
{
    false,
    "Something went wrong."
}
```

```luau [Output (success)]
{
    true,
    "Done!"
}
```

:::

## `Apps.ServerAPI.GetServerStatuses`

Gets the status of every installed AOS node.

::: code-group

```luau [Annotation]
App.ServerAPI.GetServerStatuses()
```

```luau [Example]
local Statuses = App.ServerAPI.GetServerStatuses()

for i, Data in Statuses do
    print(`{Data.URL} has code {Data.Code or 200} with ping {Data.PingTime}!`)
end
```

```luau [Output]
{
    true,
    {
        {
            URL           = "https://aos-canary.admsoftware.org",
            Name          = "AOS Canary",
            IsDev         = true,
            Uptime        = 83233,
            Banner        = {},
            AOSVers       = "5.3.1",
            PingTime      = 24.12,
            InstalledBy   = 133017837,
            ServerInstall = 173891723128
        }
    }
}
```

:::

## `Apps.ServerAPI.UninstallServer`

Removes a server from the game's index. Does not unregister as primary on the backend.

::: code-group

```luau [Annotation]
App.ServerAPI.UninstallServer(
    ServerURL: string,
    IsStatic: boolean
)
```

```luau [Example]
App.ServerAPI.UninstallServer(
    "https://aos-us-3.admsoftware.org"
)
```

```luau [Output (failure)]
{
    false,
    "This app server does not appear to be installed."
}
```

```luau [Output (success)]
{
    true,
    "Done!"
}
```

:::

## `Apps.ServerAPI.GetApp`

Gets detailed information on a specific app from its server.

::: code-group

```luau [Annotation]
App.ServerAPI.GetApp(
    AppServer: string,
    AppID: string
)
```

```luau [Example]
local App = App.ServerAPI.GetApp(
    "https://aos-us-3.admsoftware.org",
    "org.admsoftware.Reporter
)

print(App[2].Name)
```

```luau [Output (failure)]
{
    false,
    418,
    {
        ProcessedMS = 2.342,
        RespMessage = "I'm a Teapot",
        Code = 418
    }
}
```

```luau [Output (success)]
{
    true,
    {
        Metadata = {
            AppAPIPreferredVersion = "min:2.0.0;max:3.0.0",
            AppVersion = "1.0",
            AssetType = "app",
            AdministerID = "org.admsoftware.Reporter",
            UpdatedAt = 1747539649.39724
        },

        Developer = {
            Name = "pyxfluff",
            ID = 133017837
        },

        Votes = {
            Likes = 2,
            Dislikes = 0,
            Favorites = 0
        },

        Name = "2.0 Feedback Assistant",
        Title = "Quick Reports",
        Downloads = 11,
        IconID = 114682642420310,
        BlurredIcon = 137730609161214,
        ShortDescription = "Quick reporting",
        LongDescription = "With the 2.0 Feedback Assistant, you can quickly create bug reports and share feedback with the Administer development team.",
        InstallID = 109468956838534,
        Tags = { "in-panel", "bug-reporting" }
    }
}
```

:::

## `Apps.ServerAPI.InstallFromServer`

Installs an app from it's AOSId2 and server URL.

::: code-group

```luau [Annotation]
App.ServerAPI.InstallFromServer(
    ServerURL: string,
    AppID: string
)
```

```luau [Example]
App.ServerAPI.InstallFromServer(
    "https://aos-us-1.admsoftware.org",
    "org.admsoftware.player-management.Main"
)
```

```luau [Output (failure)]
{
    false,
    "Sorry, but this app could not be installed. Server returned error: 400 (You may not install an app twice.)"
}
```

```luau [Output (success)]
{
    true,
    "Done!"
}
```

:::

## `Apps.ServerAPI.Vote`

Allows you to like or dislike an app. 1 = like, 2 = favorite, 0 = dislike. Outputs a [RequestAsync raw output.](https://create.roblox.com/docs/reference/engine/classes/HttpService#RequestAsync)

::: code-group

```luau [Annotation]
App.ServerAPI.Vote(
    ServerURL: string,
    AppID: string,
    Vote: number
)
```

```luau [Example]
App.ServerAPI.Vote(
    "https://aos-us-3.admsoftware.org",
    "org.admsoftware.player-management.Main",
    1
)
```

:::

## `Apps.ServerAPI.GetAOSInstances`

Gets currently active official AOS nodes from https://gateway.admsoftware.org and checks their ping.

::: code-group

```luau [Annotation]
App.ServerAPI.GetAOSInstances(
    DoStatusChecks: boolean
)
```

```luau [Example]
local Instances = App.ServerAPI.GetAOSInstances(true)
```

```luau [Output (success)]
{
    {
            name = "Canary"
            region_code = "aos-canary"
            url	= "https://aos-canary.admsoftware.org",
            IsUp = true,
            Ping = 52.421
    }
}
```

:::

## `Apps.ServerAPI.Search`

Performs an API RichSearch.

::: code-group

```luau [Annotation]
App.ServerAPI.Search(
    ServerURL: string,
    Query: string
)
```

```luau [Example]
local Results = App.ServerAPI.Search(
    "https://aos-us-3.admsoftware.org",
    "Panel"
)

print(Results)
```

```luau [Output (failure)]
{
    false,
    400,
    {
        ProcessedMS = 85.232,
        RespMessage = "No results found.",
        Code = 400
    }
}
```

```luau [Output (success)]
{
    true,
    {
        ...
    }
}
```

:::

## `Apps.ServerAPI.GetTotals`

Returns the total amount of app servers and running apps.

::: code-group

```luau [Annotation]
App.ServerAPI.GetTotals()
```

```luau [Example]
local Totals = App.ServerAPI.GetTotals()

print(`{Totals.Servers} app server(s) are installed and {Totals.Apps} are running!`)
```

```luau [Output]
{
    Servers = 1,
    Apps = 4
}
```

:::
