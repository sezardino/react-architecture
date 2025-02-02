# **Custom Hooks**

The `hooks/` folder contains custom hooks that are used to encapsulate reusable logic across your application. Custom hooks allow you to abstract away complex or shared logic, making your components cleaner and easier to maintain.

### **When to Use Custom Hooks**

Custom hooks are useful when you need to share complex logic across multiple components. Instead of duplicating the logic in each component, you can create a custom hook and use it wherever needed.

### **Structure**

```
src/
├── hooks/
│   ├── useForceLogout.ts     # Hook for forcing logout across the app
│   ├── useMediaQuery.ts      # Hook for detecting screen size
│   ├── usePrevious.ts        # Hook for tracking previous state values
```

### **Purpose**

Custom hooks in the `hooks/` folder serve the following purposes:

- **Code Reusability** – Allowing complex logic to be reused across different components, reducing redundancy.
- **Separation of Concerns** – Keeping your components focused on rendering UI, while moving logic and side effects into hooks.
- **Consistency** – Custom hooks help enforce a consistent pattern of behavior for shared logic in your application.

### **Example**

1. **useForceLogout.ts**

   This hook demonstrates how to handle a force logout action across the app. It uses the `useQueryClient` hook from React Query to clear the client’s cache after performing the logout action. This is an example of a hook that abstracts away logic which might be needed in various parts of the application, but doesn't involve specific UI rendering.

   ```ts
   import { forceLogout } from "@/utils/force-logout";
   import { useQueryClient } from "@tanstack/react-query";
   import { useCallback } from "react";

   export const useForceLogout = () => {
     const client = useQueryClient();

     return useCallback(() => {
       forceLogout();
       client.clear();
     }, [client]);
   };
   ```

   - **How it works:**
     - This hook encapsulates the logic for performing a logout action and clearing the React Query cache.
     - `useCallback` ensures that the logout function is memoized, preventing unnecessary re-renders.
     - `useQueryClient` is used to access and clear the cached queries after logout, which might be necessary in cases where the user's session is invalidated.

### **When to Keep Hooks with Components**

While many custom hooks will reside in the `hooks/` folder, some hooks are tightly coupled with a specific component. In these cases, it may make more sense to keep them within the same directory as the component they are tied to. For example, if a hook is used only within a form component to manage form state or validation, it may be more appropriate to keep it with that component rather than in the global `hooks/` folder.

### **Conclusion**

The `hooks/` folder is designed to store custom hooks that abstract away reusable logic for your application. Custom hooks help you keep your components focused on rendering UI while encapsulating complex or shared logic elsewhere. They are essential for promoting reusability, maintainability, and cleaner code architecture.

You can also use this folder for custom hooks that interact with React Query or other state management libraries, allowing you to keep your data-fetching logic clean and consistent across your app.
