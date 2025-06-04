# HTTPRunner

Various HTTPService wrappers for ease of use.

## `Http.GetRoute`

RequestAsync GET wrapper. Returns the output of OnOK or OnError.

::: code-group
```lua [Annotation]
Http.GetRoute(
    URL: string,
    Path: string,
    OnOK: (string, {any}) -> (any)?
    OnError: (number, {any}) -> (any)?
)
```

```lua [Example]
HTTP.GetRoute("https://gateway.admsoftware.org", `/`, function(Content, ...)
    print("URLs:", game:GetService("HttpService":JSONDecode(Content))

    return Content.instances
end, function(...)
    warn("Something went wrong!", ...)
end)
```

:::

## `Http.PostRoute`

RequestAsync POST wrapper. Appends `X-Administer-Version` to the request headers and any others in `MiscConfig.Headers`.

Returns the output of OnOK or OnError.

::: code-group
```lua [Annotation]
Http.PostRoute(
    URL: string,
    Path: string,
    Body: {any},
    OnOK: (string, {any}) -> (any)
    OnError: (number, {any}) -> (any),
    MiscConfig: { Headers: {}? }?,
    DoAnyways: (HttpResponse)? -> any?
)
```

```lua [Example]
return HTTP.PostRoute(URL, "/api/register-home-node", {}, function(Data, Info)
    Utils.Logging.Print("Registered!", Data)
    
    Var.DataStores.AppDB:SetAsync("AppServerList", Var.AppServers)

    return { true, "Done!" }
end, function(...)
    Utils.Logging.Warn(`Failed to register this AOS instance as your primary, is it accepting primary registrations?`, ...)

    return { false, Utils.t(nil, "generic.error.CheckLogs") }
end)
```

:::

## `Http.GUID`

Returns a `HttpService:GenerateGUID(false)` call. Exists for code clarity.

::: code-group
```lua [Annotation]
Http.GUID()
```

```lua [Example]
local UniqueID = Http.GUID()

print(UniqueID)
```

:::
