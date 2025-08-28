# Security Design Doc: Frontend Security Guidelines

## 1. Introduction

This document provides specific security guidelines for the React frontend of the "Plataforma Musical" application. Given that the application is currently client-side only, these guidelines are critical for protecting users from attacks like Cross-Site Scripting (XSS).

## 2. Cross-Site Scripting (XSS) Prevention

XSS is the highest-priority threat for this application due to the rendering of Markdown content from external files.

### 2.1. Securely Rendering Markdown

**The Problem**: The `marked` library can be configured to interpret raw HTML within Markdown. If a Markdown file contains a malicious `<script>` tag or `onerror` attribute, it can execute arbitrary JavaScript in the user's browser.

**The Solution**: All content rendered via `marked` **must** be sanitized.

1.  **Disable HTML**: The simplest approach is to disable HTML parsing in `marked` if it's not needed.

    ```javascript
    import { marked } from 'marked';

    const unsafeContent = '[Click me](javascript:alert("XSS")) or <img src=x onerror=alert("XSS")>';

    // This is NOT safe by default
    // const potentiallyDangerousHtml = marked.parse(unsafeContent);

    // BETTER: Use the `sanitize` option (though deprecated and limited)
    const saferHtml = marked.parse(unsafeContent, { sanitize: true });
    ```

2.  **Use a Dedicated Sanitizer (Recommended)**: The `sanitize` option in older versions of `marked` is deprecated and not robust. The recommended approach is to use a well-maintained, security-focused library like `DOMPurify` to clean the HTML output from `marked`.

    **Example Implementation**:

    First, add `DOMPurify` to the project:
    `npm install dompurify`

    Then, use it to sanitize the output:

    ```javascript
    import { marked } from 'marked';
    import DOMPurify from 'dompurify';

    // In your LessonView component
    const fetchAndRenderLesson = async (lessonFile) => {
      const response = await fetch(`/aulas/${lessonFile}`);
      const markdownContent = await response.text();

      // 1. Parse the markdown into HTML
      const dirtyHtml = marked.parse(markdownContent);

      // 2. Sanitize the HTML with DOMPurify
      const cleanHtml = DOMPurify.sanitize(dirtyHtml);

      // 3. Set the sanitized HTML
      setLessonContent({ __html: cleanHtml });
    };
    ```

### 2.2. Avoid `dangerouslySetInnerHTML` Where Possible

React's `dangerouslySetInnerHTML` is a necessary tool for rendering HTML from external sources, but its name is a warning. It should **only** be used with content that has been sanitized, as shown in the `DOMPurify` example above.

Never use it with user-provided input that has not been cleaned.

### 2.3. Content Security Policy (CSP)

A well-configured CSP is a critical layer of defense. It instructs the browser to only execute scripts from trusted sources, which can prevent a malicious script from running even if an XSS vulnerability is present. This should be configured at the webserver level (e.g., in Nginx, Apache, or via a `<meta>` tag in `public/index.html`).

## 3. Secure Dependency Management

*   **Run `npm audit` regularly**: This command checks for known vulnerabilities in your project's dependencies. It should be run frequently during development and as part of your CI/CD pipeline.
*   **Use Dependabot**: Configure GitHub's Dependabot to automatically create pull requests to update dependencies when security vulnerabilities are discovered.

## 4. Secure API Interaction (Future)

When a backend API is introduced, the frontend must adhere to the following principles:

*   **HTTPS Everywhere**: All API requests must be made over HTTPS.
*   **Handle Secrets Securely**: API keys or other secrets should not be hardcoded in the frontend code. Use environment variables (`REACT_APP_*`) and ensure your build process does not expose them publicly.
*   **Don't Trust the API**: While you control the API, always validate and sanitize data received from it before rendering to prevent potential XSS if the API is ever compromised.
*   **Implement Secure Authentication**: When user accounts are added, use a standard, secure method for handling authentication tokens (e.g., JWTs stored in `HttpOnly` cookies).
