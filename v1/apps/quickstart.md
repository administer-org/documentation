# Application Quickstart

Creating an Administer app is about as easy as it can get.

::: tip Need more in-depth information?

Skip to the [Detailed Documentation](./namespace/app.md).

:::

::: warning Hi there, v1 user!

The v1 API (for Administer 1.0.0 - 1.2.4) is soon going to be replaced with the 2.0 API. We do not recommend you write any new applications with the V1 API and instead hold out for the 2.0 API unless you are prepared to migrate a large portion of your Administer-facing code.

:::


## Ideal structure

The recommended structure for an Administer application is like so:
```
Main Module (ModuleScript)/
├─ Content (Folder)/
│  ├─ Main (ServerScript)
```

Inside the Main Module, you should return a Table with both an `OnDownload` and `Init` method, like so:
```luau
return {
    Init = function ()
        script.Test.Parent = game.ServerScriptService.Administer.Apps
        return "Example Application", "An Administer test application.", "v1"
    end,
    OnDownload = function ()
        print("App was pulled!")
    end,
}
```

## Example application

Before you can create an app, you'll need an app configuration:
```luau
local AppConfig = {
    -- This is reserved for future releases
}
```

Afterwards, you should [build your application](./namespace/app.md#app-build) like so:
```luau
App.Build(
    function (config, built)
        print("This is our app config:", config)
        print("This is the Built API:", built)
    end,
    AppConfig,
    {
        Icon = "rbxassetid://0000",
        Name = "An Application",
        Frame = script.Parent.UI,
        Tip = "This application does something.",
        HasBG = true,
        BGOverride = "rbxassetid://0000"
    }
)
```
