# Code Style Guide

This document outlines the code style guidelines for the project.

## General

- **Indentation**: Use 4 spaces for indentation.
- **Semicolons**: Always use semicolons at the end of statements.
- **Quotes**: Use single quotes for strings.
- **Naming Conventions**:
  - **Components**: Use PascalCase (e.g., `MyComponent`).
  - **Functions and Variables**: Use camelCase (e.g., `myFunction`, `myVariable`).
- **Spacing**:
  - Use a single space after commas.
  - Use spaces around operators (`=`, `+`, `-`, etc.).
  - Use a space after keywords like `if`, `for`, `while`.
  - Use a space before the opening brace of a block.

## React/JSX

- **Component Definition**: Use function components with hooks.
- **Imports**: Place all `import` statements at the top of the file.
- **Exports**: Use `export default` at the end of the file for components.
- **JSX Syntax**:
  - Use `className` instead of `class` for CSS classes.
  - Use self-closing tags for elements with no children (e.g., `<hr />`).
  - Wrap multi-line JSX expressions in parentheses.

## CSS

- This project uses **Tailwind CSS**. All styling should be done using Tailwind utility classes in the `className` attribute of JSX elements.

## Example

```javascript
import React, { useState } from 'react';

function MyComponent({ greeting }) {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <h1>{greeting}</h1>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                className="border p-2"
            />
            <p>Hello, {name || 'stranger'}!</p>
        </div>
    );
}

export default MyComponent;
```
