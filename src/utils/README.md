# **utils**

The `utils/` folder contains **utility functions** that are commonly used across the application. These functions are typically simple, reusable, and not tightly coupled to any specific part of the app. The purpose of this folder is to store generic functions that perform tasks such as formatting, data manipulation, and other common operations that are needed in multiple places within the app.

### **Purpose**

- **Helper Functions**: Store generic, reusable functions like string manipulation, date formatting, math operations, etc.
- **No Business Logic**: These functions should avoid encapsulating any business logic or component-specific functionality.
- **Reusability**: The focus is on creating small, isolated functions that can be used across different parts of the app, thereby reducing code duplication.

### **Example: Formatting Date**

A utility function for formatting dates:

```ts
// format.ts
export function formatDate(
  date: Date | string,
  format: string = "YYYY-MM-DD"
): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(date).toLocaleDateString("en-US", options);
}
```

### **Example: Class Name Utility**

A utility function for combining Tailwind class names with merging logic:

```ts
// helpers.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### **Example: Logger Utility**

A utility function to log messages with different levels of severity:

```ts
// logger.ts
export function logMessage(
  message: string,
  level: "info" | "warn" | "error" = "info"
): void {
  switch (level) {
    case "info":
      console.log(`INFO: ${message}`);
      break;
    case "warn":
      console.warn(`WARN: ${message}`);
      break;
    case "error":
      console.error(`ERROR: ${message}`);
      break;
  }
}
```

### **Conclusion**

The `utils/` folder is designed to hold small, isolated utility functions that can be used throughout the application. These functions should be focused on common, repetitive tasks and should not include any business logic or state management. This approach ensures that your codebase remains clean and modular, promoting reuse and reducing duplication across the application.
