# Epic 2: Exercícios Interativos

**ID:** E02

**Título:** Prática com Exercícios Interativos

**Persona Principal:** Estudante de Música

**Descrição:** Como um estudante de música, eu quero praticar meus conhecimentos com exercícios interativos que me deem feedback instantâneo, para que eu possa solidificar meu aprendizado de forma eficaz.

**Critérios de Aceitação:**
- O estudante deve poder configurar o tipo e a dificuldade do exercício.
- O sistema deve apresentar um problema musical de cada vez em uma pauta.
- O estudante deve receber feedback imediato (correto/incorreto) após submeter uma resposta.
- O sistema deve registrar o tempo gasto para resolver os exercícios.

---

## User Stories

### Story 2.1: Configurar Exercício

- **ID:** US05
- **Título:** Configurar um novo exercício
- **Descrição:** Como um estudante de música, eu quero poder configurar os parâmetros de um exercício antes de começar, para que ele se ajuste ao meu nível de habilidade e objetivos de estudo.
- **Critérios de Aceitação:**
    - Eu posso escolher o tipo de exercício: "Nome e Altura da Nota" ou "Intervalos Musicais".
    - Eu posso selecionar a clave a ser usada (Sol, Fá, Dó).
    - Para as claves de Fá e Dó, eu posso escolher a linha correta (e.g., Fá na 4ª linha, Dó na 3ª linha).
    - Eu posso habilitar/desabilitar o uso de linhas suplementares.
    - Eu posso habilitar/desabilitar o uso de acidentes (sustenidos e bemois).

### Story 2.2: Iniciar Exercício

- **ID:** US06
- **Título:** Iniciar a prática de exercícios
- **Descrição:** Como um estudante de música, após configurar as opções, eu quero iniciar o exercício para começar a praticar.
- **Critérios de Aceitação:**
    - Ao clicar em "Iniciar Exercício", a tela de configuração é substituída pela tela de exercício.
    - O primeiro problema musical é gerado e exibido na pauta de acordo com as configurações escolhidas.

### Story 2.3: Responder a um Exercício

- **ID:** US07
- **Título:** Submeter uma resposta para um exercício
- **Descrição:** Como um estudante de música, eu quero poder inserir minha resposta para o problema musical apresentado.
- **Critérios de Aceitação:**
    - Para exercícios de "Nome da Nota", deve haver campos para selecionar a nota (C, D, E...), a oitava e o acidente (se habilitado).
    - Para exercícios de "Intervalo", deve haver um campo de seleção com os nomes dos intervalos (e.g., "Terça Maior", "Quinta Justa").
    - Um botão "Verificar" deve estar disponível para submeter a resposta.

### Story 2.4: Receber Feedback

- **ID:** US08
- **Título:** Receber feedback sobre a resposta
- **Descrição:** Como um estudante de música, eu quero receber feedback imediato após submeter minha resposta para saber se acertei ou errei.
- **Critérios de Aceitação:**
    - Se a resposta estiver correta, uma mensagem de "Correto!" é exibida.
    - Se a resposta estiver incorreta, uma mensagem de "Incorreto" é exibida, juntamente com a resposta correta para aprendizado.
    - O feedback visual (cores) deve diferenciar claramente o sucesso do erro.

### Story 2.5: Avançar para o Próximo Exercício

- **ID:** US09
- **Título:** Continuar para o próximo exercício
- **Descrição:** Como um estudante de música, após ver o feedback, eu quero um botão para gerar um novo problema e continuar praticando sem interrupções.
- **Critérios de Aceitação:**
    - Após a verificação da resposta, o botão "Verificar" é substituído por um botão "Próximo".
    - Clicar em "Próximo" gera um novo exercício com base nas mesmas configurações e limpa o feedback anterior.

### Story 2.6: Monitorar o Tempo

- **ID:** US10
- **Título:** Visualizar o tempo de resposta
- **Descrição:** Como um estudante de música, eu quero ver um cronômetro para cada exercício, para que eu possa tentar melhorar minha velocidade de resposta.
- **Critérios de Aceitação:**
    - Um cronômetro deve iniciar assim que um novo exercício é exibido.
    - O cronômetro deve parar quando a resposta é submetida.
    - O tempo total acumulado nos exercícios da sessão deve ser exibido.
