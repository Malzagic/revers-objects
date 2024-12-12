# Reverse Order React Component

This project demonstrates a React component that dynamically changes the order of its elements (avatar, text, and menu) when a button is clicked. The task is implemented using Tailwind CSS for styling.

## Features

- **Dynamic Element Reordering**: Click the "Reverse" button to rearrange the elements in reverse order.
- **Responsive Design**: The layout is styled using Tailwind CSS to ensure responsiveness.
- **Gradient Text**: The text uses a gradient effect for modern visual appeal.
- **Reusable Component**: The component is modular and reusable.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript**: Core programming language for functionality.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Malzagic/revers-objects
   ```
2. Navigate to the project directory:
   ```bash
   cd reverse-objects
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to see the application.

## Usage

- The component displays an avatar, descriptive text, and a menu icon.
- Click the "Reverse" button to change the order of the elements from:
  - **Default**: [Avatar > Text > Menu]
  - **Reversed**: [Menu > Text > Avatar]

## File Structure

- **`src/components/ReverseComponent.js`**: Contains the core React component.
- **`src/assets/`**: Contains image assets (avatar, menu icon, verification badge, etc.).
- **`tailwind.config.js`**: Configuration for Tailwind CSS.

## Customization

- To modify the colors or styles, edit the `tailwind.config.js` file or update the component's class names.
- Replace the assets in the `src/assets` directory to use custom images.
