import React, { useState, useEffect, useCallback } from 'react';
import Staff from './Staff';

const NOTE_NAMES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const INTERVAL_NAMES = {
	0: 'Uníssono Justo', 1: 'Segunda Menor', 2: 'Segunda Maior', 3: 'Terça Menor',
	4: 'Terça Maior', 5: 'Quarta Justa', 6: 'Quarta aumentada/Quinta diminuta', 7: 'Quinta Justa',
	8: 'Sexta Menor', 9: 'Sexta Maior', 10: 'Sétima Menor', 11: 'Sétima Maior', 12: 'Oitava Justa', 
	13: 'Intervalo desconhecido'
};
const noteToValue = { 'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11 };
const CLEF_INFO = {
	g: { 2: { baseNoteName: 'B', baseNoteOctave: 3 } },
	f: { 4: { baseNoteName: 'D', baseNoteOctave: 2 }, 3: { baseNoteName: 'F', baseNoteOctave: 2 } },
	c: { 1: { baseNoteName: 'G', baseNoteOctave: 3 }, 2: { baseNoteName: 'E', baseNoteOctave: 3 }, 3: { baseNoteName: 'C', baseNoteOctave: 3 }, 4: { baseNoteName: 'A', baseNoteOctave: 2 } }
};

function getNoteFromPosition(position, clefSettings) {
	const baseNoteInfo = CLEF_INFO[clefSettings.clef][clefSettings.clefLine];
	const baseNoteName = baseNoteInfo.baseNoteName;
	let currentOctave = baseNoteInfo.baseNoteOctave;
	let currentNoteIndex = NOTE_NAMES.indexOf(baseNoteName);

	if (position > 0) {
		for (let i = 0; i < position; i++) {
			if (currentNoteIndex === 6) { currentOctave++; } 
			currentNoteIndex = (currentNoteIndex + 1) % 7;
		}
	} else if (position < 0) {
		for (let i = 0; i > position; i--) {
			if (currentNoteIndex === 0) { currentOctave--; } 
			currentNoteIndex = (currentNoteIndex - 1 + 7) % 7;
		}
	}
	return { name: NOTE_NAMES[currentNoteIndex], octave: currentOctave };
}

function getMidiValue({ name, octave, accidental }) {
	let value = 12 * (octave + 1) + noteToValue[name];
	if (accidental === '#') value++;
	if (accidental === 'b') value--;
	return value;
}

function Exercise({ settings, onBackToMenu }) {
    const [currentExercise, setCurrentExercise] = useState({});
    const [feedback, setFeedback] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);
    const [timer, setTimer] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [userAnswer, setUserAnswer] = useState({});

    const generateRandomNote = useCallback((canHaveAccidentals = true) => {
        let minPosition = -5; 
        let maxPosition = 9;  
        if (!settings.allowLedger) {
            minPosition = -4; 
            maxPosition = 4;  
        }

        const position = Math.floor(Math.random() * (maxPosition - minPosition + 1)) + minPosition;
        const { name, octave } = getNoteFromPosition(position, settings);
        
        let accidental = 'natural';
        if (settings.allowAccidentals && canHaveAccidentals) {
            const rand = Math.random();
            if (rand < 0.15) { accidental = '#'; } 
            else if (rand < 0.3) { accidental = 'b'; }
        }
        
        return { name, octave, accidental, position };
    }, [settings]);

    const generateNewExercise = useCallback(() => {
        setFeedback('');
        setIsAnswered(false);
        setTimer(0);

        if (settings.type === 'note') {
            const note1 = generateRandomNote();
            setCurrentExercise({ note1 });
            setUserAnswer({ noteName: 'C', octave: 4, accidental: 'natural' });
        } else {
            let note1 = generateRandomNote(false);
            let note2 = generateRandomNote(true);
            
            while (getMidiValue(note2) === getMidiValue(note1)) {
                note2 = generateRandomNote(true);
            }

            if (getMidiValue(note1) > getMidiValue(note2)) {
                [note1, note2] = [note2, note1];
            }
            
            const midiDiff = getMidiValue(note2) - getMidiValue(note1);
            const correctAnswer = INTERVAL_NAMES[midiDiff] || 'Intervalo desconhecido';

            setCurrentExercise({ note1, note2, correctAnswer });
            setUserAnswer({ interval: 'Uníssono Justo' });
        }
    }, [settings, generateRandomNote]);

    useEffect(() => {
        generateNewExercise();
    }, [generateNewExercise]);

    useEffect(() => {
        let timerInterval;
        if (!isAnswered) {
            const startTime = Date.now();
            timerInterval = setInterval(() => {
                setTimer((Date.now() - startTime) / 1000);
            }, 100);
        }
        return () => clearInterval(timerInterval);
    }, [isAnswered, currentExercise]);

    const checkAnswer = () => {
        setIsAnswered(true);
        setTotalTime(prev => prev + timer);
        let isCorrect = false;
        let correctAnswerText = '';

        if (settings.type === 'note') {
            const { note1 } = currentExercise;
            isCorrect = userAnswer.noteName === note1.name && 
                        parseInt(userAnswer.octave) === note1.octave && 
                        userAnswer.accidental === note1.accidental;
            
            let accidentalText = '';
            if(note1.accidental === '#') accidentalText = ' sustenido';
            if(note1.accidental === 'b') accidentalText = ' bemol';
            correctAnswerText = `A resposta é ${note1.name}${note1.octave}${accidentalText}.`;
        } else {
            isCorrect = userAnswer.interval === currentExercise.correctAnswer;
            correctAnswerText = `A resposta é ${currentExercise.correctAnswer}.`;
        }

        if (isCorrect) {
            setFeedback('<span class="feedback-correct">Correto!</span>');
        } else {
            setFeedback(`<span class="feedback-incorrect">Incorreto.</span> <span class="text-gray-600">${correctAnswerText}</span>`);
        }
    };

    const handleAnswerChange = (field, value) => {
        setUserAnswer(prev => ({ ...prev, [field]: value }));
    };

    const renderAnswerSection = () => {
        if (settings.type === 'note') {
            return (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 font-medium">Nota:</label>
                            <select 
                                value={userAnswer.noteName}
                                onChange={(e) => handleAnswerChange('noteName', e.target.value)}
                                className="w-full p-2 border rounded-lg"
                                disabled={isAnswered}
                            >
                                {NOTE_NAMES.map(n => <option key={n} value={n}>{n}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">Acidente:</label>
                            <select 
                                value={userAnswer.accidental}
                                onChange={(e) => handleAnswerChange('accidental', e.target.value)}
                                className="w-full p-2 border rounded-lg"
                                disabled={!settings.allowAccidentals || isAnswered}
                            >
                                <option value="natural">Natural</option>
                                <option value="#">Sustenido (#)</option>
                                <option value="b">Bemol (b)</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 font-medium">Altura:</label>
                        <div className="flex flex-wrap gap-2">
                            {[2, 3, 4, 5, 6].map(i => (
                                <div className="flex-1" key={i}>
                                    <input 
                                        type="radio" 
                                        name="note-octave" 
                                        value={i} 
                                        id={`octave-${i}`} 
                                        className="octave-option" 
                                        checked={parseInt(userAnswer.octave) === i}
                                        onChange={(e) => handleAnswerChange('octave', e.target.value)}
                                        disabled={isAnswered}
                                    />
                                    <label htmlFor={`octave-${i}`} className="octave-label block">{i}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <div>
                    <label htmlFor="interval-select" className="block mb-1 font-medium">Intervalo:</label>
                    <select 
                        id="interval-select" 
                        className="w-full p-2 border rounded-lg"
                        value={userAnswer.interval}
                        onChange={(e) => handleAnswerChange('interval', e.target.value)}
                        disabled={isAnswered}
                    >
                        {Object.values(INTERVAL_NAMES).map(name => <option key={name} value={name}>{name}</option>)}
                    </select>
                </div>
            );
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                    {settings.type === 'note' ? 'Qual é a nota?' : 'Qual é o intervalo?'}
                </h2>
                <div className="text-right">
                    <p className="font-semibold">Tempo: <span>{timer.toFixed(1)}s</span></p>
                    <p className="text-sm text-gray-500">Total: <span>{totalTime.toFixed(1)}s</span></p>
                </div>
            </div>

            <Staff 
                settings={settings} 
                notes={ [currentExercise.note1, currentExercise.note2].filter(Boolean) }
            />

            <div className="mb-4">
                {renderAnswerSection()}
            </div>
            
            <div className="h-10 mb-4 text-center text-lg font-semibold" dangerouslySetInnerHTML={{ __html: feedback }}>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {!isAnswered ? (
                    <button onClick={checkAnswer} className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">Verificar</button>
                ) : (
                    <button onClick={generateNewExercise} className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors">Próximo</button>
                )}
            </div>
            <button onClick={onBackToMenu} className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors mt-4">Voltar ao Menu</button>
        </div>
    );
}

export default Exercise;