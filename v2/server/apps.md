# Apps

## `Apps` (parent)

::: warning
Generally you should not be using module properties. Use APIs when possible.
:::

Contains some properties which may be useful for debugging.

::: code-group

```lua [Annotation]
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

```lua [Annotation]
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

```lua [Example]
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

```lua [Annotation]
InvokeAPI.Construct(Config: RichConfig, MiscData: {...})
```

```lua [Example]
InvokeAPI.Construct(RichConfig, a)
```

:::

## `App.LoadLocal`

Loads an app either from its module ID or local location and gives it access to the InovcationAPI required to execute the app.

::: code-group

```lua [Annotation]
App.LoadLocal(
	Path: number | Instance,
	AppMeta: { InstallDate: number, InstallSource: string, AppID: number }
): Types.Response
```

:::


## `Apps.Initialize`

::: info
You probably should not be using this. It exists for Administer to use internally.
:::

Loads the AppDB and loads marketplace apps. This function must be called in order for Administer to load admins. Because of this, there is a polling limit for how long it is willing to wait for every app will load which can be changed by accessing `Var.AppPollingLimit`.

## `App.Uninstall`

Uninstalls an app based on its asset ID.

::: code-group

```lua [Annotation]
App.Uninstall(AppID: number)
```

```lua [Example]
App.Uninstall(83492944)
```

:::

## `Apps.GetAll`

Gets a list of all apps, depending on the `Source` 

