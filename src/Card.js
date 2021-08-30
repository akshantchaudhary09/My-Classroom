import React from 'react'
import './Card.css';
import Avatar from '@material-ui/core/Avatar';

function Card({bgColor}) {
    return (
        <div className="card">
            <div className={["card__header", bgColor].join(' ')} >
                <a href="#" className="card__header__title">Class Title</a>
                <p className="card__header__name">Instructor name</p>
                {/* <img src="#" alt="Instructor image" /> */}
            </div>
            <div className="card__avatar">
                <Avatar style={{ height: '80px', width: '80px' }}></Avatar>
            </div>
            <div className="card__body">
                {/* <p>Body</p> */}
            </div>
        </div>
    )
}

export default Card
