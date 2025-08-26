# Requisitos e Funcionalidades

Esta seção detalha as funcionalidades da Plataforma Musical, com base nos componentes de UI existentes e nos objetivos do produto.

## 1. Funcionalidades Essenciais (Core)

Estas são as funcionalidades centrais que compõem a experiência principal do produto.

### 1.1. Sistema de Lições
*   **Descrição:** O sistema de lições é a base do aprendizado teórico. Os usuários podem navegar por uma lista de lições e estudar o conteúdo.
*   **Requisitos:**
    *   Deve haver uma lista de lições disponíveis para o usuário (`LessonsList.js`).
    *   O usuário deve poder selecionar e visualizar o conteúdo de uma lição específica (`LessonView.js`).
    *   O conteúdo da lição deve suportar texto e a exibição de pautas musicais (`Staff.js`).
*   **Componentes Associados:** `LessonsList.js`, `LessonView.js`, `Staff.js`

### 1.2. Sistema de Exercícios Interativos
*   **Descrição:** Para praticar os conceitos aprendidos, os usuários podem completar exercícios interativos com feedback em tempo real.
*   **Requisitos:**
    *   Deve haver um menu onde os usuários podem selecionar um tipo de exercício (`ExerciseMenu.js`).
    *   A tela de exercício deve apresentar um desafio ao usuário, como identificar uma nota na pauta (`Exercise.js`).
    *   A pauta musical deve ser o componente central da interação do exercício (`Staff.js`).
    *   O sistema deve fornecer feedback imediato (visual e/ou sonoro) se a resposta do usuário está correta ou incorreta.
*   **Componentes Associados:** `ExerciseMenu.js`, `Exercise.js`, `Staff.js`

## 2. Funcionalidades de Navegação e UI

Estas funcionalidades garantem que o usuário possa navegar e interagir com a plataforma de forma clara e agradável.

### 2.1. Menu Principal
*   **Descrição:** Um menu de navegação central para acessar as principais seções da aplicação.
*   **Requisitos:**
    *   O menu deve conter links para, no mínimo, "Lições" e "Exercícios".
    *   Deve ser facilmente acessível de qualquer parte da aplicação.
*   **Componentes Associados:** `MainMenu.js`

### 2.2. Modo Escuro (Dark Mode)
*   **Descrição:** Permite que o usuário alterne a aparência da interface para um tema com cores escuras, reduzindo o cansaço visual.
*   **Requisitos:**
    *   Deve haver um controle (toggle) visível na interface para ativar/desativar o modo escuro.
    *   A mudança de tema deve ser aplicada a todos os componentes da aplicação de forma consistente.
*   **Componentes Associados:** `DarkModeToggle.js`

## 3. Funcionalidades Futuras (Pós-Lançamento)

*   **Contas de Usuário e Persistência de Progresso:**
    *   Permitir que usuários se cadastrem e façam login.
    *   Salvar o progresso das lições e o desempenho nos exercícios.
*   **Gamificação:**
    *   Adicionar sistemas de pontos, medalhas e rankings para aumentar o engajamento.
*   **Suporte a Múltiplos Instrumentos:**
    *   Expandir o conteúdo para incluir teoria específica para diferentes instrumentos (piano, violão, etc.).