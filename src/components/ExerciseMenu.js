import React, { useState, useEffect } from 'react';

const CLEF_LINES = {
	g: { label: 'Linha da Clave de Sol', lines: { 2: 'Linha 2 (Padrão)' } },
	f: { label: 'Linha da Clave de Fá', lines: { 4: 'Linha 4 (Padrão)', 3: 'Linha 3' } },
	c: { label: 'Linha da Clave de Dó', lines: { 3: 'Linha 3 (Contralto)', 4: 'Linha 4 (Tenor)', 1: 'Linha 1 (Soprano)', 2: 'Linha 2 (Mezzo-soprano)' } }
};

function ExerciseMenu({ onStartExercise, onBack }) {
    const [exerciseType, setExerciseType] = useState('note');
    const [clef, setClef] = useState('g');
    const [clefLine, setClefLine] = useState('2');
    const [allowLedger, setAllowLedger] = useState(false);
    const [allowAccidentals, setAllowAccidentals] = useState(false);

    useEffect(() => {
        const firstLine = Object.keys(CLEF_LINES[clef].lines)[0];
        setClefLine(firstLine);
    }, [clef]);

    const handleStart = () => {
        onStartExercise({
            type: exerciseType,
            clef,
            clefLine,
            allowLedger,
            allowAccidentals
        });
    };

    const ClefLineSelector = () => {
        const info = CLEF_LINES[clef];
        return (
            <div>
                <label className="block mb-2 font-medium">{info.label}:</label>
                <div className="flex flex-wrap gap-2">
                    {Object.entries(info.lines).map(([lineValue, lineLabel]) => (
                        <React.Fragment key={lineValue}>
                            <input
                                type="radio"
                                name="clefLine"
                                value={lineValue}
                                id={`line-${lineValue}`}
                                className="clef-line-option"
                                checked={clefLine === lineValue}
                                onChange={(e) => setClefLine(e.target.value)}
                            />
                            <label htmlFor={`line-${lineValue}`} className="clef-line-label">
                                {lineLabel}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        );
    };


    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-6">Configurar Exercício</h1>
            
            <div className="space-y-6">
                <div>
                    <h2 className="text-lg font-semibold mb-2">1. Escolha o Exercício</h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <label className="flex-1 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input 
                                type="radio" 
                                name="exerciseType" 
                                value="note" 
                                className="mr-2" 
                                checked={exerciseType === 'note'}
                                onChange={(e) => setExerciseType(e.target.value)}
                            />
                            Nome e Altura da Nota
                        </label>
                        <label className="flex-1 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input 
                                type="radio" 
                                name="exerciseType" 
                                value="interval" 
                                className="mr-2"
                                checked={exerciseType === 'interval'}
                                onChange={(e) => setExerciseType(e.target.value)}
                            />
                            Intervalos Musicais
                        </label>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">2. Configure a Pauta</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="clef" className="block mb-2 font-medium">Clave:</label>
                            <select 
                                id="clef" 
                                className="w-full p-2 border rounded-lg bg-white"
                                value={clef}
                                onChange={(e) => setClef(e.target.value)}
                            >
                                <option value="g">Clave de Sol</option>
                                <option value="f">Clave de Fá</option>
                                <option value="c">Clave de Dó</option>
                            </select>
                        </div>
                        <div id="clef-line-container">
                            <ClefLineSelector />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">3. Opções Adicionais</h2>
                    <div className="space-y-2">
                        <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="h-5 w-5 rounded mr-3"
                                checked={allowLedger}
                                onChange={(e) => setAllowLedger(e.target.checked)}
                            />
                            Permitir linhas suplementares
                        </label>
                        <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="h-5 w-5 rounded mr-3"
                                checked={allowAccidentals}
                                onChange={(e) => setAllowAccidentals(e.target.checked)}
                            />
                            Permitir sustenidos e bemois
                        </label>
                    </div>
                </div>
            </div>

            <button onClick={handleStart} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg mt-8 hover:bg-blue-700 transition-colors">
                Iniciar Exercício
            </button>
            <button onClick={onBack} className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors mt-4">
                Voltar para o Início
            </button>
        </div>
    );
}

export default ExerciseMenu;