import React from 'react';

import SignUpForm from './SignUpForm';

const Welcome = () => {
    return (
        <div className="welcome">
            <h1>Let your friends know exactly where they stand.</h1>
            <SignUpForm />
        </div>
    ); 
}

export default Welcome;