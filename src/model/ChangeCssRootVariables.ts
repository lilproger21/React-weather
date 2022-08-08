import { Theme } from "../context/ThemeContext";

export function changeCssRootVariables(theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;

    const components = ['card-shadow', 'card-background', 'components-background', 'text-color', 'body-background'];

    components.forEach(item => root.style.setProperty(`--${item}-default`, `var(--${item}-${theme})`));
};
