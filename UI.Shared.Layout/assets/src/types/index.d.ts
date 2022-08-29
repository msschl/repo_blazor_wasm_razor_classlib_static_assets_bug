export {};

declare namespace UI.Shared.Layout {
    export class Main
    {
        public initialize(): void;
    }
}

declare global {
    interface Window {
        SharedUI: UI.Shared.Layout.Main;
    }
}