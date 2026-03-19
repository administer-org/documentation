# Variables (Vars)

The Variables module is an Administer-specific `_G`, or global variable file. It has the following properties:

**Config**: Config path

**RemotesPath**: Where Administer remotes are stored.

**EnableFreeAdmin**: If enabled, all admin checks return `true` automatically. This setting is **NOT** recommended for any form of production use.

**DefaultAppServer**: The AOS instance which is used for some other requests. May be replaced with a functional primary server at runtime.

**ProxyURL**: Roblox proxy URL. Custom proxies are supported, but their request format MUST follow the template of `https://proxy.url/ROBLOX_SUBDOMAIN/<path:path>`

**Locales**: Locales directory

**AppPollingLimit**: How many times the Administer App bootstrapper will wait for apps to be finished loading.

**IsFirstBoot**: Usually used for accessing whether or not Administer is being used for the first time, but setting this to `true` will automatically reset your games Administer data, so don't mess with this if you don't have to.

**WaitForBootstrap**: Whether or not Administer waits for apps before distributing panels

**Services**: metatable containing cached Roblox servers. No setup is requited to index a service, just type `Var.Services.XService` and it will work.

**BaseHomeInfo**: See [Widget docs](/v2/apps/types/widgetconfig)

**DataStores**: Live datastores for Administer data. 

**Notification**: Reserved for notification sounds, not used yet

**DidBootstrap**: Set to true once apps are loaded

**LogJoins**: Whether or not an admin is added to the `Admins` table

**PanelFound**: Output of `Administer.Resources:FindFirstChild("AdministerMainPanel")`

**Branch**: Active authenticated branch

**DisableBootstrapProtection**

**IsRecentV1xMigration**: Whether or not Administer auto-migrated from v1.2.3 to v2 within this session

**ModuleSensitivity**: List of all server modules and how sensitive they are (for the Privacy section in the marketplace)

**Admins**: A list of every admin who has ever been in the game and currently active ones

**InitClock**: Contains data about how quick Administer booted

**DefaultRank**: Admin rank template

**DefaultRankData**: Same as above but for the `CurrentRanks` key

**Branches**: List of Administer branches

**Panel**: Contains a `Path` variable with the panel

**CachedLocales**: List of all users and their preferred locales `{ [133017837] = "en-US" }`

**AppServers**: Cached `DataStore.AppDB.AppServerList`

**Panel.Spawn**: Creates a new admin panel and assigns properties
