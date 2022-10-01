import { useSelector, useDispatch } from 'react-redux';
// history allows us to navigate to a different page
import { useHistory } from 'react-router-dom';


const Feeling = () => {
    const history = useHistory();

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
            <form>
                <div>
                    {/* getter and setter */}
                    <input value={feeling} onChange={handleChange}
                        className="input" type="number" min="1" max="5"
                    >
                    </input>
                    <button onClick={() => history.push('/understanding')} className="button">Next</button>
                </div>
            </form>
        </>

    )
}

export default Feeling;