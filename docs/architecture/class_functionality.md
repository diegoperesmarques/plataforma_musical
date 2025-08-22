# Funcionalidade das Aulas

Este documento detalha a arquitetura e o funcionamento dos componentes responsáveis pela exibição das aulas teóricas.

## Componentes Principais

### 1. `LessonsList.js`

Este componente atua como o portal de entrada para o conteúdo educacional da plataforma.

-   **Responsabilidade Principal**: Exibir uma lista de todas as aulas disponíveis para o usuário.
-   **Fonte de Dados**: Atualmente, a lista de aulas é obtida de um array de strings (`lessonFiles`) que contém os nomes dos arquivos Markdown correspondentes a cada aula. Estes arquivos estão localizados no diretório `aulas/`.
-   **Funcionalidades**:
    -   **Listagem**: Renderiza os nomes das aulas de forma clara e legível, formatando os nomes dos arquivos para uma melhor apresentação (removendo a extensão `.md` e substituindo underscores por espaços).
    -   **Busca**: Inclui um campo de pesquisa que filtra a lista de aulas em tempo real, permitindo que o usuário encontre rapidamente o tópico de interesse.
    -   **Navegação**: Ao clicar em uma aula, o componente invoca a função de callback `onSelectLesson`, passando o nome do arquivo da aula selecionada. Essa função, gerenciada pelo `App.js`, é responsável por trocar a tela para o `LessonView`.

### 2. `LessonView.js`

Este componente é responsável por exibir o conteúdo de uma aula individual.

-   **Responsabilidade Principal**: Carregar e renderizar o conteúdo de um arquivo de aula em formato Markdown.
-   **Props**: Recebe o nome do arquivo da aula (`lessonFile`) como uma propriedade do `App.js`.
-   **Funcionalidades**:
    -   **Carregamento de Dados**: Utiliza a API `fetch` do navegador para fazer uma requisição ao arquivo Markdown correspondente, localizado no diretório `public/aulas/`. O caminho é construído dinamicamente com base na prop `lessonFile`.
    -   **Renderização de Markdown**: Após receber o conteúdo do arquivo, utiliza a biblioteca `marked` para converter o texto de Markdown para HTML.
    -   **Exibição**: O HTML gerado é inserido de forma segura no componente usando `dangerouslySetInnerHTML`, permitindo a renderização de texto formatado, listas, imagens e outros elementos HTML.
    -   **Feedback ao Usuário**: Exibe mensagens de "Carregando..." enquanto a aula está sendo buscada e uma mensagem de erro clara se o arquivo não for encontrado.
    -   **Navegação**: Fornece botões que permitem ao usuário retornar à lista de aulas (`onBackToList`) ou ao menu principal (`onBackToMainMenu`).

## Fluxo de Dados e Interação

1.  O usuário navega para a seção de aulas a partir do `MainMenu`.
2.  O `App.js` renderiza o componente `LessonsList`.
3.  O `LessonsList` exibe a lista de aulas disponíveis a partir do array `lessonFiles`.
4.  O usuário pode usar a barra de pesquisa para filtrar a lista.
5.  O usuário clica em um item da lista, acionando o callback `onSelectLesson(lessonFileName)`.
6.  No `App.js`, o estado é atualizado para indicar a aula selecionada e a tela a ser exibida (`LESSON_VIEW`).
7.  O `App.js` renderiza o componente `LessonView`, passando `lessonFileName` como a prop `lessonFile`.
8.  O `LessonView` executa um `useEffect` para buscar o conteúdo de `/aulas/{lessonFileName}`.
9.  O conteúdo Markdown é recebido, convertido para HTML pela biblioteca `marked`, e renderizado na tela.
10. O usuário lê a aula e, ao final, pode usar os botões de navegação para voltar à lista ou ao menu principal.