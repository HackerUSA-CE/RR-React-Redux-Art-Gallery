import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { clearData, fetchData, incrementId, decrementId, inputId } from './features/dataSlice';
import FetchButton from './components/FetchButton';
import ClearButton from './components/ClearButton';
import { useEffect } from 'react';

function App(props) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    const renderImg = () => {
        if (data.apiData) {
            return <img style={{ width: '100vw' }} src={data.apiData.primaryImage} alt={data.apiData.title} />;
        } else {
            return <p>image here</p>;
        }
    };

    useEffect(() => {
        dispatch(fetchData());
    }, [props.objectId, dispatch]);

    return (
        <div className="App">
            <div>
                <FetchButton />
                <ClearButton />
                <button onClick={() => dispatch(incrementId())}>Next</button>
                <button onClick={() => dispatch(decrementId())}>Back</button>
            </div>
            <input
                value={data.objectId}
                onChange={(e) => {
                    dispatch(inputId(Number(e.target.value)));
                }}
            />
            <div>
                {data.objectId}
                {renderImg()}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({ objectId: state.data.objectId });

export default connect(mapStateToProps)(App);
