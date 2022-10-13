import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

:root{
    --primary: #FF577F;
    --primary-focus: #FF427F;
    --primary-negative: #59323F;
    
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    
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
    background-color: var(--grey-4);
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
