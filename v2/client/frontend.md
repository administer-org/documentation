# Frontend

Many modules for controlling the Administer Frontend.

## `Frontend.ToggleFullscreen`

Toggles the Fullscreen state of the panel. You shouldn't be doing this for fun, the user should be in full control at all times.

::: code-group
```luau [Annotation]
Frontend.ToggleFullscreen(
    ForceClose: boolean
): ()
```

```luau [Example]
Var.Services.UserInputService.InputBegan:Connect(function(KeyCode, IsGameProc)
	if IsGameProc then return end

	if KeyCode.KeyCode == Enum.KeyCode.F2 then
		if Var.Services.UserInputService:IsKeyDown(Enum.KeyCode.LeftShift) then
			Frontend.ToggleFullscreen()
        end
    end
end)
```
:::

## `Frontend.Open`

Forces the panel. Optionally yields.

::: code-group
```luau [Annotation]
Frontend.Open(
    WaitForCompletion: boolean?
)
```

```luau [Example]
Var.Remotes.OpenPanel.OnClientEvent:Connect(Frontend.Open)
```
:::

## `Frontend.Open`

Closes the panel. If `Instant: true`, the animation will be bypassed.

::: code-group
```luau [Annotation]
Frontend.Close(
    Instant: boolean?,
    WaitForCompletion: boolean?
)
```

```luau [Example]
game.Players.LocalPlayer.Chatted:Connect(function(c)
    if c == "/close" then
        Frontend.Close(false, false)
    end
end)
```
:::

## `Frontend.Drawer.Open`

Opens the App Drawer. If `Var.DoHeaderEffects` is not `true` or if a popup is open, then the call is dropped.

::: code-group
```luau [Annotation]
Frontend.Drawer.Open(): ()
```

```luau [Example]
script.Parent.MouseButton1Click:Connect(Frontend.Drawer.Open)
```
:::

## `Frontend.Drawer.Open`

Closes the app drawer.

::: code-group
```luau [Annotation]
Frontend.Drawer.Close(): ()
```

```luau [Example]
script.Parent.MouseButton1Click:Connect(Frontend.Drawer.Close)
```
:::

## `Frontend.Drawer.HoverBegin`

Small animation on the app drawer button to show that there is something there

::: code-group
```luau [Annotation]
Frontend.Drawer.HoverBegin(): ()
```

```luau [Example]
script.Parent.MouseOver:Connect(Frontend.Drawer.HoverBegin)
```
:::

## `Frontend.Drawer.HoverEnd`

Same as above, but instead it gets rid of the icon

::: code-group
```luau [Annotation]
Frontend.Drawer.HoverEnd(): ()
```

```luau [Example]
script.Parent.MouseLeave:Connect(Frontend.Drawer.HoverEnd)
```
:::

---
# User Interfaces
For more information, please see the [Interfacing with the end user](/v2/help/interfaces) guide.

## `Frontend.Toast`

Creates a Toast element and displays it to the user.

::: code-group
```luau [Annotation]
Frontend.Toast(Config: {
    Text: string,
	Subtext: string,
	Icon: string,
	Timeout: number,

	OnClick: () -> ()?
})
```

```luau [Example]
Frontend.Toast({
	Icon = Utilities.Icon "clock-past",
	Text = "(debug) Client initialization complete",
	Subtext = "Done in 0s",
	Timeout = 7,
	OnClick = function()
		print("ok")
	end
})
```
:::

## `Frontend.Popup.new`

Creates a new popup.

::: code-group
```luau [Annotation]
Frontend.Popup.new(
    	App: {
		Name: string,
		Subheader: string,
		Icon: string
	},

	Icons: {
		Primary: string,
		SubIcon: string?
	},

	Header:     string,
	BodyText:   string,

	Options: { 
		{ 
			Text: string, 
            Icon: string,
            Callback: (Close: () -> (), TextInputChoices: { string? }) -> () 
		}
	},

	TextInputs: { 
		{ 
			HeaderText: string 
		}
	}
): { boolean, string }?
```

```luau [Example]
Frontend.Popup.new(
    {
        Name = "Player Management",
        Icon = Utilities.Icon "users",
    },
    {
        Primary = PlayerBasic.Photo,
        SubIcon = Utilities.Icon "warning-triangle"
    },

    `Unban @{PlayerBasic.Username}`,
    "Are you sure you would like to end this players ban early? They will be able to join the game normally again.",
    {
        {
            Text = "Yes",
            Icon = Utilities.Icon "warning-filled",
            Callback = function(Close, Text)
                print(Remotes.ServerComm:InvokeServer("UnbanPlayer", {
                    TargetID = PlayerID,
                    AuditLogMessage = Text[1] 
                }))

                Close()
                LoadPlayer(PlayerID, ServerJobID)
            end
        },
        {
            Text = "No",
            Icon = Utilities.Icon "x",
            Callback = function(Close)
                Close()
            end
        }
    },
    {
        {
            HeaderText = "Reason"
        }
    }
)
```
:::

## `Frontend.Drawer.HoverBegin`

Small animation on the app drawer button to show that there is something there

::: code-group
```luau [Annotation]
Frontend.Drawer.HoverBegin(): ()
```

```luau [Example]
script.Parent.MouseOver:Connect(Frontend.Drawer.HoverBegin)
```
:::

## `Frontend.Popup.Close`

Forcibly close a popup while bypassing the `Close` callback function.

::: code-group
```luau [Annotation]
Frontend.Popup.Close(): ()
```

```luau [Example]
Frontend.Popup.Close()
```
:::

## `Frontend.Popup.Open`

Same thing as above. May cause user confusion if used too frequently as data will not be updated.

::: code-group
```luau [Annotation]
Frontend.Popup.Open(): ()
```

```luau [Example]
Frontend.Popup.Open()
```
:::

## `Frontend.SwapAppBasic`

Swaps the currently active frame for a new one.

::: code-group
```luau [Annotation]
Frontend.SwapAppBasic(
    NewFrame: Frame | CanvasGroup,
    Config: {
        Name: string,
        Icon: string
    }
): ()
```

```luau [Example]
Frontend.SwapAppBasic(
    Var.MainFrame.Welcome,
    {
        Name = "Welcome to Administer!",
        Icon = Utilities.Icon "wave"
    }
)
```
:::

## `Frontend.SwapApps`

Like the previous function, but instead takes an AppConfig object.

::: code-group
```luau [Annotation]
Frontend.SwapApps(
    AppConfig: {
        Icon: string,
        AppName: string,
        Background: string,
        Description: string,
        
        MainButtonClick: () -> (),
        MainButtonFrame: Frame | CanvasGroup?,
        ButtonID: string,

        SubIcons: {
            {
                Icon: string,
                Name: string,
                Frame: Frame | CanvasGroup,
                Click: () -> (),
                
                ButtonID: string
            }
        }
    },
    ClickedSubapp: number
)
```

```luau [Example]
Clone.Activator.MouseButton1Click:Connect(function()
    task.defer(Frontend.Drawer.Close)

    Frontend.SwapApps(ButtonConfig, Index, Clone)

    xpcall(Icon.Click, Utilities.Logging.Warn)
end)
```
:::

## `Frontend.InitGesureBar`

Registers functions for the gesture bar.

::: warning
This is probably not useful for your code and you should not use it.
:::

::: code-group
```luau [Annotation]
Frontend.InitGestureBar(): ()
```

```luau [Example]
Frontend.InitGestureBar()
```

:::
