# Estrutura de Diretórios

Este documento detalha a estrutura de diretórios do projeto, fornecendo uma visão geral da organização dos arquivos e seus respectivos propósitos.

## Visão Geral

```
/var/www/plataforma_musical/
├───.gitignore
├───package-lock.json
├───package.json
├───Readme.md
├───aulas/
│   └───01_Introducao_a_Musica.md
├───public/
│   └───index.html
└───src/
    ├───App.js
    ├───index.css
    ├───index.js
    └───components/
        ├───DarkModeToggle.js
        ├───Exercise.js
        ├───ExerciseMenu.js
        ├───LessonsList.js
        ├───LessonView.js
        ├───MainMenu.js
        └───Staff.js
```

## Descrição dos Diretórios e Arquivos

### Raiz do Projeto

- **`.gitignore`**: Arquivo que especifica os arquivos e diretórios que devem ser ignorados pelo Git.
- **`package.json`**: Contém os metadados do projeto, como nome, versão, dependências e scripts.
- **`package-lock.json`**: Registra a árvore de dependências exata, garantindo instalações consistentes.
- **`Readme.md`**: Documentação principal do projeto, com informações sobre instalação, configuração e uso.

### `aulas/`

Este diretório armazena os arquivos de conteúdo das aulas em formato Markdown (`.md`). Cada arquivo representa uma aula individual e é carregado dinamicamente pela aplicação.

- **`01_Introducao_a_Musica.md`**: Exemplo de arquivo de aula.

### `public/`

Contém os arquivos estáticos que são servidos diretamente ao navegador, sem processamento pelo Webpack.

- **`index.html`**: O template HTML principal da aplicação, onde o React injetará o conteúdo.

### `src/`

O coração da aplicação, contendo todo o código-fonte do React.

- **`index.js`**: O ponto de entrada da aplicação. Ele renderiza o componente principal (`App.js`) no `index.html`.
- **`index.css`**: Arquivo de estilos globais e configuração do Tailwind CSS.
- **`App.js`**: O componente raiz que gerencia a navegação entre as diferentes telas (menus, aulas, exercícios) e o estado global.

#### `src/components/`

Este diretório agrupa todos os componentes React reutilizáveis da aplicação.

- **`MainMenu.js`**: Exibe o menu principal com as opções para acessar as aulas ou os exercícios.
- **`LessonsList.js`**: Mostra a lista de aulas disponíveis, permitindo a busca e seleção.
- **`LessonView.js`**: Renderiza o conteúdo de uma aula específica a partir de um arquivo Markdown.
- **`ExerciseMenu.js`**: Apresenta as opções de configuração para os exercícios (tipo, clave, etc.).
- **`Exercise.js`**: O componente principal onde os exercícios interativos são executados e avaliados.
- **`Staff.js`**: Componente especializado em desenhar a pauta musical, incluindo claves, notas e acidentes.
- **`DarkModeToggle.js`**: Um botão que permite ao usuário alternar entre os modos claro e escuro da interface.