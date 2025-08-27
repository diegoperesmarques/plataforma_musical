# Gerenciamento de Dependências

Este documento descreve como gerenciar as dependências do projeto.

## Ferramenta

Usamos o `npm` para gerenciar os pacotes do projeto.

## Adicionando uma Nova Dependência

1.  **Avaliação**: Antes de adicionar uma nova dependência, avalie sua necessidade. Verifique se a funcionalidade pode ser implementada de forma simples sem adicionar um novo pacote. Considere a popularidade, manutenção e tamanho do pacote.
2.  **Instalação**:
    - Para dependências de produção (necessárias para a aplicação funcionar):
      ```bash
      npm install <nome-do-pacote>
      ```
    - Para dependências de desenvolvimento (ferramentas, testes, etc.):
      ```bash
      npm install <nome-do-pacote> --save-dev
      ```

## Atualizando Dependências

- Para verificar se há pacotes desatualizados, execute:
  ```bash
  npm outdated
  ```
- Para atualizar um pacote para a versão mais recente permitida pelo `package.json`, execute:
  ```bash
  npm update <nome-do-pacote>
  ```
- Para atualizar para uma nova versão principal (major), instale a versão específica:
  ```bash
  npm install <nome-do-pacote>@latest
  ```

Após qualquer atualização, execute os testes para garantir que nada foi quebrado.

## Arquivos de Lock

O arquivo `package-lock.json` garante que todos os desenvolvedores e o ambiente de CI/CD usem exatamente as mesmas versões de dependências. Este arquivo **deve** ser commitado no repositório.
