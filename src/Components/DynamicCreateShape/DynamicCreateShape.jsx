import React, { useState, useEffect } from "react";

const DynamicCreateShape = ({ width, height }) => {
    const [shape, setShape] = useState(null);

    useEffect(() => {
        const generateShape = () => {
            if (!width || !height) {
                return;
            }

            const aspectRatio = width / height;
            const area = width * height;
            let shapeElement;
            const background = 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0, 0, 0, 0.171) 0, rgba(0, 0, 0, 0.137) 6px)';

            if (aspectRatio > 1) {
                // Landscape-oriented shape
                const shapeHeight = 100 / aspectRatio;
                shapeElement = (
                    <div style={{ position: 'relative', width: '100px', height: `${shapeHeight}px`, border: "1px solid white", overflow: "hidden", background }}>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#D8D8D8',
                            fontSize: '11px'
                        }}>
                            {area}sqft
                        </div>
                    </div>
                );
            } else {
                // Portrait-oriented shape
                const shapeWidth = 100 * aspectRatio;
                shapeElement = (
                    <div style={{ position: 'relative', width: `${shapeWidth}px`, height: "100px", border: "1px solid white", overflow: "hidden", background }}>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#D8D8D8',
                            fontSize: '11px'
                        }}>
                            {area}sqft
                        </div>
                    </div>
                );
            }

            setShape(shapeElement);
        };

        generateShape();
    }, [width, height]);

    return (
        <div style={{ position: "relative", display: "flex", fontSize: "11px", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
            <div>{width}W</div>
            {shape}
            <div style={{ position: 'absolute', top: '59%', left: '-22px', transform: 'translateY(-50%)', fontSize: "11px" }}>{height}H</div>
        </div>
    )
};

export default DynamicCreateShape;
