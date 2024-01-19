import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../Features/dataSlice';

function Thunk(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [props.objectId, dispatch]);

    return <button onClick={() => dispatch(fetchData())}>Render</button>;
}

export default Thunk;
