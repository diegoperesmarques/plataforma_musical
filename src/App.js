import React, { useState, useEffect } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import MainMenu from './components/MainMenu';
import ExerciseMenu from './components/ExerciseMenu';
import Exercise from './components/Exercise';
import LessonsList from './components/LessonsList';
import LessonView from './components/LessonView';

const SCREENS = {
  MAIN_MENU: 'MAIN_MENU',
  EXERCISE_MENU: 'EXERCISE_MENU',
  EXERCISE: 'EXERCISE',
  LESSONS_LIST: 'LESSONS_LIST',
  LESSON_VIEW: 'LESSON_VIEW',
};

function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.MAIN_MENU);
  const [exerciseSettings, setExerciseSettings] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const startExercise = (settings) => {
    setExerciseSettings(settings);
    setCurrentScreen(SCREENS.EXERCISE);
  };

  const viewLesson = (lessonFile) => {
    setSelectedLesson(lessonFile);
    setCurrentScreen(SCREENS.LESSON_VIEW);
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case SCREENS.MAIN_MENU:
        return (
          <MainMenu
            onShowLessons={() => setCurrentScreen(SCREENS.LESSONS_LIST)}
            onShowExercises={() => setCurrentScreen(SCREENS.EXERCISE_MENU)}
          />
        );
      case SCREENS.EXERCISE_MENU:
        return (
          <ExerciseMenu
            onStartExercise={startExercise}
            onBack={() => setCurrentScreen(SCREENS.MAIN_MENU)}
          />
        );
      case SCREENS.EXERCISE:
        return (
          <Exercise
            settings={exerciseSettings}
            onBackToMenu={() => setCurrentScreen(SCREENS.EXERCISE_MENU)}
          />
        );
      case SCREENS.LESSONS_LIST:
        return (
          <LessonsList
            onSelectLesson={viewLesson}
            onBack={() => setCurrentScreen(SCREENS.MAIN_MENU)}
          />
        );
      case SCREENS.LESSON_VIEW:
        return (
          <LessonView
            lessonFile={selectedLesson}
            onBackToList={() => setCurrentScreen(SCREENS.LESSONS_LIST)}
            onBackToMainMenu={() => setCurrentScreen(SCREENS.MAIN_MENU)}
          />
        );
      default:
        return <div>Screen not found</div>;
    }
  };

  const containerClass = currentScreen === SCREENS.LESSON_VIEW 
    ? 'w-full' 
    : 'p-4 sm:p-6 md:p-8';

  return (
    <div className={`w-full min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <DarkModeToggle onToggle={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className={containerClass}>
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;