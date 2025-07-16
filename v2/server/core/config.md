# Configuration

This module contains core Administer metadata and settings defaults.

## Name

Administers name! Good for if you want to get rid of the Administer name.

## VersData

Contains version information.

```luau
Config.VersData = {
    --// Service metadata
    Service = { 
        Name = "Administer",
        Icon = `rbxassetid://{require(script.Parent.Icons).logos["administer-blue"]}`
    },

    --// Separated version number
    Major = 2,
    Minor = 0,
    Tweak = 0,

    --// Other useful data
    Extra = "RC2 a22da06",
    String = "2.0.0",
    GitRevision = "a22da06",

    --// Raw version numbers
    NoExtraData = "2.0.0",
    APIRevision = "2.0.0",

    --// Identifier
    ID = "org.admsoftware.Core"
}
```

## Admins

Contains legacy "hardcoded admins". Generally you should **not** be using this and we cannot promise the feature will always exist.

```luau
Config.Admins = {
    Groups = {
        [0] = { --// Group ID
            RankNumber = 255, --// Group rank ID
            AdminRankID = 1   --// Administer rank ID, leave 1 for administrator rights
        }
    },

    Players = {
        [0] = { --// User ID
            AdminRankID = 1
        }
    }
}
```

## Contributors

Contains a list of Administer Contributors.

```lua
Config.Contributors = {
    {
        UserID = 133017837,
        Name = "pyxfluff",
        Job = "Main developer, AOS, Frontend"
    },
    ...
}
```

## Settings

Contains a full [SettingsAPI](/v2/server/settings.md) object. When you change values in this table it will become the default for new admins.

| Key                              | Display Name              | Type        | UI Type         | Default Value          | Requires Restart      | Description                                                                                                                                                                       |
| -------------------------------- | ------------------------- | ----------- | --------------- | ---------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Admins.RefreshTime               | Admin check time          | NumberRange | Slider          | 120                    | false                 | How often to check if admins are still admins, and take away the panel if they are not.                                                                                           |
| Admins.LiveUpdate                | Live rank changes         | Boolean     | Toggle          | true                   | false                 | If enabled, when a rank is made or edited, Administer will automatically check for new admins.                                                                                    |
| Admins.AllowProtectedEdits       | Edit Protected Ranks      | Boolean     | Toggle          | false                  | false                 | Allows editing protected ranks (superadmin). Also allows the creation of them. Not recommended as you could potentially break your installation.                                  |
| Admins.LoadDelay                 | LoadDelay                 | Enum        | Dropdown        | None                   | false                 | Enables a 3s delay before loading any admins. Use this to solve apps not initializing.                                                                                            |
| Admins.sudo                      | sudo                      | Boolean     | Toggle          | true                   | false                 | Enables free admin for everybody in Studio. Use this as an alternative to `EnableFreeAdmin` if you only need it for configuration within Studio.                                  |
| Interface.Language               | Interface Language (BETA) | Enum        | Dropdown        | en                     | (value is not static) | This option will override your default Roblox preference. This is a work in progress and will NOT be supported fully by Administer or apps yet.                                   |
| Interface.AnimationSpeed         | Animation Speed           | float       | Slider          | 1                      | false                 | Controls the speed of client-side animations. Higher is slower. Set to 0 to disable animations.                                                                                   |
| Interface.AllowThemeScriptHooks  | Allow themes to run Lua   | boolean     | Toggle          | true                   | true                  | If enabled, all themes will be allowed to run external Luau code. This is useful for more advanced themes or other modifications.                                                 |
| Interface.EnableEditableImages   | Enable EditableImages     | Boolean     | Toggle          | true                   | false                 | Enables EditableImage features such as app card backgrounds, reflections, and other blurring effects. Requires the game permission and ID verification due to Roblox limitations. |
| Interface.HomepageGreeting       | Homepage Greeting         | String      | InputBox        | Welcome to Administer! | false                 | This is the text that displays after the "Hello, username!" text on the homepage.                                                                                                 |
| Interface.PanelKeybind           | Panel Keybind             | KeyCode     | KeybindSelector | F2                     | false                 | The key used to open the panel on keyboard-enabled devices.                                                                                                                       |
| Interface.PanelFullscreenKeybind | Panel Fullscreen Keybind  | KeyCode     | KeybindSelector | LeftShift,F2           | false                 | The key used to expand the panel to be fullscreen on keyboard-enabled devices.                                                                                                    |
| Interface.EnableClickEffects     | Enable button effects     | Boolean     | Toggle          | false                  | true                  | Increases memory usage slightly, also makes noise.                                                                                                                                |
| Apps.DisableAOS                  | DisableAOS                | Boolean     | Toggle          | false                  | false                 | Prohibits AOS from being reached for the marketplace.                                                                                                                             |
| Apps.LoadApps                    | LoadApps                  | Boolean     | Toggle          | true                   | true                  | Enables the ability for Administer to load apps.                                                                                                                                  |
| Accessibility.ChatCommand        | ChatCommand               | Boolean     | Toggle          | true                   | false                 | Enables an /adm command to open Administer.                                                                                                                                       |
| Accessibility.AssistiveClose     | AssistiveClose            | Boolean     | Toggle          | false                  | true                  | Enables a close button in the top left for desktop. Always enabled on mobile.                                                                                                     |
| Accessibility.MobileOpenGesture  | MobileOpenGesture         | Enum        | Dropdown        | regular                | false                 | Controls how big the mobile open gesture is from the right side.                                                                                                                  |
| General.Verbosity                | Verbosity                 | Enum        | Dropdown        | log                    | false                 | The amount of debugging prints Administer makes. To disable remote logging (<-- Remote [1], --> Done (20ms)), set to `warning`.                                                   |
| General.KeybindRegisterTime      | KeybindRegisterTime       | Enum        | Dropdown        | optimistic             | false                 | Changes how soon Administer will listen for the keybind to open the panel. Optimistic = Early but quick, some things may not be finished, Safe = registers when ready             |
| General.ShortNumberDecimals      | ShortNumberDecimals       | Integer     | InputBox        | 2                      | false                 | How many decimals to display after a short number (54.123k)                                                                                                                       |

