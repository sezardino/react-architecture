# **Components**

The `components/` folder contains all the presentational components in the application. These components are responsible solely for rendering the UI and do not contain any business logic. They receive data and event handlers via props and focus purely on the visual presentation.

## **Structure**

```
components/
├── forms/    # Components for working with forms
├── modules/  # Modular components
├── ui/       # UI components
```

## **Purpose**

Each component is designed to be reusable and focused on a specific part of the UI. The primary goal is to ensure a clean separation of concerns where logic and state management are handled outside the components. The components should be:

- **Stateless** – Components do not manage internal state or business logic.
- **Reusable** – Designed to be reused in multiple places across the application.
- **Declarative** – The components should reflect the UI state as props change.

### **Key Principles**

- **Pure Components** – Components should render the UI based on props and should not have side effects or perform any asynchronous actions.
- **Separation of Concerns** – Avoid embedding business logic or API calls within presentational components. All such logic should be handled at higher levels in the component tree (e.g., in pages or containers).
- **Consistency** – Maintain consistency in design and behavior. Where possible, components should follow a standardized design pattern.

## **Conclusion**

The `components/` folder is crucial for maintaining a clean UI structure. By keeping the components simple and focused on presentation, you ensure that they remain flexible, testable, and easy to reuse. The separation of concerns between UI rendering and business logic makes the application easier to maintain and scale.
