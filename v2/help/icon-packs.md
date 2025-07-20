# Icon Packs

Icons packs are configured on a game level and usually come with Themes. The majority of Administer-produced code uses them but they can be accessed through `Utilities` modules on the [server](/v2/server/utilities#utilities-icon) and [client.](/v2/client/utilities#utilities-icon)

::: tip
If you're looking to see what icons are valid Administer icons for use in apps, refer to our [default FlatIcon UICons pack](https://github.com/administer-org/administer/blob/main/src/Server/Core/Icons.luau). This should also be what you base custom icon packs off. We generally use the same names that FlatIcon provides unless it does not make sense, separated by dashes (chain, iphone-notch, etc).
:::

Filled icons are always suffixed with -filled, but we only have a couple filled icons for use by default, those being pin-filled, star-filled, and warning-filled.

When making your own icon packs, you shouldn't remove any entries in the default table to prevent script errors. You also have to use Asset IDs (rbxassetid://xxxx) instead of library asset IDs. Eventually, we will have steps here to ensure Administer can find your icon pack to render for the client, but for now, you can replace the Icons script in Loader/Core/Icons with your custom icons.
