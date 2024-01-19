import './App.css';
import { connect } from 'react-redux';
import FetchButton from './components/FetchButton';
import ClearButton from './components/ClearButton';
import IncrementButton from './components/IncrementButton';
import Back from './components/Back';
import InputBar from './features/InputBar';
import Image from './features/Image';

function App(props) {
    return (
        <div className="App">
            <div>
                <FetchButton />
                <ClearButton />
                <IncrementButton />
                <Back />
            </div>
            <InputBar />
            <div>
                <Image />
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({ objectId: state.data.objectId });

export default connect(mapStateToProps)(App);
