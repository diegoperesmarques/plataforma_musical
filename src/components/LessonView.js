import React, { useState, useEffect } from 'react';
import marked from 'marked';

function formatLessonName(filename) {
    if (!filename) return '';
    return filename.replace('.md', '').replace(/_/g, ' ').replace(/^\d+\s*/, '');
}

function LessonView({ lessonFile, onBackToList, onBackToMainMenu }) {
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!lessonFile) return;

        const fetchLesson = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`/aulas/${lessonFile}`);
                if (!response.ok) {
                    console.error('Fetch failed with response:', response);
                    throw new Error('Não foi possível carregar o arquivo da aula.');
                }
                const markdown = await response.text();
                console.log('Markdown content:', markdown);
                setContent(marked(markdown));
            } catch (err) {
                setError(err.message);
                setContent('');
            } finally {
                setIsLoading(false);
            }
        };

        fetchLesson();
    }, [lessonFile]);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 border-b pb-3">{formatLessonName(lessonFile)}</h1>
            <div className="prose max-w-none w-full lesson-prose">
                {isLoading && <p>Carregando aula...</p>}
                {error && <p className="text-red-600 font-semibold">Erro ao carregar a aula. Verifique se o arquivo "{lessonFile}" existe na pasta "aulas".</p>}
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="mt-8 space-y-3">
                 <button onClick={onBackToList} className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Voltar para a Lista de Aulas
                </button>
                <button onClick={onBackToMainMenu} className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">
                    Voltar para o Início
                </button>
            </div>
        </div>
    );
}

export default LessonView;