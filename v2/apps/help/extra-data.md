# ExtraData
## What is it?

ExtraData is a parameter which normal apps are given, and [InvocationAPI.Construct](../types/invocation-api) requires.

It generally does not do anything for app developers, it only returns data useful for the Administer UI and other core applications.

::: code-group

```lua [Annotation]
ExtraData: {
    RunContext: "LocalAppsFolder" | "AOSDownload", --// This tells you where Administer pulled your app from, either locally, or via an app server,
    TechID: number | Instance --// This is the ID that was used to pull the app if it was retrieved via the cloud, or the module location if it was pulled from the LocalApps folder.
}
```

```lua [Example]
{
    RunContext = "AOSDownload",
    TechID = 2843845290
}
```

:::
