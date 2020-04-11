import React from 'react';
import '../styles/card.css';


const Card = ({id, name, email, website}) => (
    <div className="card">
        <img alt="robot" src={`https://robohash.org/${id}`} />

        <h2> {name} </h2>
        <p> {email} </p>
        <p> {website} </p>

    </div>
)

export default Card;