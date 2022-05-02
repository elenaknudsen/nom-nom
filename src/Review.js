import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';
import NewReview, { ReviewBox } from './NewReview';
import { firestore } from "firebase/firestore";
import { getDatabase, ref, get, update, child, push, onValue } from "firebase/database"; import firebase from './firebase/index';

class Review extends React.Component {
    render() {
        // TODO: I am adding the review child compoent in here?
        const { reviewLine } = this.props
        return (
            <ul className="reviews-list">
                {reviewLine.map((val) => {
                    return <li className="each-review" key={val.reviewID}>{val.stars}{val.text}</li>
                })
                }
            </ul>
        )
    };
}
// This function should get the reviews for a certain database
export const getReviews = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `reviews/`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

}
// This function writes a new review into the database it's simple for now
export function writeReview(restaurant, id, content, stars) {
    const db = getDatabase();
    const reviewData = {
        restaurant: restaurant,
        reviewID: id,
        text: content,
        stars: stars,
    };
    const sendReview = () => {
        firebase.db.collection('review').add({ restaurant: reviewData.restaurant, id: reviewData.id, content: reviewData.text, stars: reviewData.stars }).then(documentReference => {
            console.log('document reference id ', documentReference.id)
        }).catch(error => { console.log(error.message) })
    }
}


export default Review;