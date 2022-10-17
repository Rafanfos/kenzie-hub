import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    
    --color-grey-0: #F8F9FA;
    --color-grey-1: #868E96;
    --color-grey-2: #343B41;
    --color-grey-3: #212529;
    --color-grey-4: #121214;
    
    --toastify-color-success: #3FE864; 
    --toastify-color-error: #E83F5B;
    --toastify-icon-color-success: #3FE864;
    --toastify-icon-color-error: #E83F5B;
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Inter';
    
}



ul,ol,li{
    list-style: none;
}


button{
    cursor: pointer;
    border: none;
    background:transparent;
}

a{
    text-decoration:none;
}

body{
    height:100vh;
    background-color: var(--color-grey-4);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
