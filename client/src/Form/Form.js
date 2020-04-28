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


    return(
        <div>
            Ello Poppet
        </div>
    )
}

export default Form;

