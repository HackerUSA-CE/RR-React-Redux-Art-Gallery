import { useDispatch } from 'react-redux';
import { decrementId } from '../features/dataSlice';
function Back() {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(decrementId())}>Back</button>;
}
export default Back;
