import { clearData } from '../features/dataSlice';
import { useDispatch } from 'react-redux';

function ClearButton() {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(clearData())}>Clear</button>;
}

export default ClearButton;
