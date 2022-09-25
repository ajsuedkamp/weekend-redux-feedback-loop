import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Understanding = () => {
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
            <div>
                {/* getter and setter */}
                <input value={understanding} onChange={handleChange}
                       className="input" type="number" min="1" max="5"
                >
                </input>
                <button className="button">Next</button>
            </div>
        </>

    )
}

export default Understanding;