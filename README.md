
# Bar Manager Frontend 🧾🍹🍕

Bar Manager Frontend is a web application acting as a digital menu for a bar. It allows customers to browse available products (sellable items), view details and ingredients, manage a shopping cart, and place orders directly from their device. 

This frontend is designed to work in tandem with the companion backend project [bar-manager-bo](https://github.com/emanuelesguerzo/bar-manager-bo), which provides the server-side functionality (such as data storage and order processing) for a complete end-to-end ordering system.

## Overview

This project provides a digital menu interface that enhances the customer experience by enabling interactive browsing and ordering. Users can navigate the menu, inspect what’s available, customize their selections, and submit orders without waiter intervention. 

The Bar Manager Frontend communicates with the [Bar Manager Backend](https://github.com/emanuelesguerzo/bar-manager-bo) via API calls to fetch menu data and send orders for processing. Together, these two parts form a full-stack application for streamlining bar operations. 

Each table can be assigned a unique QR code, allowing the backend to identify which table each order originates from.

---

### Key Features

1. **Browse Sellable Items:**
   - Users can explore a list of available products, organized by category for easy navigation.
   - Items are displayed in an accordion grouped by categories such as cocktails, beers, and more.

2. **View Item Details:**
   - Each menu item includes details such as a description, price, and list of ingredients.
   - This helps users make informed choices before adding items to the cart.

3. **Manage Shopping Cart:**
   - Users can add items to their cart, adjust quantities or remove items.
   - The cart view displays a summary of selected items and the total price.

4. **Place Orders:**
   - Once ready, users can submit their order. The frontend sends the order data to the backend via an API call.
   - After submission, users receive an on-screen confirmation.

5. **Responsive and User-Friendly UI:**
   - The interface is intuitive and mobile-friendly, accessible from tablets or smartphones (e.g. via a QR code on each table) as well as desktop devices.

By digitalizing the menu and ordering process, this application reduces wait times and errors, and provides a modern touch to the dining experience. All data (menu items, ingredient lists, order processing) is powered by the backend, ensuring that changes made in the back-office (like updating prices or availability) are reflected in real-time on the frontend.

---

### Technologies Used

- **React:** The core of the front-end is developed in React, leveraging its component-based architecture to build an interactive UI. React’s state and props system is used to manage UI state, and hooks (like `useState`, `useEffect`) manage component logic. This makes the interface reactive to user input and backend data.

- **React Router:** Client-side routing is implemented to navigate between different views/pages (for example, a menu list page, an item detail page, a cart page, and an order confirmation page) without full page reloads.

- **Axios:** The application uses Axios to retrieve the list of sellable items from the Bar Manager Backend and to send new orders.

- **Bootstrap 5:** Used for responsive layout and UI components such as accordion, buttons and modals. It provides a solid design foundation and mobile-first structure.

- **Custom CSS:** Custom styles have been written to personalize the appearance beyond Bootstrap's defaults, enhancing layout, colors, and component visuals as needed.

- **Vite:** Vite is used as the development server and build tool, providing fast hot module replacement (HMR) and optimized production builds.

---

### Getting Started

1. **Prerequisites:**
   
    - Make sure you have Node.js (v14 or higher) and npm installed. You also need access to the backend project [bar-manager-bo](https://github.com/emanuelesguerzo/bar-manager-bo), which must be running and reachable by the frontend.

2. **Clone the Repository:**
   
    - Clone this GitHub repository to your local development environment


        ```
        git clone https://github.com/emanuelesguerzo/bar-manager-fo.git
        cd bar-manager-fo
        ```

3. **Install Node Dependencies:**
  
    - Install front-end build dependencies using `npm` (this will pull in Bootstrap, Vite, etc., as defined in package.json)
    
        ```
        npm install
        ```

4. **Environment Configuration:**
  
    - Copy the example environment file and adjust settings as needed
    
        ```
        cp .env.example .env
        ```

5. **Ensure the Backend is Running:**
    
    - Make sure the [bar-manager-bo](https://github.com/emanuelesguerzo/bar-manager-bo) backend is running and accessible at the URL defined in `VITE_API_URL`.

---

### Running the Application

After installation, run the application:

  - `npm run dev`
  - Make sure the backend is running at the URL set in `VITE_API_URL`.

---

### Related Projects

- [Bar Manager Backend](https://github.com/emanuelesguerzo/bar-manager-bo) - Provides the API, inventory logic, and order processing for this frontend.

---

### Work in Progress

I'm still working on this project and plan to add new features, improvements, and refinements over time.

Feedback and suggestions are welcome! ❤️

---

### License

This project is open source and available under the MIT License. Feel free to use and modify it according to the license terms.
