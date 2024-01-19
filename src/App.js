import './App.css';
import { connect } from 'react-redux';
import Thunk from './ActionButtons/Thunk';
import Clear from './ActionButtons/Clear';
import Next from './ActionButtons/Next';
import Back from './ActionButtons/Back';
import InputBar from './Features/InputBar';
import Image from './Features/Image';

function App() {
    return (
        <div className="App">
            <div>
                <Back />
                <Thunk />
                <Next />
            </div>
            <div>
                <InputBar />
                <Clear />
            </div>
            <div>
                <Image />
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({ objectId: state.data.objectId });

export default connect(mapStateToProps)(App);
