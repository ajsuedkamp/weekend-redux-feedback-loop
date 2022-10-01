import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Understanding = () => {
    // again use history to navigate to support page
    const history = useHistory();


    const understanding = useSelector(store => store.understanding); // getter
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // Pass data to reducer 
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value})
    }

    return(
        <>
            <h1>How well are you understanding the content?</h1>
            <h3>Understanding?</h3>
            <form>
                <div>
                    {/* getter and setter */}
                    <input value={understanding} onChange={handleChange}
                        className="input" type="number" min="1" max="5"
                    >
                    </input>
                    <button onClick={() => history.push('/support')} className="button">Next</button>
                </div>
            </form>
        </>

    )
}

export default Understanding;