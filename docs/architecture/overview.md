# Visão Geral do Projeto

## Introdução

Este projeto é uma plataforma de aprendizado musical interativa, desenvolvida como uma aplicação web utilizando a biblioteca React. O objetivo principal é oferecer aos usuários uma ferramenta simples e eficaz para estudar teoria musical e aprimorar suas habilidades através de exercícios práticos.

## Funcionalidades Principais

A plataforma é dividida em duas seções principais:

1.  **Aulas Teóricas**: Uma coleção de aulas apresentadas em formato de texto, cobrindo diversos tópicos de teoria musical. As aulas são escritas em Markdown para facilitar a formatação e a inclusão de exemplos.

2.  **Exercícios Práticos**: Um módulo de exercícios interativos projetado para testar e reforçar o conhecimento do usuário. As funcionalidades incluem:
    *   **Identificação de Notas**: Exercícios para nomear notas aleatórias apresentadas na pauta.
    *   **Identificação de Intervalos**: Exercícios para identificar o intervalo entre duas notas.
    *   **Configuração Flexível**: O usuário pode personalizar os exercícios, escolhendo a clave (Sol, Fá, Dó), a linha da clave, e habilitando opções como o uso de linhas suplementares e acidentes (sustenidos e bemois).

## Arquitetura e Tecnologias

-   **Frontend**: A aplicação é construída inteiramente em **React**, utilizando componentes funcionais e hooks para gerenciar o estado e o ciclo de vida.
-   **Estilização**: O layout e o design são implementados com **Tailwind CSS**, permitindo uma estilização rápida e consistente através de classes de utilidade.
-   **Renderização de Aulas**: A biblioteca **Marked.js** é utilizada para converter o conteúdo das aulas de Markdown para HTML, que é então exibido na tela.
-   **Desenho da Pauta**: A pauta musical, incluindo notas e claves, é renderizada dinamicamente como um gráfico vetorial (SVG), permitindo clareza e escalabilidade.

## Navegação e Fluxo do Usuário

A aplicação segue um fluxo de navegação simples:

1.  O usuário inicia no **Menu Principal**, onde pode escolher entre "Aulas" e "Exercícios".
2.  Ao selecionar "Aulas", o usuário é levado para a **Lista de Aulas**, onde pode pesquisar e selecionar uma aula para ler.
3.  Ao selecionar "Exercícios", o usuário acessa o **Menu de Exercícios** para configurar as opções desejadas antes de iniciar a prática.
4.  A qualquer momento, o usuário pode retornar aos menus anteriores ou à tela inicial.

## Recursos Adicionais

-   **Modo Escuro (Dark Mode)**: A interface possui um seletor de tema para alternar entre os modos claro e escuro, melhorando a experiência de visualização em diferentes ambientes de iluminação.