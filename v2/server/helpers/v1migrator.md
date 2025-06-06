# V1 Migrator

V1Migrator is a utility script for detecting active Administer v1.x.x installations and migrating data to Administer 2.0.0.

## `Migrator.CheckForV1`

Checks for an Administer v1.x.x installation by looking for the `_Rank1` key.

::: code-group
```luau [Annotation]
Migrator.CheckForV1(): boolean
```

```luau [Example]
if Migrator.CheckForV1() then
    print("Administer v1 is present!")
end
```
:::

## `Migrator.Migrate`

::: warning Note
This is a DESTRUCTIVE ACTION. Running this will permanently break Administer 1.2.3 and will render existing panels unable to operate until an update is pushed to your game. Run this with caution.
:::

Begins moving ranks and apps over from Administer 1.2.3 to the new data format. The following actions are performed:

1. https://administer.notpyx.me is removed and https://aos-canary.admsoftware.org is added
   - This will not always be it's behavior.
2. Old apps are removed, but are automatically replaced with their v2 API conterparts
3. org.admsoftware.Reporter is installed

::: code-group
```luau [Annotation]
Migrator.Migrate()
```

```luau [Example]
if Migrator.CheckForV1() then
    print("Administer v1 is present!")

    Migrator.Migrate()
end
```
:::
