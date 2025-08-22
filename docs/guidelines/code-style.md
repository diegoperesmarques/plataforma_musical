# Guia de Estilo de Código

Este documento descreve as diretrizes de estilo de código a serem seguidas no projeto, garantindo consistência, legibilidade e manutenibilidade do código.

## Princípios Gerais

-   **Consistência**: O código deve ser consistente com o estilo existente na base de código.
-   **Clareza**: O código deve ser fácil de ler e entender. Prefira a clareza à concisão.

## Formatação

-   **Indentação**: Utilize 4 espaços para cada nível de indentação. Não use tabs.
-   **Ponto e Vírgula**: Sempre utilize ponto e vírgula (`;`) no final das declarações em JavaScript.
-   **Aspas**: Use aspas simples (`'`) para strings, a menos que a string contenha uma aspa simples.
-   **Espaçamento**:
    -   Use um único espaço após vírgulas.
    -   Use espaços ao redor de operadores (`=`, `+`, `-`, `*`, `/`, etc.).
    -   Use um espaço após palavras-chave como `if`, `for`, `while`, `switch`.
    -   Use um espaço antes da chave de abertura de um bloco (`{`).

## Convenções de Nomenclatura

-   **Componentes React**: Use `PascalCase` (ex: `MainMenu`, `LessonView`).
-   **Funções e Variáveis**: Use `camelCase` (ex: `myFunction`, `lessonFile`).
-   **Constantes**: Use `SCREAMING_SNAKE_CASE` para constantes globais ou de módulo (ex: `NOTE_NAMES`, `SCREENS`).

## React e JSX

-   **Definição de Componentes**: Prefira componentes funcionais com Hooks (`useState`, `useEffect`, etc.) em vez de componentes de classe.
-   **Importações**: Coloque todas as declarações `import` no topo do arquivo, agrupadas da seguinte forma:
    1.  Importações do React.
    2.  Importações de bibliotecas de terceiros.
    3.  Importações de componentes locais.
    4.  Importações de CSS ou outros ativos.
-   **Exportações**: Use `export default` no final do arquivo para o componente principal do arquivo.
-   **Sintaxe JSX**:
    -   Use `className` em vez de `class` para especificar classes CSS.
    -   Use tags de auto-fechamento para elementos sem filhos (ex: `<hr />`, `<img ... />`).
    -   Envolva expressões JSX de várias linhas em parênteses `()`.

## CSS e Estilização

-   Este projeto utiliza **Tailwind CSS**. Toda a estilização deve ser feita primariamente através de classes de utilidade no atributo `className` dos elementos JSX.
-   Evite escrever CSS personalizado em arquivos `.css` sempre que possível. Se for necessário, adicione ao `index.css` e justifique a necessidade.

## Comentários

-   Use comentários para explicar o *porquê* de um determinado código, não o *o quê*. O código deve ser auto-explicativo sobre o que faz.
-   Comente lógicas complexas, algoritmos ou soluções alternativas que não sejam óbvias.

## Exemplo de Código

```javascript
import React, { useState, useEffect } from 'react';
import MyChildComponent from './MyChildComponent';

const DEFAULT_GREETING = 'Olá';

function MyComponent({ name }) {
    const [greeting, setGreeting] = useState(DEFAULT_GREETING);

    useEffect(() => {
        // Lógica para executar quando o nome muda
        if (name) {
            console.log(`O nome foi atualizado para: ${name}`);
        }
    }, [name]);

    const handleResetGreeting = () => {
        setGreeting(DEFAULT_GREETING);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <h1 className="text-2xl font-bold">{greeting}, {name || 'Mundo'}!</h1>
            <MyChildComponent onReset={handleResetGreeting} />
        </div>
    );
}

export default MyComponent;
```

## Linting

O projeto está configurado com **ESLint** para forçar automaticamente essas regras de estilo. Antes de enviar o código, certifique-se de executar o linter para corrigir quaisquer problemas.

Para verificar e corrigir os arquivos, execute:

```bash
npm run lint
```

Novas regras ou alterações nas configurações do ESLint devem ser discutidas com a equipe antes de serem aplicadas.