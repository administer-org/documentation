# Apps

Mostly a Marketplace controller, but has some other functions for interacting with the frontend. Most functions require an AOS (Administer Online Services) URL. If you don't have one, use one of ours. [Learn more](/AOS/information/about.md), or [find an Administer Software-hosted node...](/AOS//information/nodes.md)

## `Apps.AddAppDrawerButton`

Adds a button to the App Drawer. Before making the button visible, Administer checks to see if the app can be used by a rank.

::: code-group
```luau [Annotation]
Apps.AddAppDrawerButton(
    Config: {
        ButtonID: string,
        AppName: string,
        Description: string,
        Icon: string,

        MainButtonClick: () -> ()?,
        MainButtonFrame: Frame | CanvasGroup?,

        SubIcons: {
            {
                Name: string,
                Icon: string,
                Click: () -> (),
                Frame: Frame | CanvasGroup
            }?
        }
    }
)
```

```luau [Example (single page)]
Apps.AddAppDrawerButton({
	AppName = "Homepage",
	Description = "Administer Homepage",
	Icon = Utilities.Icon "home",
	ButtonID = "AdmHomepage",

	MainButtonClick = function() 
        print("Opening the homepage..")
    end,
	MainButtonFrame = Var.MainFrame.Home,

	SubIcons = {}
})
```

```luau [Example (Multiple pages)]

Apps.AddAppDrawerButton({
	AppName = t("Apps.MainFrame.Config.Title"),
	Description = t("Apps.MainFrame.Config.Desc"),
	Icon = Utilities.Icon "media",
	ButtonID = "AdmConfiguration",

	SubIcons = {
		{
			Name = t("Configuration.MenuBar.New.AInfoPage.HeaderLabel"),
			Icon = Utilities.Icon "info",
			Click = function() end,
			Frame = Var.MainFrame.Configuration.InfoPage,
			ButtonID = "Information"
		},
		{
			Name = Utilities.ToSentenceCase( t("Configuration.Apps.Content.Template.Settings.HeaderLabel") ),
			Icon = Utilities.Icon "gear",
			Click = function() end,
			Frame = Var.MainFrame.Configuration.Settings,
			ButtonID = "Settings"
		},
		{
			Name = Utilities.ToSentenceCase( t("Header.AppDrawer.HeaderLabel") ),
			Icon = Utilities.Icon "grid",
			Click = Apps.LoadAppList,
			Frame = Var.MainFrame.Configuration.Marketplace,
			ButtonID = "Marketplace"
		},
		{
			Name = t("Configuration.Admins.Container.Admins.Header.TLabel"),
			Icon = Utilities.Icon "user-clip",
			Click = function() end,
			Frame = Var.MainFrame.Configuration.Admins,
			ButtonID = "AdminConfig"
		}
	}
})
```

:::

## `Apps.GetVersionLabel`

Compares an API version and returns a formatted string.

::: warning [Deprecation notice]
This method is deprecated and no longer returns any data. It will be removed soon and should not be used for new Apps.

> Deprecation in: Administer 2.1.0
> API Removal in: Administer 2.2.0
:::

::: code-group
```luau [Annotation]
Apps.GetVersionLabel(Version: number): string
```

```luau [Example]
script.Parent.RichText = true
script.Parent.Text = Apps.GetVersionLabel(2.0)
```
:::

## `Apps.Show`

Shows a modal with an app, theme, icon pack, or component inside of it, generally used for the marketplace. Requires an [AOS Instance and an Asset ID on it.](/AOS/information/about.md)

::: code-group
```luau [Annotation]
Apps.Show(
    ServerURL: string,
    ID: string,
    DisplayedBecause: string,
): ()
```

```luau [Example]
Apps.Show(
    "https://aos-us-1.admsoftware.org"
    "org.admsoftware.Reporter",
    "You searched for it"
)
```
:::

## `Apps.Clear`

Used to reset the marketplace's content.

::: code-group
```luau [Annotation]
Apps.Clear(): ()
```

```luau [Example]
Apps.Clear()
```
:::

## `Apps.Search`

Performs a search from a given [AOS URL.](/AOS/information/about.md)

::: code-group
```luau [Annotation]
Apps.Search(
    Query: string,
    ServerURL: string
): { 
    Success: boolean, 
    Data: {
        {
            Type: "card" | "text",
            Value: string | { any }
        }
    },
    AOSProcessedInfo: string
 }
```

```luau [Example]
print(Apps.Search(
    "Player Management",
    "aos-us-1.admsoftware.org"
).Data)
```
:::

## `Apps.LoadAppList`

Takes in an optional list of apps, or performs an AOS search based on the currently active page. (`Var.Marketplace.ActivePageType`)

::: code-group
```luau [Annotation]
Apps.LoadAppList(
    List: {}?
): ()
```

```luau [Example]
Apps.LoadAppList()
```
:::

## `Apps.InitSearchbar`

Loads the Searchbar UI and binds events. This method is mostly for internal use.

::: code-group
```luau [Annotation]
Apps.InitSearchbar()
```

```luau [Example]
Apps.InitSearchbar()
```
:::

## `Apps.LoadLibrary`

Loads the Library page.

::: warning
This does not return anything and is probably not useful for you. Instead, hook into the [GetAppServers](/v2/server/apps#apps-serverapi-getserverstatuses) and/or [GetList](/v2/server/apps#apps-serverapi-getlist)
:::

::: code-group
```luau [Annotation]
Apps.LoadLibrary(): ()
```

```luau [Example]
Apps.LoadLibrary()
```
:::

## `Apps.Init`

Enables the Sidebar (via `Apps.InitSidebar`) and changes text labels. If `OnlyRefreshCounts: true`, then the subtext under the Library label will be updated and the function will exit.

::: warning
This does not return anything and is probably not useful for you, it is used for Administer to launch the Marketplace at runtime.
:::

::: code-group
```luau [Annotation]
Apps.Init(
    OnlyRefreshCounts: boolean?
): ()
```

```luau [Example]
--// We have installed a new app and want to update the label
local function DownloadApp(...)
    --// ...
    Apps.Init(true) --// refresh label
end

repeat task.wait() until game:IsLoaded()

Apps.Init(false)
```
:::
