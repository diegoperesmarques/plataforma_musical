# Diretrizes de Controle de Versão com Git

Este documento descreve o fluxo de trabalho do Git e as convenções a serem seguidas.

## Estratégia de Branching

Usamos um modelo de branching simplificado baseado no GitFlow.

- **`main`**: Este branch contém o código de produção. Ninguém deve fazer push diretamente para o `main`.
- **`develop`**: Este é o branch principal de desenvolvimento. Ele contém o código mais recente e estável que ainda não foi lançado. Novas funcionalidades são mescladas aqui.
- **Feature Branches (`feature/...`)**: Para cada nova funcionalidade, crie um branch a partir do `develop`. O nome deve ser descritivo.
  - Exemplo: `feature/user-authentication`
- **Bugfix Branches (`bugfix/...`)**: Para correções de bugs, crie um branch a partir do `develop`.
  - Exemplo: `bugfix/fix-login-issue`

## Fluxo de Trabalho

1.  A partir do branch `develop`, crie um novo branch de `feature` ou `bugfix`.
2.  Faça seus commits nesse branch.
3.  Quando o trabalho estiver concluído, abra um Pull Request (PR) para mesclar seu branch no `develop`.
4.  Após a aprovação e o merge do PR, o branch de origem pode ser excluído.

## Mensagens de Commit

Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/).

**Formato**: `<tipo>(<escopo>): <descrição>`

- **`feat`**: Uma nova funcionalidade.
- **`fix`**: Uma correção de bug.
- **`docs`**: Mudanças na documentação.
- **`style`**: Mudanças que não afetam o significado do código (espaço em branco, formatação, etc.).
- **`refactor`**: Uma alteração de código que não corrige um bug nem adiciona uma funcionalidade.
- **`test`**: Adicionando testes ou corrigindo testes existentes.

**Exemplo**:
`feat(auth): add password reset functionality`
