# **libs**

The `libs/` folder is dedicated to the configuration and setup of external libraries and tools that are used throughout the application. This folder is responsible for initializing and configuring third-party libraries, which can then be used throughout the project. The focus of this folder is **centralized configuration**, not business logic.

### **Purpose**

- **Centralized Library Configurations**: This is where external libraries are configured to ensure consistent behavior across the application.
- **Reusability**: Once configured, these libraries can be easily imported and used throughout the app without repeating setup code.
- **Cleaner Codebase**: By keeping library configurations separate, we maintain a cleaner, more organized project structure.

### **Examples of Configurations**

- **React Query** – Configuration of the `QueryClient` and `QueryClientProvider`.
- **Axios** – Creation of the Axios instance and interceptors for API requests.
- **Custom Providers** – Other necessary configurations for third-party libraries (e.g., authentication providers, theming libraries, etc.).

### **Structure**

```
src/
├── libs/
│   ├── axios.ts             # Axios instance and interceptors setup
│   ├── react-query/       # React Query Client and Provider configuration
│   └── universal-cookies.ts # Cookie management helper
```

### **Key Components**

1. **Axios Configuration (axios.ts)**

   In this file, we create and configure an Axios instance with interceptors. This ensures that all requests use the same base URL and include the authentication token when needed.

   ```ts
   import axios from "axios";
   import { CookieService } from "./universal-cookies";
   import {
     ACCESS_TOKEN_COOKIE_NAME,
     REFRESH_TOKEN_COOKIE_NAME,
   } from "@/const/cookies";
   import { AuthApiService } from "@/api/auth";
   import { forceLogout } from "@/utils/force-logout";
   import { setTokens } from "@/utils/tokens";

   export const axiosInstance = axios.create({
     baseURL: import.meta.env.VITE_REACT_BACKEND_URL,
   });

   axiosInstance.interceptors.request.use((config) => {
     const token = CookieService.get(ACCESS_TOKEN_COOKIE_NAME);
     if (token) config.headers.Authorization = `Bearer ${token}`;

     return config;
   });

   axiosInstance.interceptors.response.use(
     (response) => response,
     async (error) => {
       const originalRequest = error.config;
       if (error.response.status === 401 && !originalRequest._retry) {
         const token = CookieService.get(REFRESH_TOKEN_COOKIE_NAME);

         if (!token) return Promise.reject(error);

         originalRequest._retry = true;
         try {
           const refreshResponse = await AuthApiService.refreshAccessToken(
             token
           );

           const { accessToken, refreshToken } = refreshResponse.data;

           setTokens(accessToken, refreshToken);

           axiosInstance.defaults.headers.common[
             "Authorization"
           ] = `Bearer ${accessToken}`;

           return axiosInstance(originalRequest);
         } catch (error) {
           forceLogout();
           return Promise.reject(error);
         }
       }
       return Promise.reject(error);
     }
   );
   ```

2. **React Query Configuration (react-query.ts)**

   Here, we set up the `QueryClient` and provide it globally using `QueryClientProvider`. This setup ensures that React Query works consistently throughout the app.

   ```ts
   import { QueryClientProvider } from "@tanstack/react-query";
   import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
   import { PropsWithChildren } from "react";

   import { queryClient } from "./client";

   export const TanstackProvider = ({ children }: PropsWithChildren) => {
     return (
       <QueryClientProvider client={queryClient}>
         {children}
         <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
     );
   };

   import { QueryClient } from "@tanstack/react-query";

   export const queryClient = new QueryClient({
     defaultOptions: {
       queries: {
         retry: 1,
         staleTime: 1000 * 60,
         refetchOnWindowFocus: import.meta.env.MODE !== "development",
       },
     },
   });
   ```

3. **Cookie Management (universal-cookies.ts)**

   This file could contain utilities for handling cookies, such as getting and setting authentication tokens. These helpers are used by Axios and other parts of the app to ensure consistent cookie management.

   ```ts
   import Cookies from "js-cookie";

   export class CookieService {
     static get(name: string) {
       return Cookies.get(name);
     }

     static set(name: string, value: string) {
       Cookies.set(name, value);
     }

     static remove(name: string) {
       Cookies.remove(name);
     }
   }
   ```

### **When to Use the `libs/` Folder**

- **External Library Configuration**: Use this folder to configure external libraries like Axios, React Query, authentication providers, or anything that requires a global configuration.
- **Shared Configuration**: Any configuration or initialization code that needs to be used across multiple files should go here.
- **Cleaner Codebase**: By separating configuration from application logic, you ensure a more organized, maintainable codebase.

### **Conclusion**

The `libs/` folder is exclusively dedicated to configuring and setting up external libraries. It is not for business logic or UI components. All external libraries that require initialization or configuration should be placed here, ensuring they are consistently applied throughout the application. This structure helps centralize configuration, making it easier to update or replace libraries in the future without changing the rest of the application code.
