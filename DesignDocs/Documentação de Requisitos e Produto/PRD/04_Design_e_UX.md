# Design e Experiência do Usuário (UX)

## 1. Filosofia de Design

O design da Plataforma Musical deve ser **limpo, intuitivo e encorajador**. A interface deve minimizar distrações e focar no conteúdo de aprendizado. A paleta de cores, a tipografia e os elementos interativos devem trabalhar juntos para criar um ambiente acolhedor que motive o usuário a aprender.

## 2. Fluxo do Usuário

O fluxo principal do usuário é projetado para ser simples e direto:

1.  **Tela Inicial:** O usuário chega a uma página inicial que apresenta a plataforma. A partir daqui, ele pode navegar para as seções principais através do `MainMenu`.
2.  **Aprendendo uma Lição:**
    *   O usuário seleciona "Lições" no menu.
    *   Ele é apresentado à `LessonsList`.
    *   Ele clica em uma lição e é levado para a `LessonView`, onde pode ler o conteúdo e ver os exemplos na `Staff`.
3.  **Praticando um Exercício:**
    *   O usuário seleciona "Exercícios" no menu.
    *   Ele é apresentado ao `ExerciseMenu` para escolher um tipo de exercício.
    *   Ele é levado para a tela `Exercise`, onde interage com a `Staff` para responder ao desafio.
    *   O sistema fornece feedback imediato.
4.  **Configurações Gerais:**
    *   A qualquer momento, o usuário pode usar o `DarkModeToggle` para alterar o tema da interface.

## 3. Wireframes (Conceitual)

Como não é possível gerar imagens, esta seção descreve os wireframes textualmente.

*   **Tela de Lições (`LessonsList`):**
    *   Layout de cartões (cards).
    *   Cada cartão representa uma lição e contém: Título da Lição, uma breve descrição e um indicador de status (Ex: "Não iniciado", "Em andamento", "Concluído").

*   **Tela de Visualização de Lição (`LessonView`):**
    *   No topo, o título da lição.
    *   Abaixo, blocos de texto explicando os conceitos.
    *   Intercalado com o texto, componentes `Staff` para ilustrar os exemplos musicais.
    *   No final, um botão "Marcar como Concluída".

*   **Tela de Exercício (`Exercise`):**
    *   Uma área de destaque no topo com a pergunta (Ex: "Qual é esta nota?").
    *   No centro, um grande componente `Staff` mostrando o desafio visual.
    *   Abaixo, botões de múltipla escolha ou uma interface para o usuário inserir a resposta.
    *   Uma área para feedback (Ex: "Correto!" em verde ou "Tente novamente" em vermelho).

## 4. Acessibilidade

O design deve seguir as diretrizes de acessibilidade (WCAG) para garantir que a plataforma possa ser usada por pessoas com deficiências. Isso inclui:

*   **Contraste de Cores:** Garantir que o texto tenha contraste suficiente com o fundo, tanto no modo claro quanto no escuro.
*   **Navegação por Teclado:** Permitir que todos os elementos interativos sejam acessíveis via teclado.
*   **Leitores de Tela:** Usar tags HTML semânticas para que a estrutura da página seja compreensível por leitores de tela.