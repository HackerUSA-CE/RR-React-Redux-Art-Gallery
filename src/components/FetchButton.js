import { fetchData } from '../features/dataSlice';
import { useDispatch } from 'react-redux';

function FetchButton() {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(fetchData())}>Thunk!</button>;
}

export default FetchButton;
