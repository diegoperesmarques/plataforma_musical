# Security Design Doc: Future Backend Security Requirements

## 1. Introduction

This document outlines the foundational security requirements for the future backend API of the "Plataforma Musical" application. Adhering to these requirements from the start will ensure that the backend is robust, secure, and protects user data.

## 2. Authentication

*   **Requirement**: A strong, standard-based authentication system must be implemented for user accounts.
*   **Recommendations**:
    *   **OAuth 2.1 / OpenID Connect (OIDC)**: For federated identity (e.g., "Log in with Google"), use a certified OIDC library. This is the preferred approach as it delegates password management to a trusted provider.
    *   **Password-Based Login**: If implementing a local username/password system:
        *   **Password Hashing**: Passwords must **never** be stored in plaintext. Use a strong, adaptive, and salted hashing algorithm like **Argon2** (preferred) or **bcrypt**. MD5 and SHA-* are not acceptable.
        *   **Secure Password Reset**: Implement a secure password reset mechanism using time-limited, single-use tokens sent to the user's registered email address.
    *   **Token-Based Sessions**: Use JSON Web Tokens (JWTs) for managing user sessions. Tokens should be short-lived and transmitted securely.
        *   **JWT Security**: Store JWTs in secure, `HttpOnly` cookies to prevent them from being accessed by client-side JavaScript, mitigating the impact of XSS attacks.

## 3. Authorization

*   **Requirement**: The backend must enforce strict authorization checks on every request that accesses or modifies data.
*   **Recommendations**:
    *   **Enforce at the API Level**: Do not rely on the frontend to control what a user can see or do. Every API endpoint must verify that the authenticated user has the necessary permissions for the requested action.
    *   **Prevent IDOR**: When a user requests a resource (e.g., `/api/lessons/123`), the backend must check not only that the user is authenticated, but also that they have the right to access lesson `123`. Never assume that because a user is logged in, they can access any object in the system.
    *   **Role-Based Access Control (RBAC)**: Implement a role-based system (e.g., `student`, `teacher`, `admin`) to manage permissions centrally.

## 4. Input Validation and Sanitization

*   **Requirement**: All data received from a client (API requests, file uploads, etc.) must be treated as untrusted and be rigorously validated.
*   **Recommendations**:
    *   **Use a Validation Library**: Employ a well-known validation library (e.g., `Joi`, `express-validator`) to define and enforce schemas for all incoming data.
    *   **Validate Everything**: Check for type, format, length, and range. For example, if an API endpoint expects a numeric ID, the validation should reject any non-numeric input.
    *   **Prevent Mass Assignment**: Ensure that API endpoints only allow clients to update fields that they are supposed to. For example, a user should not be able to update their own `role` from `student` to `admin` by simply adding a `"role": "admin"` field to a profile update request.

## 5. API Security Best Practices

*   **HTTPS Exclusively**: The entire API must be served over HTTPS (TLS).
*   **Rate Limiting**: Implement rate limiting on all API endpoints, especially sensitive ones like login and registration, to protect against brute-force attacks and denial of service.
*   **Secure Headers**: The API should return security-related HTTP headers such as `Content-Security-Policy`, `Strict-Transport-Security`, and `X-Content-Type-Options: nosniff`.
*   **CORS Configuration**: Configure Cross-Origin Resource Sharing (CORS) to only allow requests from trusted domains (i.e., the domain of the frontend application). Avoid using a wildcard (`*`).

## 6. Secure Data Storage

*   **Requirement**: Any sensitive user data must be stored securely.
*   **Recommendations**:
    *   **Encryption at Rest**: All data stored in the database, especially Personally Identifiable Information (PII), should be encrypted at rest.
    *   **Principle of Least Data**: Do not collect or store any sensitive data that is not absolutely necessary for the application's functionality.
