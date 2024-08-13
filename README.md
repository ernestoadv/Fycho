# About

Fycho is an advanced time management software designed to streamline and automate time tracking, scheduling, and absence management for companies and their employees. Fycho enhances productivity and ensures efficient use of time. With additional capabilities for handling holidays, absence requests, and real-time analytics, Fycho supports businesses in maintaining effective operations and informed decision-making.

# Features

Fycho is a powerful software solution designed to automate and streamline time management for companies and their employees. Here are some of the key features:

## 1. Time Tracking

- **Automated Time Logging:** Track time spent on tasks and projects automatically without manual input.
- **Customizable Time Entries:** Add and edit time entries manually if needed, with flexible options for adjusting time spent.

## 2. Holidays and Absence Management

- **Holiday Tracking:** Manage and track public and company-specific holidays. Automatically apply holiday policies to employee schedules and time reports.
- **Absence Requests:** Allow employees to request time off and track their absences, including vacation, sick leave, and personal days.
- **Approval Workflow:** Implement a workflow for approving or rejecting absence requests, with notifications sent to both employees and managers.
- **Absence Reporting:** Generate reports on employee absences and time off, helping to monitor attendance patterns and manage staffing levels.

## 3. User Management

- **Role-Based Access Control:** Define roles and permissions for different users to control access to various features and data.
- **User Profiles:** Manage user profiles and track individual performance and time management.

## 4. Customizable Settings

- **Personalized Preferences:** Customize settings according to company policies and employee preferences.

## 5. Reporting and Analytics

- **Comprehensive Reports:** Generate detailed reports on time spent, productivity, and project progress.
- **Data Visualization:** Use charts and graphs to analyze performance metrics and make data-driven decisions.

## 6. Compliance and Security

- **Data Security:** Ensure data protection with advanced encryption and secure access protocols.
- **Compliance:** Adhere to industry standards and regulations for data privacy and time tracking.

# Design

## Directory Overview

The project follows a well-organized directory structure to ensure modularity, maintainability, and scalability. Here’s an overview of the key folders and their purposes within the `src` directory:

- **`src/assets/`** - Contains various static assets used throughout the application.
- **`src/components/`** - Houses all the reusable UI components of the application.
- **`src/hooks/`** - Contains custom React hooks that encapsulate reusable logic.
- **`src/store/`** - Manages global state and application data.
- **`src/styles/`** - Centralizes styling information for the application.
- **`src/utils/`** - Provides utility functions and managers to streamline various functionalities.
- **`src/types/`** - Defines TypeScript types, enums and interfaces used throughout the application.

By adhering to this directory structure, the project maintains a clean and efficient organization that facilitates development and future enhancements.

## Atomic design

This application follows the **Atomic Design** methodology to structure its UI components. Atomic Design is a methodology for creating design systems, and it breaks down the design into five distinct levels of abstraction:

1. **Atoms**: These are the basic building blocks of the application. They include fundamental elements like buttons, input fields, and labels. Atoms are the smallest unit of the design and cannot be broken down further.

2. **Molecules**: Molecules are groups of atoms bonded together to form more complex components. Examples include a search form consisting of an input field (atom) and a button (atom), or a card component with an image (atom) and a text block (atom).

3. **Organisms**: Organisms are more complex components composed of groups of molecules and/or atoms. They represent sections of a page or application that have distinct functionality. Examples might be a header with navigation links, or a product list with various cards.

4. **Templates**: Templates consist of groups of organisms that form a page layout. They define the structure and arrangement of components, but do not include actual content. Templates help in understanding the layout and how components work together.

5. **Pages**: Pages are specific instances of templates with real content. They represent the final view of the application and show how the components fit together with actual data.

**Directory Structure**

The project directory follows the Atomic Design principles, and you can find the components organized as follows:

- `src/components/atoms/` - Contains the basic building blocks of the UI.
- `src/components/molecules/` - Contains components made from atoms.
- `src/components/organisms/` - Contains complex components built from molecules and/or atoms.
- `src/components/templates/` - Contains page layouts and structures.
- `src/components/pages/` - Contains actual pages with real content.

**Benefits of Atomic Design**

- **Consistency**: By breaking down the design into smaller parts, it ensures that each component adheres to a consistent design pattern.
- **Reusability**: Components are designed to be reusable, reducing duplication and making the codebase easier to maintain.
- **Scalability**: Atomic Design facilitates scaling the application as new features can be added by composing existing components.
- **Maintainability**: Smaller, well-defined components are easier to test, debug, and refactor.

