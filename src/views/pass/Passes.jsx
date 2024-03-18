import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [state, setstate] = useState(0);

    useEffect(() => {
        // Effect
    }, []);

    return (
        <div>
           Passes
        </div>
    );
}

export default MyComponent;