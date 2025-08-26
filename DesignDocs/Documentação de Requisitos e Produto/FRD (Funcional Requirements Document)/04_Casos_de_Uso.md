# Casos de Uso

Esta seção apresenta cenários de uso detalhados (casos de uso) para as principais funcionalidades da Plataforma Musical.

## 5.1. Visualizar uma Aula

*   **ID do Caso de Uso:** UC-001
*   **Ator:** Estudante
*   **Descrição:** O estudante visualiza uma aula de teoria musical.
*   **Pré-condições:** O estudante está na página principal da aplicação.
*   **Fluxo Principal:**
    1.  O estudante clica no botão "Aulas".
    2.  O sistema exibe a lista de aulas disponíveis.
    3.  O estudante clica em uma aula da lista.
    4.  O sistema exibe o título e o conteúdo da aula selecionada.
*   **Pós-condições:** O conteúdo da aula é exibido para o estudante.
*   **Fluxos Alternativos:**
    *   **5.1.1. Pesquisar Aula:** Antes de selecionar uma aula, o estudante pode usar a barra de pesquisa para filtrar a lista de aulas.

## 5.2. Realizar um Exercício de Identificação de Nota

*   **ID do Caso de Uso:** UC-002
*   **Ator:** Estudante
*   **Descrição:** O estudante realiza um exercício para identificar uma nota na pauta.
*   **Pré-condições:** O estudante está na página principal da aplicação.
*   **Fluxo Principal:**
    1.  O estudante clica no botão "Exercícios".
    2.  O sistema exibe o menu de configuração de exercícios.
    3.  O estudante seleciona o tipo de exercício "Nome e Altura da Nota".
    4.  O estudante seleciona a clave, a linha da clave e as opções desejadas (linhas suplementares, acidentes).
    5.  O estudante clica no botão "Iniciar Exercício".
    6.  O sistema exibe a tela de exercício com uma nota na pauta.
    7.  O estudante seleciona o nome da nota, a oitava e o acidente que correspondem à nota exibida.
    8.  O estudante clica no botão "Verificar".
    9.  O sistema exibe o feedback (correto ou incorreto).
    10. O estudante clica no botão "Próximo" para um novo exercício.
*   **Pós-condições:** O estudante praticou a identificação de notas e recebeu feedback sobre seu desempenho.
*   **Fluxos Alternativos:**
    *   **5.2.1. Voltar ao Menu:** A qualquer momento, o estudante pode clicar no botão "Voltar ao Menu" para retornar à tela de configuração de exercícios.

## 5.3. Realizar um Exercício de Identificação de Intervalo

*   **ID do Caso de Uso:** UC-003
*   **Ator:** Estudante
*   **Descrição:** O estudante realiza um exercício para identificar um intervalo musical.
*   **Pré-condições:** O estudante está na página principal da aplicação.
*   **Fluxo Principal:**
    1.  O estudante clica no botão "Exercícios".
    2.  O sistema exibe o menu de configuração de exercícios.
    3.  O estudante seleciona o tipo de exercício "Intervalos Musicais".
    4.  O estudante seleciona a clave, a linha da clave e as opções desejadas.
    5.  O estudante clica no botão "Iniciar Exercício".
    6.  O sistema exibe a tela de exercício com duas notas na pauta.
    7.  O estudante seleciona o intervalo que corresponde à distância entre as duas notas.
    8.  O estudante clica no botão "Verificar".
    9.  O sistema exibe o feedback.
    10. O estudante clica no botão "Próximo".
*   **Pós-condições:** O estudante praticou a identificação de intervalos e recebeu feedback.
