# Requisitos Não Funcionais

Esta seção descreve os requisitos não funcionais da Plataforma Musical. Estes requisitos definem os padrões de qualidade e as restrições sob as quais o sistema deve operar.

| ID | Categoria | Requisito | Descrição |
| :--- | :--- | :--- | :--- |
| **RNF-001** | **Desempenho** | **Tempo de Carregamento da Página** | Todas as páginas da aplicação devem carregar em menos de 3 segundos em uma conexão de internet de banda larga padrão. |
| **RNF-002** | **Desempenho** | **Responsividade da Interface** | A interface do usuário deve responder às interações do usuário (cliques, seleções) em menos de 200ms. |
| **RNF-003** | **Desempenho** | **Geração de Exercícios** | A geração de um novo exercício deve ser concluída em menos de 500ms. |
| **RNF-004** | **Usabilidade** | **Consistência da Interface** | A interface do usuário deve ser consistente em toda a aplicação, com elementos de navegação e botões padronizados. |
| **RNF-005** | **Usabilidade** | **Intuitividade** | Novos usuários devem ser capazes de entender e usar as principais funcionalidades da plataforma (aulas e exercícios) sem a necessidade de um tutorial. |
| **RNF-006** | **Usabilidade** | **Acessibilidade** | A aplicação deve seguir as diretrizes de acessibilidade da web (WCAG) para garantir que possa ser usada por pessoas com deficiências. |
| **RNF-007** | **Compatibilidade** | **Navegadores Suportados** | A aplicação deve ser totalmente funcional nas duas versões mais recentes dos navegadores Google Chrome, Mozilla Firefox e Microsoft Edge. |
| **RNF-008** | **Compatibilidade** | **Responsividade** | A aplicação deve ser responsiva e se adaptar a diferentes tamanhos de tela, incluindo desktops, tablets e smartphones. |
| **RNF-009** | **Confiabilidade** | **Disponibilidade** | O sistema deve ter uma disponibilidade de 99.9%. |
| **RNF-010** | **Segurança** | **Proteção contra Injeção de Código** | O sistema deve ser protegido contra ataques de injeção de código (e.g., XSS) ao renderizar conteúdo gerado pelo usuário ou de arquivos Markdown. |
