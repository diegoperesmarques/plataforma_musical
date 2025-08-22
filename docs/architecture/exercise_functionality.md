# Funcionalidade dos Exercícios

Este documento detalha a arquitetura e o funcionamento dos componentes responsáveis pelos exercícios interativos da plataforma.

## Componentes Principais

### 1. `ExerciseMenu.js`

Este componente serve como a tela de configuração, onde o usuário personaliza o tipo e a dificuldade do exercício que deseja praticar.

-   **Responsabilidade Principal**: Coletar as preferências do usuário para um exercício.
-   **Funcionalidades**:
    -   **Seleção de Tipo de Exercício**: Permite ao usuário escolher entre "Nome e Altura da Nota" (identificação de notas) e "Intervalos Musicais".
    -   **Configuração da Pauta**: Oferece opções para selecionar a clave (Sol, Fá ou Dó) e a linha específica da clave, o que é crucial para determinar a referência das notas na pauta.
    -   **Opções de Dificuldade**:
        -   `Permitir linhas suplementares`: Aumenta a extensão de notas possíveis, incluindo aquelas acima ou abaixo da pauta padrão.
        -   `Permitir sustenidos e bemois`: Inclui acidentes nos exercícios, aumentando a complexidade.
-   **Interação**: Ao clicar em "Iniciar Exercício", o componente agrupa todas as configurações selecionadas em um objeto de `settings` e o passa para a função de callback `onStartExercise`, que é gerenciada pelo `App.js`.

### 2. `Exercise.js`

Este é o componente central da funcionalidade de exercícios, onde a prática interativa acontece.

-   **Responsabilidade Principal**: Gerar, exibir e avaliar os exercícios com base nas configurações recebidas do `ExerciseMenu.js`.
-   **Props**: Recebe o objeto `settings` que define as regras para o exercício.
-   **Funcionalidades**:
    -   **Geração de Exercícios**: De forma dinâmica, gera notas ou intervalos aleatórios que se encaixam nos critérios definidos (clave, linhas suplementares, acidentes).
    -   **Lógica Musical**: Contém a lógica para mapear a posição de uma nota na pauta para seu nome e oitava corretos, considerando a clave e a linha selecionadas. Também calcula a diferença de semitons para identificar intervalos.
    -   **Interface de Resposta**: Renderiza os controles necessários para o usuário inserir sua resposta (seletores para nome da nota, oitava, acidente ou tipo de intervalo).
    -   **Validação e Feedback**: Compara a resposta do usuário com a resposta correta, fornecendo feedback visual imediato ("Correto!" ou "Incorreto."). Em caso de erro, exibe a resposta correta para fins de aprendizado.
    -   **Controle de Tempo**: Mede o tempo que o usuário leva para responder a cada exercício e mantém um tempo total acumulado.
    -   **Navegação**: Permite ao usuário avançar para o próximo exercício ou retornar ao menu de configuração.

### 3. `Staff.js`

Um componente visual especializado, focado exclusivamente na renderização da pauta musical.

-   **Responsabilidade Principal**: Desenhar a pauta, claves, notas, acidentes e linhas suplementares.
-   **Props**: Recebe as `settings` (para saber qual clave desenhar) и um array de `notes` a serem exibidas.
-   **Tecnologia**: Gera um gráfico vetorial (SVG) dinamicamente. O uso de SVG garante que a pauta e as notas sejam nítidas e bem definidas em qualquer resolução de tela.
-   **Funcionalidades de Desenho**:
    -   Desenha as 5 linhas da pauta.
    -   Renderiza a imagem da clave correta (Sol, Fá ou Dó) na posição apropriada.
    -   Posiciona as notas na altura (eixo Y) correta com base em sua propriedade `position`.
    -   Desenha linhas suplementares para notas que caem fora da pauta.
    -   Adiciona os símbolos de sustenido (`#`) ou bemol (`b`) à esquerda da nota, se aplicável.
    -   Desenha as hastes das notas na direção correta (para cima ou para baixo).

## Fluxo de Dados e Interação

1.  O usuário seleciona "Exercícios" no `MainMenu`.
2.  O `App.js` renderiza o `ExerciseMenu`.
3.  O usuário ajusta as configurações (tipo, clave, opções) e clica em "Iniciar Exercício".
4.  O `ExerciseMenu` chama `onStartExercise(settings)`.
5.  No `App.js`, o estado é atualizado com as `settings` e a tela é trocada para `EXERCISE`.
6.  O `App.js` renderiza o componente `Exercise`, passando as `settings` como props.
7.  O `Exercise` gera o primeiro desafio e o renderiza, utilizando o componente `Staff` para desenhar a pauta e as notas.
8.  O usuário analisa a pauta e insere sua resposta usando os controles na tela.
9.  O usuário clica em "Verificar".
10. O `Exercise` avalia a resposta, exibe o feedback e aguarda o usuário clicar em "Próximo" para gerar um novo desafio.