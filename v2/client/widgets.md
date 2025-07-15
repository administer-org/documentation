# Widgets
Functions for controlling Administers homepage widget system. For more information on how to make a widget, please see the [Widgets help guide.](/v2/help/widgets)

## `Widgets.GetAvailableWidgets`

Gets a list of widgets available to the client for use.

::: code-group
```luau [Annotation]
Widgets.GetAvailableWidgets(): {
    Small: { { any } },
    Large: { { any } }
}
```

```luau [Example]
print(`We have the following widgets available: {Widgets.GetAvailableWidgets()}`)
```

:::

## `Widgets.Edit`

Internal function for opening the Edit Widget UI.

::: code-group
```luau [Annotation]
Widgets.Edit(
    ContainingUI: Frame
): ()
```

```luau [Example]
script.Parent.EditWidget.MouseButton1Click:Connect(function()
    Widgets.Edit(script.Parent)
end)
```

:::

## `Widgets.Initialize`

Loads (or reloads) saved widgets to the homepage. Data is pulled from the _HomeWidgets panel attribute which is assigned at runtime and not updated.

::: code-group
```luau [Annotation]
Widgets.Initialize(): ()
```

```luau [Example]
Widgets.Initialize()
```

:::
