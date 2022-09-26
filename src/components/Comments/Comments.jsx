import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Comments = () => {
    const history = useHistory();
    
    const comments = useSelector(store => store.comments); //getter
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // Pass data to our reducer
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value})
    }

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <h3>Comments</h3>
            <div>
                {/* getter and setter */}
                <input value={comments} onChange={handleChange}
                       className="input" type="text">

                </input>
                <button onClick={() => history.push('/review')} className="button">Next</button>
            </div>
        </>

    )
}

export default Comments;