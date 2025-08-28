# Padrões de Estrutura de Arquivos e Pastas

Esta seção define a estrutura padrão para organizar arquivos e pastas no projeto.

## Estrutura Geral

```
/
├── public/ # Ativos estáticos e index.html
├── src/ # Código-fonte da aplicação
│   ├── components/ # Componentes React reutilizáveis
│   ├── App.js # Componente principal da aplicação
│   ├── index.css # Estilos globais
│   └── index.js # Ponto de entrada da aplicação
├── package.json # Dependências e scripts do projeto
└── ...
```

## Nomenclatura de Arquivos

- **Componentes React**: Use `PascalCase` (ex: `MainMenu.js`, `LessonView.js`).
- **Outros Arquivos JavaScript**: Use `PascalCase` ou `camelCase` (ex: `serviceWorker.js`).
- **Arquivos de Estilo**: Use `kebab-case` (ex: `index.css`).
