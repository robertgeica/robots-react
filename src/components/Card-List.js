import React from 'react';
import Card from './Card';
import '../styles/card-list.css';


const CardList = ({robots}) => (
    <div className="card-list">

        {robots.map(robot => (

            <Card
                key={robot.id}
                id={robot.id}
                name={robot.name}
                email={robot.email}
                website={robot.website}
            />

        ))}

    </div>
);

export default CardList;