# **Higher-Order Components (HOCs)**

The `hocs/` folder contains Higher-Order Components (HOCs) that are used to enhance existing components with additional logic or functionality. An HOC is a function that takes a component and returns a new component with added props or behavior. These components are typically used to apply common functionality across different components, such as authentication checks, permission handling, or UI behavior modifications.

### **When to Use HOCs**

HOCs are used when you need to add the same behavior or functionality to multiple components without repeating the code. Unlike custom hooks, which are used to encapsulate logic, HOCs wrap components and can modify or augment their props or behavior. Common use cases for HOCs include:

- **Authentication checks** (e.g., making sure the user is logged in before allowing access to a page)
- **Permission management** (e.g., restricting access to certain UI elements based on user roles)
- **UI logic modifications** (e.g., adding loading indicators or error boundaries)

### **Structure**

```
src/
├── hocs/
│   ├── withAuth.ts          # HOC for adding authentication checks
│   ├── withErrorBoundary.ts # HOC for wrapping components in an error boundary
│   ├── withPermissions.ts   # HOC for managing user permissions
│   ├── withProductDetails.ts # HOC for fetching and handling product details
```

### **Purpose**

The components in the `hocs/` folder:

- **Enhance Components** – HOCs wrap existing components and enhance them with additional logic.
- **Reusable Logic** – Common functionality is applied across different components without duplicating code.
- **Separation of Concerns** – HOCs focus purely on logic enhancement, leaving UI responsibilities to the wrapped components.

### **Example**

1. **withAuth.ts**
   This HOC could check if the user is authenticated before rendering the wrapped component. If the user is not authenticated, it could redirect them to a login page or display a fallback UI.

   ```ts
   import { Redirect } from "react-router-dom";
   import { useAuth } from "@/hooks/useAuth";

   export const withAuth = <P extends object>(
     Component: React.ComponentType<P>
   ) => {
     return (props: P) => {
       const { isAuthenticated } = useAuth();

       if (!isAuthenticated) {
         return <Redirect to="/login" />;
       }

       return <Component {...props} />;
     };
   };
   ```

2. **withErrorBoundary.ts**
   This HOC could wrap a component and catch any errors that occur within it, rendering a fallback UI in case of failure.

   ```ts
   import React, { Component, ErrorInfo } from "react";

   export const withErrorBoundary = <P extends object>(
     Component: React.ComponentType<P>
   ) => {
     return class ErrorBoundary extends Component {
       state = { hasError: false };

       static getDerivedStateFromError(error: Error) {
         return { hasError: true };
       }

       componentDidCatch(error: Error, info: ErrorInfo) {
         console.error(error, info);
       }

       render() {
         if (this.state.hasError) {
           return <div>Something went wrong!</div>;
         }

         return <Component {...(this.props as P)} />;
       }
     };
   };
   ```

3. **withPermissions.ts**
   This HOC could be used to wrap a component and check whether the user has the necessary permissions to view or interact with it. If the user doesn't have permission, the HOC can render an access-denied message or redirect to a different route.

   ```ts
   import { Redirect } from "react-router-dom";
   import { usePermissions } from "@/hooks/usePermissions";

   export const withPermissions = <P extends object>(
     Component: React.ComponentType<P>,
     requiredPermission: string
   ) => {
     return (props: P) => {
       const { permissions } = usePermissions();

       if (!permissions.includes(requiredPermission)) {
         return <Redirect to="/access-denied" />;
       }

       return <Component {...props} />;
     };
   };
   ```

4. **withProductDetails.ts**
   This HOC could be used to fetch product details via an API endpoint, but depending on the context, the product details might be shown in various ways. Different components in the application might require different UIs to display the product details, but the same underlying logic (fetching and handling the product data) can be reused.

   ```ts
   import { useState, useEffect } from "react";
   import { ProductService } from "@/api/product";

   export const withProductDetails = <P extends object>(
     Component: React.ComponentType<P>
   ) => {
     return (props: P) => {
       const [product, setProduct] = useState(null);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState(null);

       useEffect(() => {
         ProductService.fetchProductDetails()
           .then((response) => {
             setProduct(response.data);
             setLoading(false);
           })
           .catch((err) => {
             setError(err);
             setLoading(false);
           });
       }, []);

       if (loading) {
         return <div>Loading...</div>;
       }

       if (error) {
         return <div>Error loading product details</div>;
       }

       return <Component {...props} product={product} />;
     };
   };
   ```

   In this case, the `withProductDetails` HOC is responsible for fetching the product details from the backend (e.g., using `ProductService.fetchProductDetails()`). The product details can then be used in various parts of the application, but each component can choose its own way of presenting this data, allowing for consistent logic with different UI implementations.

### **Key Principles**

- **Code Reusability** – HOCs allow you to add common behavior or functionality to multiple components without rewriting the same logic.
- **Decoupling** – HOCs separate concerns by abstracting logic (such as authentication or error handling) out of components, allowing components to focus solely on rendering the UI.
- **Composition over Inheritance** – HOCs promote the composition of behavior, where components can be enhanced with different functionalities by wrapping them with multiple HOCs.

## **Conclusion**

The `hocs/` folder provides a way to enhance components with additional functionality, such as authentication, error boundaries, or permissions management, while keeping the component logic separate and reusable. By using HOCs, you can avoid code duplication and keep your components clean and focused on their main responsibilities.
