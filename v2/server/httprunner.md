# HTTPRunner

Various HTTPService wrappers for ease of use.

## `Http.GetRoute`

RequestAsync GET wrapper. Returns the output of OnOK or OnError.

**Timeout**: Stops the request after x seconds have passed
**DontLookForAlts**: If `false` or `nil` and `URL` is an official AOS instance (aos-xxx-xx.admsoftware.org), then HttpRunner will attempt to find a new server if the request fails for any non-400 reason to avoid system outages.
**Headers**: Request headers
**Debug**: Enables debug printing

::: code-group
```luau [Annotation]
Http.GetRoute(
    URL: string,
    Path: string,
    OnOK: (string, {any}) -> (any)?
    OnError: (number, {any}) -> (any)?,
    Options: {
        Timeout: number?,
        DontLookForAlts: boolean?,
        Headers: { any }?,
        Debug: boolean?
    }?
)
```

```luau [Example]
HTTP.GetRoute("https://gateway.admsoftware.org", `/`, function(Content, ...)
    print("URLs:", game:GetService("HttpService":JSONDecode(Content))

    return Content.instances
end, function(...)
    warn("Something went wrong!", ...)
end)
```

:::

## `Http.PostRoute`

RequestAsync POST wrapper. Appends `X-Adm-Version`  and `X-Adm-Branch` to the request headers and any others in `MiscConfig.Headers`.

Returns the output of OnOK or OnError.

::: code-group
```luau [Annotation]
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

```luau [Example]
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
```luau [Annotation]
Http.GUID()
```

```luau [Example]
local UniqueID = Http.GUID()

print(UniqueID)
```

:::
