import { useSelector, useDispatch } from 'react-redux';
// history allows us to navigate to a different page
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Review = () => {

    const history = useHistory(); // useHistory
    
    const feeling = useSelector(store => store.feeling); // getter
    const understanding = useSelector(store => store.understanding); // getter
    const support = useSelector(store => store.support); // getter
    const comments = useSelector(store => store.comments); // getter

    const dispatch = useDispatch();

    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments
            }
        }).then((response) => {
            history.push('/complete');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!')
        })
    }
    return (
        <>
            <h1>Review Your Feedback</h1>
            <div>
                <div>Feelings: {feeling}</div>
                <div>Understanding: {understanding}</div>
                <div>Support: {support}</div>
                <div>Comments:{comments}</div>

                <button onClick={handleSubmit} className="button">Submit</button>
            </div>
        </>

    )

}


export default Review;