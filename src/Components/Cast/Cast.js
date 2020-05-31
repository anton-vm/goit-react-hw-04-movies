import React, { useState, useEffect } from 'react'
import {getCredits, profileUrl} from '../../helpers/index'

const Cast = (props) => {

    const [cast, setCast] = useState([])

    const movieId = props.match.params.movieId

    useEffect(() => {
        getCredits(movieId).then(res => setCast(res.data.cast))
    }, [])



    return (
        <ul>
            {cast.map((el) => {
                return (
                <li key={el.id}>
                    {el.profile_path &&
                    <img src={`${profileUrl}${el.profile_path}`} alt={el.name}/> }
                    <h3>{el.name}</h3> 
                    <p>Characrer: {el.character}</p> 
                 </li>)
            })}
        </ul>

    )
}

export default Cast
