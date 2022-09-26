import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Support = () => {
    // use history to navigate to comments page
    const history = useHistory();


    const support = useSelector(store => store.support); //getter
    const dispatch = useDispatch();

    const handleChange = (event) => {
        //Pass data to reducer
        dispatch({ type: 'SET_SUPPORT' , payload: event.target.value})
    }

    return (
        <>
            <h1>How well are you being supported?</h1>
            <h3>Support?</h3>
            <div>
                {/* getter and setter */}
                <input value={support} onChange={handleChange}
                       className="input" type="number" min="1" max="5"
                >
                </input>
                <button onClick={() => history.push('/comments')} className="button">Next</button>
            </div>
        </>
    )
}

export default Support;