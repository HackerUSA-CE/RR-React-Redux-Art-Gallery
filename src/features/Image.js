import { useSelector } from 'react-redux';

function Image() {
    const data = useSelector((state) => state.data);
    const renderImg = () => {
        if (data.apiData) {
            return <img style={{ width: '100vw' }} src={data.apiData.primaryImage} alt={data.apiData.title} />;
        } else {
            return <p>image here</p>;
        }
    };
    return (
        <div>
            {data.objectId}
            {renderImg()}
        </div>
    );
}

export default Image;
