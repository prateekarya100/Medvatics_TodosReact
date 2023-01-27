import React from 'react'
// import { useState } from 'react'
// import data from './Data'

// console.log(data)

const Card = (props) => {
  return (
    <>
        <div className="cards">
            <div className="card">
                <img src={props.seriesPoster} alt="series_poster" className="card__img"/>
                <div className="card__info">
                    <div className="card__category">{props.seriesInfo}
                        <h3 className="card__title">{props.seriesName}
                            
                        </h3>
                        <a href="https://www.netflix.com/in/title/80002479" target='__blank'>
                            <button className='watchNowBtn'>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
