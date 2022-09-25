import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';





const Feeling = () => {
    const feeling = useSelector(store => store.feeling); // getter
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // Pass data to reducer
        dispatch({ type: 'SET_FEELING', payload: event.target.value})
    }
    return (
        <>
            <h1>How are you feeling today?</h1>
            <h3>Feeling?</h3>
            <div>
                {/* getter and setter */}
                <input value={feeling} onChange={handleChange}
                       className="input" type="number" min="1" max="5"
                >
                </input>
                <button className="button">Next</button>
            </div>
        </>

    )
}

export default Feeling;