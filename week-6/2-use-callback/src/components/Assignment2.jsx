import React, { useState, useCallback } from 'react';

// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of 
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.

export function Assignment2() {
    const [inputText, setInputText] = useState('');

    // Your code starts here
    // The problem statement is that these functions should only be re-created once when the component re-renders 


    const showAlert = useCallback(function () {
        // this function needs to be re-created when the input changes so that the input that binds with this function get also updated when inputText changes => using useCallback with dependency_array
        alert(inputText)
    }, [inputText]);

    const updateSetInputText = useCallback(function(event) {
        // this is created once, will not be re-created now (does not matter how many times component get re-render)
        setInputText(event.target.value);
    }, []);
    // Your code ends here

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={updateSetInputText}
                placeholder="Enter some text"
            />
            <Alert showAlert={showAlert} />
        </div>
    );
};

function Alert({showAlert}) {
    return <button onClick={showAlert}>Show Alert</button>
}

