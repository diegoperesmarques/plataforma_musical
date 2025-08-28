# Padrões de CSS e Estilização

Este documento detalha as melhores práticas para escrever CSS e estilizar componentes.

## TailwindCSS

- **Priorize Classes de Utilitários**: Sempre que possível, use as classes de utilitários do TailwindCSS diretamente no JSX para estilização. Isso reduz a necessidade de CSS personalizado.
- **Configuração do Tema**: Para valores repetidos (cores, espaçamento, fontes), estenda o tema padrão do Tailwind em `tailwind.config.js` em vez de usar valores mágicos.

## CSS Personalizado

- **Quando Usar**: O CSS personalizado (no arquivo `index.css` ou similar) deve ser reservado para:
    - Estilos globais de base (ex: `font-family` no `body`).
    - Estilos complexos que são difíceis de alcançar com utilitários (ex: animações personalizadas).
    - Estilização de conteúdo gerado dinamicamente (ex: HTML de um arquivo Markdown).
- **Nomenclatura**: As classes de CSS personalizadas devem usar o formato `kebab-case` (ex: `.lesson-prose`, `.feedback-correct`).
- **Organização**: Agrupe estilos relacionados por componente ou funcionalidade para facilitar a manutenção.

## Exemplo de Uso Misto

```jsx
// Uso de classes de utilitários do TailwindCSS
<button className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600">
  Próximo
</button>

// Uso de uma classe de CSS personalizada para um estado específico
<div className="feedback-incorrect">
  Resposta incorreta.
</div>
```
