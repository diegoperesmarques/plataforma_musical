import React, { useRef, useEffect } from 'react';

const CLEF_INFO = {
	g: { 2: { baseNoteName: 'B', baseNoteOctave: 3 } },
	f: { 4: { baseNoteName: 'D', baseNoteOctave: 2 }, 3: { baseNoteName: 'F', baseNoteOctave: 2 } },
	c: { 1: { baseNoteName: 'G', baseNoteOctave: 3 }, 2: { baseNoteName: 'E', baseNoteOctave: 3 }, 3: { baseNoteName: 'C', baseNoteOctave: 3 }, 4: { baseNoteName: 'A', baseNoteOctave: 2 } }
};

function Staff({ settings, notes }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !settings || notes.length === 0) return;

        const container = containerRef.current;
        const staffWidth = container.clientWidth;
        const staffHeight = 120;
        const lineSpacing = 20;
        
        let svg = `<svg width="100%" height="100%" viewBox="0 0 ${staffWidth} ${staffHeight}">`;

        // Draw staff lines
        for (let i = 0; i < 5; i++) {
            const y = (staffHeight / 2) - (2 * lineSpacing) + (i * lineSpacing);
            svg += `<line x1="10" y1="${y}" x2="${staffWidth - 10}" y2="${y}" stroke="black" stroke-width="1.5"/>`;
        }

        // Draw clef
        const clefLineInfo = CLEF_INFO[settings.clef][settings.clefLine];
        let clefUrl, clefY, clefHeight, clefWidth;
        const middleY = staffHeight / 2;

        if (settings.clef === 'g') {
            clefUrl = 'https://codeberg.org/diegoperesmarques/img-tutoriais/raw/branch/main/notas/claveSol.png';
            clefHeight = lineSpacing * 7;
            clefWidth = clefHeight * 0.4;
            clefY = middleY - (lineSpacing * 3.5);
        } else if (settings.clef === 'f') {
            clefUrl = 'https://codeberg.org/diegoperesmarques/img-tutoriais/raw/branch/main/notas/claveFa.png';
            clefHeight = lineSpacing * 4;
            clefWidth = clefHeight * 0.5;
            clefY = middleY - (lineSpacing * 2);
        } else { // clef c
            clefUrl = 'https://codeberg.org/diegoperesmarques/img-tutoriais/raw/branch/main/notas/222746.png';
            const baseLine = parseInt(settings.clefLine, 10); // 1, 2, 3, or 4
            clefHeight = lineSpacing * 4;
            clefWidth = clefHeight * 0.5;
            clefY = middleY - (baseLine - 1) * lineSpacing - (lineSpacing * 1.5);
        }
        svg += `<image href="${clefUrl}" x="20" y="${clefY}" height="${clefHeight}" width="${clefWidth}" />`;

        // Draw notes
        notes.forEach((note, index) => {
            if (!note) return;
            const x = staffWidth * (index === 0 ? 0.4 : 0.6);
            const step = lineSpacing / 2;
            const noteRadius = step * 0.9;
            const y = middleY - note.position * step;

            // Ledger lines
            // Notes below the staff
            for (let i = -6; i >= note.position; i -= 2) {
                const lineY = middleY - i * step;
                svg += `<line x1="${x - noteRadius * 1.8}" y1="${lineY}" x2="${x + noteRadius * 1.8}" y2="${lineY}" stroke="black" stroke-width="1.5"/>`;
            }

            // Notes above the staff
            for (let i = 6; i <= note.position; i += 2) {
                const lineY = middleY - i * step;
                svg += `<line x1="${x - noteRadius * 1.8}" y1="${lineY}" x2="${x + noteRadius * 1.8}" y2="${lineY}" stroke="black" stroke-width="1.5"/>`;
            }

            // Note head
            svg += `<circle cx="${x}" cy="${y}" r="${noteRadius}" fill="black" />`;
            
            // Stem
            const stemDirection = note.position >= 0 ? -1 : 1;
            const stemHeight = lineSpacing * 3.5;
            const stemX = x + (stemDirection === 1 ? -noteRadius : noteRadius);
            svg += `<line x1="${stemX}" y1="${y}" x2="${stemX}" y2="${y + stemHeight * stemDirection}" stroke="black" stroke-width="2"/>`;

            // Accidental
            if (note.accidental !== 'natural') {
                const accidentalX = x - noteRadius * 3.5;
                let accidentalSymbol = '';
                if (note.accidental === '#') {
                    accidentalSymbol = `<g transform="translate(${accidentalX}, ${y})" stroke="black" stroke-width="1.5"><line x1="-4" y1="-10" x2="-4" y2="10" /><line x1="4" y1="-10" x2="4" y2="10" /><line x1="-7" y1="-3" x2="7" y2="1" stroke-width="2.5" /><line x1="-7" y1="3" x2="7" y2="7" stroke-width="2.5" /></g>`;
                } else if (note.accidental === 'b') {
                    accidentalSymbol = `<g transform="translate(${accidentalX}, ${y})" stroke="black" stroke-width="1.5" fill="black"><line x1="0" y1="-12" x2="0" y2="5" /><path d="M 0 5 C 10 5, 10 -5, 0 -5 Z" stroke-width="1" /></g>`;
                }
                svg += accidentalSymbol;
            }
        });

        svg += '</svg>';
        container.innerHTML = svg;

    }, [settings, notes]);


    return (
        <div 
            ref={containerRef} 
            className="relative w-full h-48 bg-gray-50 border rounded-lg mb-6 flex items-center justify-center p-4"
        >
        </div>
    );
}

export default Staff;