# RichConfig

RichConfig is a property of [Apps](/v2/server/apps) which is used for bootstrapping apps. It returns a table which is used for Administer knowing what to do with your app and identifying it.

You can construct a new RichConfig object using the `new()` constructor like so:

```luau
local Apps = require("/Administer/Loader/Modules/Apps")

local MyConfig = Apps.InvocationAPI.RichConfig()
```

It will return the following blank RichConfig object:

```lua
{
    AppMeta = {
			Name = "Default App",
			Icon = "",
			Version = "0",
			Description = "This is an application which is improperly configured."
		},

		Dependencies = {
			Administer = "2.0.0",
			SettingsAPI = "1.0",
			AppPlatform = "2.0",

			AdministerModules = {},

			IsAdministerVersionRelevant = true
		},

		TextCommands = {},
		State = {}
}
```

In order for your app to compile, you need to properly fill out every field, including some which are not present in the default one (`ClientFrame` and `Bootstrap`)

## AppMeta

This section has the metadata for your app. It doesn't change anything functionally, only how it is displayed in the Library:

![An app in the library](media/library-app.png)

## Dependencies

The Dependencies section tells Administer how your app should run. Please refer to the following table.

| Property                    | Purpose                                                                         | Layout     |
|-----------------------------|---------------------------------------------------------------------------------|------------|
| Administer                  | Administer versions your app will run on                                        | StdVersion |
| SettingsAPI                 | Which version of the SettingsAPI will your app run with?                        | StdVersion |
| AppPlatform                 | App API version required for your app to build                                  | StdVersion |
| AdministerModules           | Administer modules which will be passed through to your MainHook                | See below  |
| IsAdministerVersionRelevant | Whether or not Administer being out of date will prevent your app from starting | boolean    |

## AdministerModules

The AdministerModules field allows you to request server modules that should be given to your Bootstrap hook at runtime. You can request anything in the `Modules` folder with the following:
```luau
{
    Type = "SERVER",
    Name = "Utilities"
}
```

So a completed write will look like the following:
```luau
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
```

### StdVersion

StdVersion (StandardVersion) is a string which specifies which versions of a platform your app may support. Here are some examples:

::: code-group

```luau [Example (correct usage)]
RichConfig.Dependencies.Administer = "min:2.0.0;max:3.0.0"
```

```luau [Unsupported version]
RichConfig.Dependencies.Administer = "min:1.2.0;max:1.2.3"
```

```luau [Incorrect usage]
RichConfig.Dependencies.Administer = "2.0.0"
```

:::

## Bootstrap

This is the function that Administer provides data with to initiailze your app. 

::: code-group
```luau [Annotation]
RichConfig.Bootstrap: () -> (
    {}, 
    any, --// RichConfig.State value
    {
        FinishTime: string,
        RunContext: string,
        RanksWithAccess: number,
        Modules: { { any } }?
    }
): { boolean, {}? }
```

:::

## ClientFrame

This is what the client will get from your app if they have access. It can be a Frame, CanvasGroup, or LocalScript.
