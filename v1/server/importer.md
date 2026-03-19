# Importer

Import from other admin systems.

## `Importer.Systems`

A table of supported imports.

::: code-group
```luau [Annotation]
Importer.Systems: { string }
```

```luau [Example]
local Systems = Importer.Systems

if table.find(Systems, "EXE_6") == nil then
    return { false, "Importing from Exe 6 is not supported." }
end
```

:::

## `Importer.GetData`

Returns a serialized list of everything found from a given system.

::: code-group
```luau [Annotation]
Importer.GetData(
    SystemName: string
)
```

```luau [Example]
Importer.GetData("HD_ADMIN")
```

```luau [Output (success)]
{
    true,
    {
        Commands = {},
        Ranks = {},
        Admins = {
            {
                MemberType = "Group",
                RankName = "Administrator",
                ID = 128231,
                GroupRankID = 12
            }
        },
        Logs = {}
    }
}
```

```luau [Output (error)]
{
    false,
    "The requested system was either not found or is not installed."
}
```

:::

## `Importer.ListFoundSystems`

Gets a list of installed admin systems and returns how many commands, ranks, and admins they have.

::: code-group
```luau [Annotation]
Importer.ListFoundSystems()
```

```luau [Example]
print(Importer.ListFoundSystems.HD_ADMIN)
```

:::

## `Importer.Import`

Imports from a requested system.

::: warning
This function is not finished and does not work.
:::

::: code-group
```luau [Annotation]
Importer.Import(
    SystemName: string
)
```

```luau [Example]
Importer.Import(
    "HD_ADMIN"
)
```

```luau [Output (success)]
{
    true,
    "Done!"
```

```luau [Output (error)]
{
    false,
    "The requested system was either not found or is not installed."
}
```

:::
