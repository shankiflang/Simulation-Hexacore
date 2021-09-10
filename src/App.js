import { useEffect } from 'react';
import leds from './plate.json';

function App() {
    const pixelWeight = 30;
    const lineNmb = 22;

    const generate = () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        // All colors
        leds.forEach((x, xindex) => {
            x.forEach((y, yindex) => {
                if (xindex === Math.floor(Math.random() * lineNmb) && yindex === lineNmb / Math.floor(Math.random() * lineNmb)) {
                    console.log(x, y)
                    ctx.fillStyle = `white`;
                    ctx.fillRect(
                        xindex * pixelWeight,
                        yindex * pixelWeight,
                        pixelWeight,
                        pixelWeight
                    );
                } else {
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
