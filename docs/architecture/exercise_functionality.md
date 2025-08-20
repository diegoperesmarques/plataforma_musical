# Exercise Functionality

This document details the functionality of the exercise components.

## Components

- **`ExerciseMenu.js`**: This component allows the user to configure an exercise. The user can choose the exercise type (note identification or interval identification), the clef, and other options like allowing ledger lines and accidentals. When the user clicks "Start Exercise", it calls the `onStartExercise` callback with the selected settings.

- **`Exercise.js`**: This is the main component for the exercises. It receives the settings from `ExerciseMenu.js` and generates exercises based on them. It displays a musical staff with a note (or two, for intervals) and provides an interface for the user to answer. It checks the user's answer, provides feedback, and keeps track of the time taken.

- **`Staff.js`**: This component is responsible for rendering the musical staff, including the clef and the notes.

## Flow

1.  The `ExerciseMenu` component is displayed, allowing the user to select the desired exercise settings.
2.  The user configures the exercise type, clef, and other options.
3.  The user clicks the "Start Exercise" button.
4.  The `onStartExercise` callback is triggered, and the main `App.js` component will render the `Exercise` component, passing the settings.
5.  The `Exercise` component generates a new exercise based on the received settings.
6.  A musical staff is displayed with a note (or two for interval exercises).
7.  The user inputs their answer using the provided controls (selects for note name, accidental, octave, or interval type).
8.  The user clicks the "Check" button.
9.  The `Exercise` component validates the answer and provides immediate feedback (correct or incorrect).
10. The user can then proceed to the next exercise by clicking the "Next" button.
11. The user can return to the exercise menu at any time.
