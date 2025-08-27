# Estratégia de Testes

Testes são cruciais para garantir a estabilidade e a qualidade do nosso software.

## Ferramentas

- **React Testing Library**: Para testes de componentes React.
- **Jest**: Como o executor de testes, fornecido pelo Create React App.

## O que Testar

- **Testes Unitários**: Foque em testar a lógica de negócio em funções e componentes de forma isolada.
- **Testes de Integração**: Teste como múltiplos componentes interagem entre si. A maioria dos nossos testes de componentes com a React Testing Library se enquadrará aqui, pois renderizam uma pequena árvore de componentes.

## Como Executar os Testes

Execute o seguinte comando na raiz do projeto:

```bash
npm test
```

Isso iniciará o Jest no modo de observação, executando novamente os testes a cada alteração de arquivo.

## Diretrizes

- **Cobertura**: Embora não tenhamos uma meta estrita de cobertura de código, todas as novas funcionalidades e correções de bugs devem vir acompanhadas de testes relevantes.
- **Foco no Comportamento**: Teste o comportamento do ponto de vista do usuário, não os detalhes de implementação. A React Testing Library incentiva essa abordagem.
