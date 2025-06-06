# AppModule

An AppModule is the parent MainModule of an app. It should return exactly **one** function.

## Foundational Knowledge

Use of the [RichConfig](./richconfig) is required as it provides a standardized format for Administer to find and interact with your app.

## Code Examples

The following is the module for Player Management:

```luau
--// pyxfluff 2024 - 2025

local Types = require(game.ServerScriptService.Administer.Loader.Core.Types)

return function(InvokeAPI: Types.InvocationAPI, a)
	local RichConfig = InvokeAPI.RichConfig()

	RichConfig.AppMeta.Name = "Player Management"
	RichConfig.AppMeta.Description = "Manage your game's players from anywhere!"
	RichConfig.AppMeta.Icon = require(game.ServerScriptService.Administer.Loader.Core.Icons).users
	RichConfig.AppMeta.Copyright = "2024 - 2025 pyxfluff"
	RichConfig.AppMeta.Version = "2.0.0"

	RichConfig.Dependencies.AppPlatform = "min:2.0.0;max:3.0.0"
	RichConfig.Dependencies.Administer = "min:2.0.0;max:3.0.0"
	RichConfig.Dependencies.SettingsAPI = "min:2.0.0;max:3.0.0"
	RichConfig.Dependencies.AdministerModules = {
		{
			Type = "SERVER",
			Name = "AdminRunner"
		},
		{
			Type = "SERVER",
			Name = "Utilities"
		}
	} :: any

	RichConfig.ClientFrame = script.PlayerManagement.UI.PlayerManagement
	RichConfig.Bootstrap = require(script.PlayerManagement.Main)

	return InvokeAPI.Construct(RichConfig, a)
end
```

Need a live template to play with? You can download an example application [here.](https://drive.proton.me/urls/VAKEQE0K8C#RIoElUvHPV1R)