For more details on Atomic Design, you can refer to [Atomic Design by Brad Frost](http://bradfrost.com/blog/post/atomic-web-design/).

# Installation

## 1. Prerequisites

Before you start, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (Recommended version: v22.3.0)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development, only on macOS)

## 2. Initial Setup

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install dependencies:**

   Using npm:

   ```sh
   npm install
   ```

   Or using yarn:

   ```sh
   yarn install
   ```

## 3. App launch

In order to run this application on your test device, connect it to your computer. Alternatively, launch a simulator and follow one of the following steps depending on your OS:

1. **Start the Metro bundler:**

   ```sh
   npm run start
   ```

2. **Run the app:**

   **Android:**

   Before launching, open the **android** folder from the project's root directory in Android Studio and build the application on the desired device. Once the build process is complete, return to the Metro bundler and select the following option to run the build on your Android device:

   ```sh
   a - run on Android
   ```

   **iOS:**

   Before launching, open the **ios** folder from the project's root directory in Xcode and build the application on the desired device. Once the build process is complete, return to the Metro bundler and select the following option to run the build on your iOS device:

   ```sh
   i - run on iOS
   ```

# Troubleshooting

If you encounter issues while developing or running your React Native application, refer to the following troubleshooting tips:

## General Troubleshooting

- **Ensure Environment Setup**

  - Make sure you have the correct versions of Node.js, npm/yarn, and React Native CLI installed. Refer to the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide for detailed instructions.

- **Clear Cache**

  - Sometimes, cached data can cause issues. Clear the Metro bundler cache and npm/yarn cache with the following commands:

    ```sh
    npx react-native start --reset-cache
    ```

    or

    ```sh
    npm cache clean --force
    ```

    or

    ```sh
    yarn cache clean
    ```

- **Restart Metro Bundler**

  - If you encounter issues with the Metro bundler, try restarting it:

    ```sh
    npx react-native start
    ```

## Common Issues

- **App Not Loading or Blank Screen**

  - **Ensure Dependencies Are Installed:** Run `npm install` or `yarn install` to make sure all dependencies are correctly installed.
  - **Check for Errors in Console:** Look for any error messages in the terminal or browser console for clues about what might be wrong.
  - **Verify Component Imports:** Ensure that all components and modules are correctly imported and used.

- **Build Failures**

  - **Android Build Errors:**

    - **Ensure Android Studio Setup:** Open the `android` folder in Android Studio and sync the project with Gradle files. Check for any issues and resolve them.
    - **Check Emulator/Device:** Make sure the Android emulator is running or a physical device is connected.
    - **Rebuild the Project:** Run `npx react-native run-android` to rebuild the app.

  - **iOS Build Errors:**
    - **Open Xcode:** Open the `ios` folder in Xcode and make sure all configurations are correct. Check for any build errors in the Xcode console.
    - **Update CocoaPods:** Run `pod install` in the `ios` directory to ensure all CocoaPods dependencies are up-to-date.
    - **Clean Build Folder:** In Xcode, go to `Product` > `Clean Build Folder`, and then rebuild the app.

- **Module Not Found**

  - **Check Module Installation:** Ensure the module is listed in your `package.json` and installed in `node_modules`.
  - **Verify Imports:** Double-check the import statements in your code to ensure they match the module names and paths correctly.

- **Hot Reloading Issues**

  - **Enable Hot Reloading:** Make sure Hot Reloading is enabled by selecting `Enable Hot Reloading` from the React Native developer menu.
  - **Restart the App:** If Hot Reloading isn’t working, restart the app by stopping the Metro bundler and running the app again.

- **Debugging Network Requests**

  - **Check Network Connection:** Ensure your device or emulator has network access and can reach the API endpoints.
  - **Inspect API Requests:** Use tools like [React Native Debugger](https://github.com/jhen0409/react-native-debugger) or browser developer tools to inspect and debug network requests.

## Helpful Resources

- **[GitHub Issues](https://github.com/facebook/react-native/issues)**: Check existing issues or report new ones on the React Native GitHub repository.
- **[React Native Documentation](https://reactnative.dev/docs/getting-started)**: Official documentation with detailed guides and troubleshooting tips.
- **[Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)**: Community-driven Q&A for React Native-related issues.

If you continue to face issues or need further assistance, consider reaching out to the community or the support team for help.

# Learn More

To learn more about Fycho and other services, take a look at the following resources:

- [Ingenios Telemáticos](https://www.ingeniostelematicos.com/) - Read more about our **company**.

# License

Copyright (c) 2024, Ingenios Telemáticos

All rights reserved. This code is proprietary and confidential. Unauthorized copying of this file, via any medium, is strictly prohibited.

Proprietary and confidential.

Written by Ernesto Aranda del Valle, 2024.
