# Reddit - Reader

## Introduction

This project is a Reddit Reader application that fetches and displays posts from a specified subreddit. It uses Vue.js with Vuetify for UI components and Pinia for state management.

## Features

- Display posts from a specified subreddit
- Search functionality to filter posts
- Column sorting using Vuetify Data Table built-in sorting
- Dialog component to show detailed information about the post's author
- Error handling for network requests
- Export posts to CSV
- Loading indicators for asynchronous operations

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JorgeMunizPr/reddit-reader.git
   cd reddit-reader
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run serve
   ```
4. Access the application in your web browser at `http://localhost:3000`.

## Usage

To fetch and display posts from a specific subreddit, you can modify the subreddit name in `HomePage.vue` inside the `loadPosts` method.

## Design Choices and Tradeoffs

- **Vuetify Data Table Sorting**: Using Vuetify's built-in sorting for the data table was chosen for simplicity and reliability. It ensures the sorting functionality is consistent with other Vuetify components and reduces the amount of custom code needed.
- **State Management with Pinia**: Pinia is used for state management to maintain a centralized store for the application data. It provides a simple and effective way to manage the state and share data across components.
- **Separation of Concerns**: Components are organized to ensure separation of concerns. Data fetching, state management, and UI rendering are handled separately to make the codebase more maintainable and scalable.
- **Error Handling**: Implemented comprehensive error handling to manage network request failures and provide feedback to the user.

## Scalability Considerations

- **Handling Large Data Sets**: As the data set grows, the application uses pagination controls to limit the number of posts displayed at once, improving performance and usability.
- **Concurrent Users**: To handle a large number of concurrent users on the frontend, efficient state management and component updates are crucial. This is achieved through:
  - Using reactive state management with Pinia to ensure efficient updates and reactivity.
  - Implementing debouncing in the search functionality to reduce the number of API calls.
  - Utilizing lazy loading and code-splitting to optimize load times and performance.

## Bonus Features

1. **Error Handling**: Comprehensive error handling is implemented for network requests to manage failures and provide feedback to the user.

2. **Row Selection**: Users can select rows in the data table, which can be used for batch actions or detailed views.

3. **Pagination Controls**: Pagination is implemented to manage large data sets, improving performance and user experience.

4. **Data Export**: Users can export the displayed posts to a CSV file.

## Implemented Features and Design Choices

### Vuetify Data Table Built-in Sorting

The Vuetify Data Table built-in sorting feature is used for column sorting. This decision was made because:

- It reduces the amount of custom code required.
- It ensures consistency with other Vuetify components.
- It leverages well-tested and maintained features of the Vuetify library.

## License

This project is licensed under the MIT License.
