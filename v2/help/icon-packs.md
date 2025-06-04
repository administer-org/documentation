# Icon Packs

Icons packs are configured on a game level and usually come with Themes. The majority of Administer-produced code uses them but they can be accessed through `Utilities` modules on the [server](/v2/server/utilities#utilities-icon) and [client.]()

If you are looking to make your own, you can use our [default FlatIcon pack](https://github.com/administer-org/administer/blob/main/src/Server/Core/Icons.luau) as an example.

Icon packs should be full (missing icons in the table will create script errors) and using Asset IDs (not image IDs). Eventually, we will have steps here to ensure Administer can fidn your icon pack to render for the client, but for now, you can replace the Icons script in Loader/Core/Icons with your custom icons.
