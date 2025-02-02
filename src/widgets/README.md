# **widgets**

The `widgets/` folder contains **higher-level components** that encapsulate business logic and interact with the lower-level presentation components found in the `components` or `modules` folders. These widgets focus on encapsulating complex logic (such as data fetching, state management, or complex interactivity) and combine it with presentational components to form reusable feature blocks for the application.

Widgets are typically complex components that are used in multiple places across the app. Instead of repeating the same logic in each individual component, you encapsulate that logic in a widget, which can then be reused with different presentational components.

### **Purpose**

- **Encapsulating Reusable Logic**: Widgets are designed to encapsulate business logic, like handling state, fetching data, or managing interactions, making it easier to reuse across different parts of the application.
- **Composition of Components**: Widgets combine presentational components from `components` or `modules` with logic to create a complete feature that can be reused.
- **Centralized Logic**: Instead of repeating the same logic in multiple places (e.g., modals, forms, or user management), widgets allow that logic to be centralized and reused throughout the app.

### **Conclusion**

In the **`widgets/`** folder, we combine **business logic** and **presentation components**. Widgets like `UserModal` and `UserList` encapsulate specific features that involve both state management and visual UI elements. Instead of repeating this logic throughout the application, widgets allow you to reuse the same functionality in various places while keeping the code organized and maintainable.

By using widgets, developers can implement reusable features with both UI and business logic encapsulated in a single component, minimizing redundancy and improving maintainability.
