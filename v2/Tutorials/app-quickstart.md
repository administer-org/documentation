# Your First App

Making your first app? Don't sweat it - it's easy.

::: tip

Visual learner? We have YouTube tutorials! [Click here to view the playlist.]()

:::

## Section I: Basic Setup & Structure

The recommended structure for an Administer application is like so:
```
MainModule (ModuleScript)/
├─ Content (Folder)/
│  ├─ Main (ModuleScript)
```

Inside your MainModule, you should return an [InvocationAPI Object](../apps/types/invocation-api.md). For more in-depth information, see that, but for the sake of simplicity we are going to only include the basic here.

First, include the [Types](../apps/types/typesapi) module to help you out, and then return a basic function with the invocation API and [required internal data](../apps/help/extra-data):
```lua
local Types = require(script.Parent.Parent.Core.Types)

return function(InvokeAPI: Types.InvocationAPI, RequiredData)
    --// ...
end
```

::: info
Everything in this section will be small portions of otherwise bigger concepts found [in the InvocationAPI document.](../types/invocation-api.md)
:::

Now, inside of that function, you can create a new [RichConfig](../apps/types/rich-config) object and ask for the InvocationAPI to build it, like so:

```lua
local RichConfig = InvokeAPI.RichConfig()

--// This is where your app config will be

return InvokeAPI.Construct(RichConfig, RequiredData)
```

Your MainModule should now look like this.

```lua
local Types = require(script.Parent.Parent.Core.Types)

return function(InvokeAPI: Types.InvocationAPI, RequiredData)
	local RichConfig = InvokeAPI.RichConfig()

	return InvokeAPI.Construct(RichConfig, RequiredData)
end
```

You are now ready for the next portion!

## Section II: RichConfig

The [RichConfig](../apps/types/richconfig) is a useful tool for developing for Administer. It determines how end users see your app and how Administer treats it.

### Meta
The Meta section includes your app's metadata, such as its name, display name, creator, and icon. With our `RichConfig` we created in Section I...

```lua
RichConfig.AppMeta.Name = "Test App" --// The name shown in UI
RichConfig.AppMeta.DisplayName = "App" --// The name shown in the app sidebar
RichConfig.AppMeta.Description = "This is a test app for the 2.0 API!" --// The description shown on hover and in the App Library
RichConfig.AppMeta.Icon = "rbxassetid://00000000" --// The icon shown in the sidebar
RichConfig.AppMeta.Background = "rbxassetid://00000000" --// The image shown in image backgrounds whereever Administer wants
RichConfig.AppMeta.Copyright = "© 2025 pyxfluff" --// Used in the app library
RichConfig.AppMeta.Version = "1.0.0" --// Also in the app library
```

No data is crucial or will impact how you app functions but most must be present and will render an error if not.

### Dependencies
This portion tells Administer what you want for your app. It's crucial to set these correctly to prevent users from not being able to use your app.

Specifying what versions work with your app take structured strings under the format `min:<minimum version>;max:<maximum version>`. To not set a cap on the version, set `max` to `max:50.0.9`.

`AdministerModules` takes a list of what server and client modules you would like to have passed to your compiled app. They must be an [Administer Module](../apps/types/module.md).

```lua
RichConfig.Dependencies.AppPlatform = "min:2.0.0;max:5.0.0"
RichConfig.Dependencies.Administer = "min:2.0.0;max:2.1.0"
RichConfig.Dependencies.SettingsAPI = "min:2.0.0;max:2.0.0"
RichConfig.Dependencies.AdministerModules = {
	{
		Type = "SERVER",
		Name = "AdminRunner"
	},
	{
		Type = "CLIENT",
		Name = "RenderUI"
	}
}
```

### Bootstrap

With the RichConfig done, you are now ready to tell Administer what to do when the app is ready.

If you followed the [structure](app-quickstart#section-i-basic-setup-structure) from earlier, you should have a folder with another module. You can pass that module's function (or any other for that matter) through.

It returns three parameters but for the sake of simplicity we do not go into those here. Please refer to the [Bootstrap API.](../apps/types/richconfig.md#bootstrap)
