import { useDispatch } from 'react-redux';
import { clearData } from '../Features/dataSlice';

function Clear() {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(clearData())}>Clear</button>;
}

export default Clear;
