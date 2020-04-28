import React, { useState } from 'react';

const initialForm = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: []
}

const Form = () => {
    const [film, setFilm] = useState(initialForm);



const handleSubmit = event => {
    event.preventDefault();
}

    return(
        <div>
            <h2>The form</h2>
            <form onSubmit={handleSubmit}>
                
                <input type='number'/>
                <div />
                <input type='text'/>
                <div />
                <input type='string'/>
                <div />
                <input type='number'/>
                <div />
                <input type='string'/>
                <button>Add Film</button>
            </form>
        </div>
    )
}

export default Form;

