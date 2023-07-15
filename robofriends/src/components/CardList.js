import React from 'react';
import Card from './Card';
// import {robots} from './robots';

const CardList = ({robots}) => {
    // if(true){
    //     throw new Error('noo');
    // }
    
    
    return (
        <div className='tc'>
            {
                robots.map((robot,i) => {
                    return (
                        <Card 
                        key={robots[i].id} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        />
                    );
                })
            }
        </div>    
    );
}

export default CardList;