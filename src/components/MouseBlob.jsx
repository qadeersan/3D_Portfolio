import React, { useState, useEffect, useRef } from 'react';

function MouseFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });
    
    const mousePositionRef = useRef(mousePosition);
    const blobPositionRef = useRef(blobPosition);
    const blobRef = useRef(null);

    const lerp = (start, end, alpha) => {
        return start * (1 - alpha) + end * alpha;
    };

    const distance = (x1, y1, x2, y2) => {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };

    useEffect(() => {
        mousePositionRef.current = mousePosition;
        blobPositionRef.current = blobPosition;
    }, [mousePosition, blobPosition]);

    const style = {
        left: `${blobPosition.x}px`,
        top: `${blobPosition.y}px`,
        transform: 'translate(-200, -200%)'
    };

    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.clientX + window.pageXOffset - (blobRef.current.offsetWidth / 2.5),
            y: event.pageY - 120
        });
    };
    const handleScroll = () => {        
        setMousePosition(prevPos => ({
            x: prevPos.x,
            y: prevPos.y + (pageYOffset - mousePositionRef.current.y) + 200
        }));
    };
    
    useEffect(() => {
        const animate = () => {
            const nextX = lerp(blobPositionRef.current.x, mousePositionRef.current.x, 0.015);
            const nextY = lerp(blobPositionRef.current.y, mousePositionRef.current.y, 0.015);
            const dist = distance(nextX, nextY, mousePositionRef.current.x - 0, mousePositionRef.current.y - 0);
            if (dist < 1.25) {
                setBlobPosition({
                    x: mousePositionRef.current.x - (blobRef.current.offsetWidth),
                    y: mousePositionRef.current.y
                });
            } else if (Math.abs(nextX - blobPositionRef.current.x) > 1 || Math.abs(nextY - blobPositionRef.current.y) > 1) {
                setBlobPosition({
                    x: nextX,
                    y: nextY
                });
            }

            requestAnimationFrame(animate);
        };
        
        animate();
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll)

        };
    }, []);

    return (
        <>
        <div 
            ref={blobRef}
            style={style}
            className='pointer-events-none opacity-40 sm:w-[150px] sm:h-[150px] xl:w-[700px] xl:h-[700px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-purple-400 to-blue-600 absolute rounded-full animate-rotate360 blur-3xl'
        />
                <div className='h-[100%] w-[100%] z-2 backdrop-blur-3xl'></div>

        </>
    );
}

export default MouseFollower;