import React from 'react';

const Card = () => {
    return (
        <div className='bg-light-green dib br3 pa3 grow'>
            <img src="https://robohash.org/test?size=200x200" alt="ProfilePhoto" />
            <div>
                <h2>Noufan Elachola</h2>
                <p>noufansadiqelachola@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;