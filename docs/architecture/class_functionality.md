# Class Functionality

This document details the functionality of the 'class' (lesson) components.

## Components

- **`LessonsList.js`**: This component is responsible for displaying a list of available lessons. It fetches the list of lesson files (currently hardcoded) and allows the user to search for a specific lesson. When a lesson is selected, it calls the `onSelectLesson` callback function, passing the selected lesson's filename.

- **`LessonView.js`**: This component displays the content of a selected lesson. It receives the lesson filename as a prop and fetches the corresponding Markdown file from the `public/aulas` directory. The Markdown content is then rendered as HTML. It also provides buttons to go back to the lesson list or the main menu.

## Flow

1. The `LessonsList` component is rendered, showing a list of available lessons.
2. The user can search for lessons using the search bar.
3. The user clicks on a lesson from the list.
4. The `onSelectLesson` callback is triggered, which in the main `App.js` component, will set the state to show the `LessonView` component.
5. The `LessonView` component is rendered, receiving the selected lesson's filename.
6. `LessonView` fetches the content of the corresponding `.md` file from the `/aulas/` directory.
7. The fetched Markdown is parsed and displayed as the lesson content.
8. The user can navigate back to the list of lessons or to the main menu using the buttons provided.
