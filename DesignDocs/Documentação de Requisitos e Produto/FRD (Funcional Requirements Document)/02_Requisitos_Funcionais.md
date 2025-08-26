# Requisitos Funcionais

Esta seção detalha os requisitos funcionais da Plataforma Musical. Cada requisito é identificado por um ID único e descrito em termos de comportamento observável pelo usuário.

## 3.1. Interface Principal

| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **RF-001** | Exibição do Menu Principal | O sistema deve exibir um menu principal com as opções "Aulas" e "Exercícios". |
| **RF-002** | Navegação para Aulas | Ao clicar na opção "Aulas", o sistema deve navegar para a tela de lista de aulas. |
| **RF-003** | Navegação para Exercícios | Ao clicar na opção "Exercícios", o sistema deve navegar para a tela de menu de exercícios. |
| **RF-004** | Modo Escuro | O sistema deve fornecer um botão de alternância para o modo escuro. |
| **RF-005** | Persistência do Modo Escuro | A preferência do modo escuro deve ser aplicada a todas as telas da aplicação. |

## 3.2. Aulas

| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **RF-006** | Listagem de Aulas | O sistema deve exibir uma lista de todas as aulas disponíveis. |
| **RF-007** | Pesquisa de Aulas | O sistema deve fornecer um campo de pesquisa para filtrar a lista de aulas por palavra-chave. |
| **RF-008** | Visualização de Aulas | Ao selecionar uma aula da lista, o sistema deve exibir o conteúdo da aula. |
| **RF-009** | Renderização de Conteúdo | O conteúdo da aula, escrito em Markdown, deve ser renderizado como HTML formatado. |
| **RF-010** | Navegação de Volta | Na tela de visualização da aula, o sistema deve fornecer botões para voltar à lista de aulas e ao menu principal. |

## 3.3. Exercícios

### 3.3.1. Menu de Configuração de Exercícios

| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **RF-011** | Seleção de Tipo de Exercício | O usuário deve poder escolher entre dois tipos de exercício: "Nome e Altura da Nota" e "Intervalos Musicais". |
| **RF-012** | Seleção de Clave | O usuário deve poder selecionar a clave para o exercício (Sol, Fá ou Dó). |
| **RF-013** | Seleção de Linha da Clave | O usuário deve poder selecionar a linha da clave, com as opções mudando dinamicamente com base na clave selecionada. |
| **RF-014** | Opção de Linhas Suplementares | O usuário deve poder habilitar ou desabilitar o uso de linhas suplementares nos exercícios. |
| **RF-015** | Opção de Acidentes | O usuário deve poder habilitar ou desabilitar o uso de acidentes (sustenidos e bemois) nos exercícios. |
| **RF-016** | Iniciar Exercício | O sistema deve fornecer um botão para iniciar o exercício com as configurações selecionadas. |

### 3.3.2. Tela de Exercício

| ID | Requisito | Descrição |
| :--- | :--- | :--- |
| **RF-017** | Exibição da Pauta | O sistema deve exibir uma pauta musical como uma imagem SVG. |
| **RF-018** | Geração de Notas | O sistema deve gerar e exibir aleatoriamente uma ou duas notas na pauta, de acordo com o tipo de exercício e as configurações. |
| **RF-019** | Interface de Resposta (Notas) | Para exercícios de identificação de nota, o sistema deve fornecer campos para o usuário selecionar o nome da nota, a oitava e o acidente. |
| **RF-020** | Interface de Resposta (Intervalos) | Para exercícios de identificação de intervalo, o sistema deve fornecer um menu suspenso para o usuário selecionar o intervalo. |
| **RF-021** | Verificação de Resposta | O sistema deve fornecer um botão "Verificar" para avaliar a resposta do usuário. |
| **RF-022** | Feedback de Resposta Correta | Se a resposta estiver correta, o sistema deve exibir uma mensagem de feedback positivo (e.g., "Correto!"). |
| **RF-023** | Feedback de Resposta Incorreta | Se a resposta estiver incorreta, o sistema deve exibir uma mensagem de feedback negativo e a resposta correta (e.g., "Incorreto. A resposta é..."). |
| **RF-024** | Cronômetro | O sistema deve exibir um cronômetro que mede o tempo que o usuário leva para responder a cada exercício. |
| **RF-025** | Tempo Total | O sistema deve exibir o tempo total acumulado gasto nos exercícios da sessão atual. |
| **RF-026** | Próximo Exercício | Após responder, o sistema deve fornecer um botão "Próximo" para gerar um novo exercício. |
| **RF-027** | Navegação de Volta | O sistema deve fornecer um botão para voltar ao menu de exercícios. |
