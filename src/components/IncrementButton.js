import { useDispatch } from 'react-redux';
import { incrementId } from '../features/dataSlice';
function IncrementButton() {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(incrementId())}>Next</button>;
}
export default IncrementButton;
