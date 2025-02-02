# **Const**

The `const/` folder contains constants that are used throughout the application to eliminate magic values and improve code maintainability. By defining these values in one centralized place, the code becomes more readable, easier to maintain, and less prone to errors due to hardcoded values scattered throughout the application.

## **Structure**

```
src/
├── const/
│   ├── routes.ts     # Route constants
│   ├── regex.ts      # Regular expression constants
│   ├── theme.ts      # Theme-related constants (e.g., color palette)
```

### **Purpose**

The components in the `const/` folder are intended to store values that:

- **Are Reused Throughout the Application** – Constants that appear in multiple places in the application should be centralized in this folder (e.g., API endpoints, route paths, regex patterns, theme colors).
- **Prevent Magic Values** – By defining meaningful names for constants, we eliminate magic strings or numbers scattered across the codebase, making the code more understandable.
- **Enhance Maintainability** – Constants in a dedicated file make it easier to update values across the app since they are defined in one place.

### **Example**

For example, in the `const/` folder, we may have files like:

```
src/
├── const/
│   ├── regex.ts
```

- **regex.ts**: This file could store regular expressions that are used throughout the app, such as:
  ```ts
  export const EMAIL_REGEX =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  ```

### **Key Principles**

- **Centralized Management** – All constants are stored in one location, making it easier to manage and update values that are used throughout the app.
- **Prevention of Magic Values** – Constants replace magic strings, numbers, and other hardcoded values, improving code readability and reducing the risk of errors.
- **Maintainability** – With constants stored in one place, any changes to values (e.g., endpoint URLs, regex patterns) can be done quickly and consistently across the entire codebase.

## **Conclusion**

The `const/` folder helps ensure that all static values used across the application are well-organized and easily maintainable. By centralizing constants, we avoid magic values, make the codebase cleaner, and enhance the scalability of the application.
