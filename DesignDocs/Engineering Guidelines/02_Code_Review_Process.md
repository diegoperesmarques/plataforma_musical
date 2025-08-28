# Processo de Revisão de Código (Code Review)

O objetivo da revisão de código é manter a qualidade, compartilhar conhecimento e melhorar a base de código.

## Processo

1.  **Abrir um Pull Request (PR)**: Ao concluir o trabalho em um branch, abra um PR para o branch `develop`.
    - O PR deve ter um título claro e uma descrição que explique o *quê* e o *porquê* das mudanças.
    - Se a mudança for visual, inclua screenshots ou GIFs.
2.  **Solicitar Revisores**: Solicite a revisão de pelo menos um outro membro da equipe.
3.  **Revisão**: Os revisores devem analisar o código em busca de:
    - **Correção**: O código faz o que deveria fazer?
    - **Design**: A arquitetura e o design estão alinhados com os padrões do projeto?
    - **Legibilidade**: O código é claro e fácil de entender?
    - **Padrões de Codificação**: O código segue as diretrizes de `Coding Standards`?
    - **Testes**: Existem testes suficientes para as mudanças?
4.  **Feedback e Discussão**: Deixe comentários e sugestões no PR. A comunicação deve ser construtiva e respeitosa.
5.  **Aprovação e Merge**: Após a aprovação dos revisores e a resolução de todos os comentários, o autor do PR pode mesclar o código no `develop`.
