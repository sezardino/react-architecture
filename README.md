# **React Architecture - My Vision**

## **Introduction**

This project demonstrates my personal vision of a well-structured React application architecture. The goal is to create a modular, scalable, and flexible architecture that promotes clear separation of concerns and maintainability.

### **Suitable for Next.js**

While this project is built with React and Vite, the architecture is also applicable to **Next.js** projects with minimal adjustments. The same principles of component responsibility can be applied to Next.js pages and layouts.

## **Core Principles**

- **Modularity** – Clear separation of concerns for maintainability.
- **Scalability** – Supports application growth without degrading performance.
- **Flexibility** – Easily replaceable technologies without major codebase changes.
- **Compatibility** – The architecture is adaptable to both React and Next.js projects.

A key idea of this approach is to encapsulate business logic (BLL) as high as possible in the component tree.

- Business Logic Encapsulation
  - No API calls or business logic inside components/ – all components inside components/ are purely presentational and only render data passed via props.
  - BLL is only allowed in `pages/`, `layouts/`, `hocs/`, and `widgets/` – these layers handle API calls, state management, and data transformations.
  - Clear separation of concerns – UI components focus on rendering, while higher-level components manage logic.

## **Tech Stack**

- **React** – UI framework.
- **TypeScript** – Static typing for better maintainability.
- **Vite** – Fast development and build tool.
- **React Query** – Server state management (can be replaced with alternatives).
- **Tailwind CSS** – Utility-first styling (can be swapped for CSS Modules, etc.).
- **React Router** – Client-side routing (for Next.js, use `next/router` or App Router).
- **Axios** – HTTP client for API requests.

## **Project Structure**

```
src/
├── api/          # API service layer (for fetching data)
├── components/   # Pure presentational components (no business logic)
│   ├── forms/    # Components for working with forms
│   ├── modules/  # Modular components
│   ├── ui/       # UI components
├── const/        # Project constants
├── hoсs/         # Higher-Order Components (HOCs) – can contain logic
├── hooks/        # Custom React hooks
├── layouts/      # General layout components – can contain logic
├── libs/         # Libraries and helper modules
├── pages/        # Application pages – can contain logic
├── stores/       # State management (e.g., Zustand, Redux)
├── styles/       # Global styles and themes
├── utils/        # Utility functions and helpers
├── widgets/      # Widgets (high-level compositional components) – can contain logic
├── main.tsx      # Entry point
```

Each major folder contains a README.md file, which explains the purpose of the folder and, if necessary, provides usage examples.

## **Authentication**

The project includes a basic authentication system to demonstrate how the architecture handles business logic at higher levels in the component tree. It utilizes:

- **Cookies and React Query**
- **Axios** for API requests

## **Extensibility**

- **Styling** – Tailwind CSS is used but can be replaced with CSS Modules, SCSS, or other styling approaches.
- **State Management** – React Query is used but can be swapped for Redux, MobX, Zustand, or other solutions.
- **Next.js Support** – The same structure can be applied to a Next.js project with adjustments to routing and page structure.

## **Conclusion**

This project represents my personal approach to structuring a React application, emphasizing separation of concerns and business logic encapsulation at the highest possible level in the component tree.

It is also adaptable to **Next.js** projects and can be easily extended with different styling and state management solutions.
