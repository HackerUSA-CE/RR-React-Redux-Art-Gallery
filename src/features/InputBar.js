import { inputId } from './dataSlice';
import { useDispatch, useSelector } from 'react-redux';

function InputBar() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    return (
        <input
            value={data.objectId}
            onChange={(e) => {
                dispatch(inputId(Number(e.target.value)));
            }}
        />
    );
}

export default InputBar;
