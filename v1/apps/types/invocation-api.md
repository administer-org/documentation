# Invocation API

The Invocation API is how your app gets bootstrapped and executed. 

## InvocationAPI.RichConfig

Please refer to the [RichConfig reference guide.](./richconfig)

## InvocationAPI.Construct

The Construct function is used to pass an app to the Administer API with a valid RichConfig.

MiscData is internal Administer data which is passed through so `InvocationAPI.Construct` can communicate with `RichConfig.Bootstrap`. Some of its properties (`TechID`, `RunContext`, etc) are available as the second parameter in the `Bootstrap` function.

::: code-group

```luau [Annotation]
InvocationAPI.Construct(
    RichConfig: RichConfig,
    MiscData: { ... }
)
```

```luau [Usage]
InvocationAPI.Construct(
    RichConfig,
    _
)
```

:::

Now that you understand the InvocationAPI, you are ready to construct your [AppModule!](./module)
