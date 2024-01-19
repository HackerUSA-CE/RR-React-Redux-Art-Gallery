import { fetchData } from '../features/dataSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function FetchButton(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [props.objectId, dispatch]);

    return <button onClick={() => dispatch(fetchData())}>Thunk!</button>;
}

export default FetchButton;
