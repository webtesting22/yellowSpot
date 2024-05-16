import React, { useState, useEffect } from "react";

const DynamicCreateShape = ({ width, height }) => {
    const [shape, setShape] = useState(null);

    useEffect(() => {
        const generateShape = () => {
            if (!width || !height) {
                return;
            }

            const aspectRatio = width / height;
            let topLeftDot;
            let bottomRightDot;
            let shapeElement;

            if (aspectRatio > 1) {
                // Landscape-oriented shape
                const shapeHeight = 100 / aspectRatio;
                const topLeftX = 0;
                const topLeftY = 0;
                const bottomRightX = 100;
                const bottomRightY = shapeHeight;
                topLeftDot = <div style={{ position: 'absolute', top: `${topLeftY}px`, left: `${topLeftX}px`, width: '10px', height: '10px', }} />;
                bottomRightDot = <div style={{ position: 'absolute', bottom: '0px', right: '0px', width: '10px', height: '10px', }} />;
                shapeElement = (
                    <div style={{ position: 'relative', width: '100px', height: `${shapeHeight}px`, border: "1px solid white", overflow: "hidden" }}>
                        {topLeftDot}
                        {bottomRightDot}
                        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: "hidden" }}>
                            <line x1="0" y1="0" x2="100" y2={shapeHeight} style={{ stroke: 'white', strokeWidth: 1 }} />
                        </svg>
                    </div>
                );
            } else {
                // Portrait-oriented shape
                const shapeWidth = 100 * aspectRatio;
                const topLeftX = 0;
                const topLeftY = 0;
                const bottomRightX = shapeWidth;
                const bottomRightY = 100;
                topLeftDot = <div style={{ position: 'absolute', top: '0px', left: '0px', width: '10px', height: '10px', }} />;
                bottomRightDot = <div style={{ position: 'absolute', bottom: '0px', right: '0px', width: '10px', height: '10px', }} />;
                shapeElement = (
                    <div style={{ position: 'relative', width: `${shapeWidth}px`, height:"100px", border: "1px solid white", overflow: "hidden" }}>
                        {topLeftDot}
                        {bottomRightDot}
                        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: "hidden" }}>
                            <line x1="0" y1="0" x2={shapeWidth} y2="100" style={{ stroke: 'white', strokeWidth: 1 }} />
                        </svg>
                    </div>
                );
            }

            setShape(shapeElement);
        };

        generateShape();
    }, [width, height]);

    return (
        <>
            <div style={{ position: "relative", display: "flex", fontSize: "11px", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                <div>{width}</div>
                {shape}

                <div style={{ position: 'absolute', top: '59%', left: '-20px', transform: 'translateY(-50%)', fontSize: "11px" }}>{height}</div>
            </div>
        </>
    )
};

export default DynamicCreateShape;
