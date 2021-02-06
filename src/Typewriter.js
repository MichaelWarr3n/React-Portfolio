import React, { useState, useEffect } from 'react';

function Typewriter({printMessage, initialPause}) {

    const [{content,carriage}, setContent] = useState({content:'',carriage:0});
    const [hasPaused, setHasPaused] = useState(false);
    const [cursor, setCursor] = useState('');
    const [hasPrinted, setHasPrinted] = useState(false)
             
    useEffect(() => {
      const pause = setTimeout(() => {
        clearTimeout(pause);
        setHasPaused(true);
        setCursor('|');
        if(carriage === printMessage.length){
          setCursor('');
          setHasPrinted(true);
          return;
        }
        clearTimeout(pause);
        const delay = setTimeout(() => {
          setContent({content:content+printMessage[carriage], carriage: carriage+1});
          clearTimeout(delay);
        }, 0|(Math.random()*50+50));
      }, hasPaused ? 0 : initialPause);
    }, [content]);

    let cursorClass = hasPaused && !hasPrinted ? 'cursor' : '';
        
    return <span>{content}<span style={{color: 'white'}} className={cursorClass}>{cursor}</span></span>
}

export default Typewriter;