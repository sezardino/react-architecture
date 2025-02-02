# **API Service Layer**

The `api/` folder contains all the backend requests as well as the types used for those requests. This layer is responsible for making HTTP requests to the backend, managing data transformations, and providing reusable methods for fetching data.

## **Structure**

The folder can be structured by grouping requests and types by domain. For example:

```
src/
├── api/
│   ├── auth/     # Auth requests and types
│   ├── cart/     # Cart requests and types
│   ├── user/     # User-related requests and types
│   ├── product/  # Product-related requests and types
│   ├── types/    # Common types shared across modules
```

Each subfolder represents a different domain or resource in your application. For example, the `auth/` folder will contain all the requests related to authentication, along with the types specific to those requests. Similarly, the `cart/` folder will contain requests and types related to the shopping cart functionality.

## **API Requests**

Here is an example of how an API service class can be structured. Note that this is just one possible approach. You are free to structure your requests differently. For instance, you can also export plain functions instead of using a class.

### **Example - API Service Class**

```typescript
import { axiosInstance } from "@/libs/axios";
import { CurrentUserResponse } from "./types";

export class AppApiService {
  static currentUser() {
    return axiosInstance.get<CurrentUserResponse>("/users/me");
  }
}
```

This example shows how an API service class is used to structure backend requests. `AppApiService` is a class that encapsulates methods for making HTTP requests related to the application. The `currentUser` method makes a `GET` request to the `/users/me` endpoint and returns the response typed as `CurrentUserResponse`.

### **Alternative Approach - Plain Functions**

Alternatively, instead of using a class, you can simply export individual functions for each API request. Here’s how the same API call can be implemented using a function:

```typescript
import { axiosInstance } from "@/libs/axios";
import { CurrentUserResponse } from "./types";

export const getCurrentUser = () => {
  return axiosInstance.get<CurrentUserResponse>("/users/me");
};
```

Both approaches are valid, and you can choose the one that best fits your project's needs.

## **Types**

For each API request, it is important to define types for both the request payload (if applicable) and the response. These types should be organized into separate files for better modularity. For example, `types/` can contain a `user.ts` file with types related to user data, a `cart.ts` file for cart data, and so on.

Example of a types file for the `auth` module:

```typescript
// src/api/auth/types.ts
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  expires_in: number;
}
```

In this example, the `LoginRequest` type defines the shape of the data required to log in, and the `LoginResponse` type represents the response data containing the authentication token.

## **Extensibility**

- The API layer can be easily extended by adding more domains (e.g., `orders`, `payment`, etc.) as needed.
- The request structure can be adjusted depending on your preference, whether you use classes, functions, or even a more sophisticated abstraction for handling requests.

## **Conclusion**

The `api/` layer is the central place for managing all the requests to the backend. It encapsulates all API logic, making it easy to maintain and test. Organizing requests into separate modules for each domain ensures a clean and scalable codebase.
