import React, {useState, useEffect} from 'react'
import {getReviews} from '../../helpers/index'



const Review = (props) => {

    const [review, setReview] = useState([]);
    const [error, setError] =useState(false);

    const movieId = props.match.params.movieId


    useEffect(() => {
        getReviews(movieId).then(res => setReview(res.data.results))
        .catch(error => setError(true))
    }, [])

    
    return (
        <div>
            {review.length===0 && <h3>There is no review</h3>}
            {review.length>0 &&
            <ul>
            {review.map((el) => {
                return (
                    <li key={el.id}>
                    <h4>{el.author}</h4>
                <p>{el.content}</p>
                </li>)
                
            })}  
            </ul>          
            }
        </div>
    )
}

export default Review
