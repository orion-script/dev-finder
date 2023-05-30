import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingAnimation: React.FC= () => {
    return ( 
        <TypeAnimation
            style={{
                fontSize: '.75rem',
            }}

            sequence={[
                1500,
                'Designed By HadesCodes',
                1000,
                '',
            ]}
            repeat={Infinity}
        />
    );
}
 
export default TypingAnimation;
