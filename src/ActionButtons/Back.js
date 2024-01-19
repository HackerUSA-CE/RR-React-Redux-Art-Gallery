import { useDispatch } from 'react-redux';
import { decrementId } from '../Features/dataSlice';
function Back() {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(decrementId())}>Back</button>;
}
export default Back;
