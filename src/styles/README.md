# **styles**

The `styles/` folder contains all **global CSS/SCSS/SASS/LESS files** needed for the application. It is intended to store global styles and configurations that are applied universally across the app. This folder is not for component-specific styles, which should remain within their respective component directories.

### **Purpose**

- **Global Styles**: This folder holds the base and global styles, such as resets, typography, color schemes, grid systems, or any universal styles required throughout the entire application.
- **Tailwind or Other Utility Frameworks**: If you're using utility-first CSS frameworks like Tailwind CSS, you can configure them here along with any customizations or extensions.
- **Preprocessing Setup**: If you're using CSS preprocessors like SASS, SCSS, or LESS, their configuration files and the main styling files will reside in this folder.

### **Structure**

```
src/
├── styles/
│   ├── globals.css        # Global styles (resets, basic typography, etc.)
│   ├── tailwind.css       # Custom Tailwind CSS configuration (if used)
│   ├── theme.scss         # Global theme variables (colors, typography)
│   └── mixins.scss        # SCSS mixins, variables, and global functions
```

### **Example: Global Styles (CSS)**

The `globals.css` file typically includes any CSS resets or universal styles that apply to the entire app:

```css
/* globals.css */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Arial", sans-serif;
  line-height: 1.5;
  background-color: #f4f4f4;
  color: #333;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Georgia", serif;
}

a {
  text-decoration: none;
  color: inherit;
}
```

### **Example: Tailwind Customization (CSS)**

If using **Tailwind CSS**, you can create a custom file to import Tailwind's utilities and add your custom configurations:

```css
/* tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .custom-btn {
    @apply bg-blue-500 text-white p-2 rounded;
  }
}
```

### **Example: SCSS with Theme Variables**

If using **SCSS** or **SASS**, you can define theme variables and mixins in the `theme.scss` or `mixins.scss` file:

```scss
/* theme.scss */
$primary-color: #3490dc;
$secondary-color: #ffed4a;
$background-color: #f9f9f9;

body {
  background-color: $background-color;
  color: #333;
}

h1 {
  color: $primary-color;
}
```

### **Example: SCSS Mixins and Variables**

In your SCSS files, you may define reusable mixins or functions in a `mixins.scss` file:

```scss
/* mixins.scss */
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  @include flex-center;
  background-color: $primary-color;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
```

### **Conclusion**

The `styles/` folder is responsible for all global styles used throughout the application. It helps to maintain consistency by centralizing global style rules, such as resets, typography, and theming. For utility-based styles (like Tailwind CSS), configurations should also be placed here. This ensures that your styling remains scalable and maintainable while keeping it separate from component-specific styles, which should reside with their respective components.
