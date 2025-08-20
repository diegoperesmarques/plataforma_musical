import React from 'react';

function MainMenu({ onShowLessons, onShowExercises }) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Treinamento Musical</h1>
      <div className="space-y-4">
        <button
          onClick={onShowLessons}
          className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors"
        >
          Aulas
        </button>
        <button
          onClick={onShowExercises}
          className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors"
        >
          Exercícios
        </button>
      </div>
    </div>
  );
}

export default MainMenu;