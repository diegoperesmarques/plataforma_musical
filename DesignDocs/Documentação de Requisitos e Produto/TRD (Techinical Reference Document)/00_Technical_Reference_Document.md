
# Documento de Referência Técnica (TRD)

## 1. Introdução

Este documento fornece uma referência técnica detalhada para a aplicação "Plataforma Musical". O objetivo é descrever a arquitetura do sistema, as tecnologias utilizadas, a estrutura do código e as convenções de desenvolvimento para guiar futuras manutenções e a evolução do projeto.

A aplicação é uma plataforma de e-learning focada em teoria musical e treinamento prático, construída como uma Single Page Application (SPA) em React.

## 2. Arquitetura e Tecnologias

### 2.1. Visão Geral da Arquitetura

A aplicação segue uma arquitetura baseada em componentes, onde a interface do usuário é dividida em componentes React independentes e reutilizáveis. O estado principal da aplicação, como a tela atual e as configurações dos exercícios, é gerenciado no componente raiz (`App.js`) e distribuído para os componentes filhos via props.

### 2.2. Tecnologias Principais (Tech Stack)

- **Frontend:**
  - **React (v18.2.0):** Biblioteca principal para a construção da interface do usuário.
  - **React Scripts (v5.0.1):** Conjunto de scripts e configurações para criar, testar e construir a aplicação React (`create-react-app`).
- **Estilização:**
  - **Tailwind CSS (v3.4.1):** Framework CSS utility-first para a criação de interfaces de forma rápida e consistente. Os estilos globais e a configuração base do Tailwind estão em `src/index.css`.
- **Processamento de Conteúdo:**
  - **Marked (v0.3.19):** Biblioteca para converter os arquivos de aula, escritos em Markdown, para HTML, permitindo que sejam renderizados dinamicamente no componente `LessonView`.

### 2.3. Dependências

As dependências do projeto estão listadas no arquivo `package.json`.

- **Dependências de Produção:**
  - `react`, `react-dom`, `react-scripts`: O núcleo do React.
  - `marked`: Para o parsing de Markdown.
- **Dependências de Desenvolvimento:**
  - `tailwindcss`: Para compilar as classes do Tailwind CSS.

## 3. Estrutura do Projeto

A estrutura de diretórios foi projetada para separar claramente as responsabilidades e facilitar a localização de arquivos. Para uma descrição detalhada, consulte o documento `docs/architecture/directory_structure.md`.

- **/public:** Contém o `index.html` (ponto de entrada da SPA) e o diretório `aulas/`, que armazena os arquivos `.md` das lições.
- **/src:** Contém todo o código-fonte da aplicação React.
  - **`index.js`**: Ponto de entrada da aplicação React, onde o componente `App` é renderizado.
  - **`App.js`**: Componente raiz que controla a navegação e o estado global.
  - **`/components`**: Diretório onde todos os componentes React reutilizáveis são armazenados.

## 4. Componentes Principais

A aplicação é composta pelos seguintes componentes principais:

- **`App.js`**: Orquestrador principal. Gerencia qual tela (`MainMenu`, `LessonView`, `Exercise`, etc.) está ativa usando um estado `currentScreen`. Ele também gerencia o estado compartilhado, como as configurações do exercício e a aula selecionada.

- **`MainMenu.js`**: A tela inicial da aplicação, fornecendo botões de navegação para as seções de Aulas e Exercícios.

- **`LessonsList.js`**: Exibe uma lista de aulas disponíveis a partir de uma lista pré-definida (`lessonFiles`). Inclui uma funcionalidade de busca para filtrar as aulas.

- **`LessonView.js`**: Responsável por buscar e renderizar o conteúdo de uma aula. Ele usa a função `fetch` para carregar o arquivo Markdown do diretório `public/aulas` e a biblioteca `marked` para convertê-lo em HTML.

- **`ExerciseMenu.js`**: Um formulário que permite ao usuário configurar um exercício prático, escolhendo o tipo (identificação de nota ou intervalo), a clave, e outras opções como o uso de linhas suplementares e acidentes.

- **`Exercise.js`**: O núcleo da funcionalidade de exercícios. Ele gera dinamicamente os exercícios com base nas configurações recebidas, renderiza a pauta musical através do componente `Staff`, gerencia a resposta do usuário e fornece feedback.

- **`Staff.js`**: Um componente crucial e complexo responsável por renderizar a pauta musical, claves, notas, acidentes e linhas suplementares em SVG. O desenho é feito dinamicamente com base nas propriedades (`settings` e `notes`) recebidas. As imagens das claves são carregadas de uma URL externa.

- **`DarkModeToggle.js`**: Um botão que alterna o tema da aplicação entre claro e escuro, adicionando ou removendo a classe `dark` do elemento `<html>`.

## 5. Fluxo de Dados e Lógica

### 5.1. Gerenciamento de Estado

O estado é gerenciado de forma simples, utilizando os hooks `useState` e `useEffect` do React. O estado global da aplicação (tela atual, tema, etc.) reside em `App.js` e é passado para os componentes filhos através de props. Funções de callback são usadas para atualizar o estado do componente pai a partir de ações nos componentes filhos (e.g., `onStartExercise`).

### 5.2. Lógica dos Exercícios

- **Geração de Notas:** A função `generateRandomNote` em `Exercise.js` cria uma nota aleatória dentro de uma faixa de posições na pauta. A posição é então convertida para um nome de nota e oitava através da função `getNoteFromPosition`, que usa a clave como referência.
- **Cálculo de Intervalos:** Para exercícios de intervalo, duas notas são geradas. Seus valores MIDI são calculados pela função `getMidiValue`, e a diferença entre eles determina o nome do intervalo.
- **Renderização da Pauta:** O componente `Staff.js` recebe um array de objetos de nota e as configurações da pauta. Ele calcula as coordenadas `x` e `y` para cada elemento (linhas, clave, notas, acidentes) e gera uma string SVG que é inserida no DOM.

## 6. Configuração e Execução

### 6.1. Instalação

Para instalar as dependências do projeto, execute o seguinte comando na raiz do projeto:
```bash
npm install
```

### 6.2. Execução em Desenvolvimento

Para iniciar o servidor de desenvolvimento local, execute:
```bash
npm start
```
A aplicação estará disponível em `http://localhost:3000`.

### 6.3. Build para Produção

Para criar uma versão otimizada da aplicação para produção, execute:
```bash
npm run build
```
Os arquivos estáticos serão gerados no diretório `/build`.

## 7. Convenções de Código

- **Estilo de Código:** O projeto segue as convenções do `eslint-config-react-app`.
- **Componentes:** Todos os componentes são funcionais e utilizam hooks.
- **Estilização:** A estilização é feita primariamente com as classes de utilitário do Tailwind CSS. Estilos customizados ou mais complexos estão definidos em `src/index.css`.
- **Nomenclatura:**
  - Componentes: `PascalCase` (e.g., `LessonView`).
  - Arquivos: `PascalCase` para componentes, `camelCase` para outros arquivos JS.
