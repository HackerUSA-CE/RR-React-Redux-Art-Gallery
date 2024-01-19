import { useDispatch } from 'react-redux';
import { incrementId } from '../Features/dataSlice';
function Next() {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(incrementId())}>Next</button>;
}
export default Next;
