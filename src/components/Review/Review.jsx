import { useSelector, useDispatch } from 'react-redux';
// history allows us to navigate to a different page
import { useHistory } from 'react-router-dom';

const Review = () => {

    const history = useHistory(); // useHistory
    
    const feeling = useSelector(store => store.feeling); // getter
    const understanding = useSelector(store => store.understanding); // getter
    const support = useSelector(store => store.support); // getter
    const comments = useSelector(store => store.comments); // getter

    const dispatch = useDispatch();
    return (
        <>
            <h1>Review Your Feedback</h1>
            <div>
                <div>Feelings: {feeling}</div>
                <div>Understanding: {understanding}</div>
                <div>Support: {support}</div>
                <div>Comments:{comments}</div>

                <button className="button">Submit</button>
            </div>
        </>

    )

}


export default Review;