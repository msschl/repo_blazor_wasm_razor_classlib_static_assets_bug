// css
import "./styles/admin.scss";

namespace UI.Shared.Layout
{
    export class Main
    {
        public initialize(): void
        {
            this.initializeStickyScrollHeader();
        }

        private initializeStickyScrollHeader(): void
        {
            const header = document.getElementById("sp-header");
            const mainContainer = document.getElementsByClassName("main")[0];

            if (!header)
                return;

            const headerOffsetTop = header.offsetTop;
            window.onscroll = () => {
                header.classList.toggle("fixed-top", window.pageYOffset > headerOffsetTop);
                mainContainer?.classList.toggle("as-ft-header", window.pageYOffset > headerOffsetTop);
            };
        }
    }
}

interface Window {
    SharedUI: UI.Shared.Layout.Main;
}

window.SharedUI = new UI.Shared.Layout.Main();