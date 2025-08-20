import React, { useState, useEffect } from 'react';

const lessonFiles = [
    "01_Introducao_a_Musica.md"
];

function formatLessonName(filename) {
    return filename.replace('.md', '').replace(/_/g, ' ').replace(/^\d+\s*/, '');
}

function LessonsList({ onSelectLesson, onBack }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLessons, setFilteredLessons] = useState(lessonFiles);

    useEffect(() => {
        const results = lessonFiles.filter(file => 
            formatLessonName(file).toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredLessons(results);
    }, [searchTerm]);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-6">Aulas</h1>
            <div className="mb-6">
                <input 
                    type="search" 
                    placeholder="Pesquisar aulas..." 
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                {filteredLessons.length > 0 ? (
                    filteredLessons.map(file => (
                        <button 
                            key={file}
                            onClick={() => onSelectLesson(file)}
                            className="w-full text-left p-4 bg-gray-50 border rounded-lg hover:bg-blue-100 hover:border-blue-400 transition-colors"
                        >
                            {formatLessonName(file)}
                        </button>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Nenhuma aula encontrada.</p>
                )}
            </div>
            <button onClick={onBack} className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors mt-6">
                Voltar para o Início
            </button>
        </div>
    );
}

export default LessonsList;