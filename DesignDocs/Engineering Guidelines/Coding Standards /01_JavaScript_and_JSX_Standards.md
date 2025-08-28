# Padrões de JavaScript e JSX

Este documento estabelece as convenções de codificação para JavaScript e JSX no projeto.

## Componentes React

- **Componentes Funcionais**: Todos os novos componentes devem ser escritos como componentes funcionais usando Hooks do React.
- **Nomenclatura**: Os nomes dos componentes devem ser em `PascalCase` (ex: `LessonView`).
- **Props**:
    - Use desestruturação para acessar as props.
    - Forneça `defaultProps` para props que não são obrigatórias.
- **Exportação**: Exporte componentes usando `export default`.

```jsx
import React from 'react';

function MyComponent({ title, onAction }) {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onAction}>Clique Aqui</button>
    </div>
  );
}

export default MyComponent;
```

## JavaScript Geral

- **Declarações de Variáveis**: Use `const` por padrão. Use `let` apenas se a variável precisar ser reatribuída. Evite `var`.
- **Tipos de Funções**: Prefira funções de seta (`=>`) para callbacks e funções anônimas.
- **Módulos**: Use `import` e `export` do ES6. As importações devem estar no topo do arquivo.
- **Ponto e Vírgula**: Use ponto e vírgula no final das declarações.
- **Indentação**: Use 4 espaços para indentação.

## JSX

- **Quotes**: Use aspas duplas (`"`) para atributos JSX.
- **Booleanos**: Omita o valor de uma prop quando for `true`.
  ```jsx
  // Ruim
  <MyComponent enabled={true} />

  // Bom
  <MyComponent enabled />
  ```
- **Parênteses em Múltiplas Linhas**: Envolva o JSX de múltiplas linhas em parênteses.
  ```jsx
  return (
    <div>
      <p>Olá, Mundo!</p>
    </div>
  );
  ```
- **Nomenclatura de Manipuladores de Eventos**: Use o prefixo `on` seguido pelo nome do evento (ex: `onClick`, `onSubmit`). As funções de manipulação devem ter o prefixo `handle` (ex: `handleClick`).
