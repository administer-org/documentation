# Variables

Contains many runtime values. Unlike the Server [variables](/v2/server/core/vars.md), this is not useful for any configuration. It contains the following values:

**AdministerRoot** Location of the loader script
**Remotes**: Administer remotes location
**MainFrame**: Location of Administers content
**Mobile**: Whether or not Administer detected the user using a mobile device
**InitErrored**: Whether or not Administer halted loading due to failed server modules
**IsOpen**: Whether or not the panel is currently open
**IsPanelAnimation**: Whether or not the panel is currently in an open/close animation.
**EnableEditableImages**: The *EnableEditableImages* cached setting
**ActivePage**: The currently active apps frame
**DoHeaderEffects**: Whether or not the app drawer can be opened.
**HeartbeatDuration**: How often heartbeats occur
**PingTicksLog**: How many ping ticks are logged
**AnimationSpeed**: The speed of client animations
**CombinedButtonConfig**: The combined button config of every app loaded currently
**Ping**: The total duration of every ping timing
**Panel**: Same as AdministerRoot
**Services**: Contains many Roblox services for use in client scripts. Unlike the server counterpart, this list is static and cannot dynamically load services.
**LocaleModule**: The currently active locale
**Icons**" The currently active icon pack
**Marketplace**: Data about the marketplace you do not need to access.
