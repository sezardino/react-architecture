# **Layouts**

The `layouts/` folder contains wrapper components that define the overall structure of pages in the application. These components are used to wrap pages, providing consistent layout structures such as navigation, sidebars, footers, or any other shared UI elements. Layout components are often used to group common functionality and style for pages within specific sections of the application (e.g., authentication, admin panel, landing pages).

### **Purpose**

Layouts provide a way to define consistent page structures across different parts of the application. Rather than repeating layout-related code in each individual page, layouts allow you to create a reusable structure that can be easily applied to various pages.

### **Examples of Layouts**

- **AuthLayout** – A layout used specifically for pages related to user authentication (e.g., login, register).
- **AdminLayout** – A layout for pages that are part of the admin panel, including navigation, user management, and other admin-specific UI components.
- **LandingLayout** – A layout for pages related to the public-facing portion of the site, often used for marketing or information display.

### **Structure**

```
src/
├── layouts/
│   ├── auth.tsx         # Layout for authentication-related pages
│   ├── admin.tsx        # Layout for admin panel pages
│   ├── landing.tsx      # Layout for landing page(s)
│   ├── dashboard.tsx    # Layout for dashboard pages
```

### **Components Inside Layouts**

Layout components typically wrap other components like those from `components/`, `modules/`, or even other `layouts/`. These components could be navigation bars, footers, or sidebars that should be present on all pages of a certain type.

#### Example Structure

1. **auth.tsx**

   This layout might wrap the login and registration pages, providing only essential UI elements for authentication (such as a header and form container). It typically won't contain complex UI or app navigation elements, as those are irrelevant to the auth flows.

   ```tsx
   import { ReactNode } from "react";
   import { Header } from "@/components/modules/layouts/header";

   interface AuthLayoutProps {
     children: ReactNode;
   }

   export const AuthLayout = ({ children }: AuthLayoutProps) => (
     <div className="auth-layout">
       <Header />
       <main className="auth-content">{children}</main>
     </div>
   );
   ```

### **When to Use Layouts**

Layouts are used when you want to create a consistent structure that applies to multiple pages or sections of the application. They are particularly useful for:

- **Consistent navigation** – Ensuring the same menu or sidebar appears across different pages of the same section.
- **Shared elements** – Any page that uses the same header, footer, or any other global components should be wrapped with a layout.
- **Separate concerns** – Layouts separate concerns between page-specific content and application structure.

### **Conclusion**

The `layouts/` folder contains components that define the overarching structure of pages in the application. Layouts are reusable and allow for consistent UI and structure across different sections, ensuring a uniform user experience across the app. These components generally wrap other components like navigation or footers and should be used as the top-level container for specific groups of pages (e.g., Auth, Admin, Landing).
