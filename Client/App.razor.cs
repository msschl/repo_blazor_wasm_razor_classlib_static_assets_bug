using Microsoft.AspNetCore.Components;

using Microsoft.JSInterop;

namespace wasm.Client;

public partial class App
{
    [Inject]
    private IJSRuntime JS { get; set; } = default!;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender is false)
            return;

        // await JS.InvokeVoidAsync("SharedUI.initialize");
    }
}