import { useEffect } from 'react';

function App() {
    const pixelWeight = 30;
    const lineNmb = 22;
    const lineMax = 8;

    const generate = () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        let leds = Array(lineNmb).fill(Array(lineNmb).fill(0));

        // Remove left-top corner
        for (let a = 0; a < lineMax; a++) {
            for (let b = lineMax; b >= 0; b--) {
                console.log(`[${b}][${a}]`)
                leds[a][b] = null;
            }
        }

        // All colors
        leds.forEach((x, xindex) => {
            x.forEach((y, yindex) => {
                if (y != null) {
                    let R = Math.floor(Math.random() * 255),
                        G = Math.floor(Math.random() * 255),
                        B = Math.floor(Math.random() * 255);

                    ctx.fillStyle = `rgb(${R} , ${G}, ${B})`;
                    ctx.fillRect(
                        xindex * pixelWeight,
                        yindex * pixelWeight,
                        pixelWeight,
                        pixelWeight
                    );
                }
            });
        });
    };

    useEffect(() => {
        generate();
    }, []);

    return (
        <div className="App">
            <canvas
                width={pixelWeight * lineNmb}
                height={pixelWeight * lineNmb}
                id="canvas"
            />
        </div>
    );
}

export default App;
