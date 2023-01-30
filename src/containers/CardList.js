import React from 'react';
import Card from '../components/Card';

const CardList = ( {robots} ) => {
    return(
        <div
            style={{
                display: 'flex', 
                flexWrap:'wrap',
                padding: '0 16px',
            }}
        >
            {
                robots.map( (user,index) => {
                    return(
                        <Card 
                            key={index} 
                            id={robots[index].id} 
                            name={robots[index].name} 
                            email={robots[index].email}
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;