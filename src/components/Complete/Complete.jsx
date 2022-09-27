import { useSelector, useDispatch } from 'react-redux';
// history allows us to navigate to a different page
import { useHistory } from 'react-router-dom';

const Complete = () =>{
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({ type: 'CLEAR_ALL'});
        history.push('/');
    }
    return (
        <>
            <h1>Feedback Submitted Successfully!</h1>
            <button onClick={handleChange}>Leave New Feedback</button>
        </>
    )
}

export default Complete;