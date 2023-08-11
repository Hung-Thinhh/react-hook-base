
import {useNavigate} from 'react-router-dom';
const NotFoud = () => {

    let navigate = useNavigate ()
    const handleback =() =>{
        navigate("/");
    }

    return (
        <div >
            <h1>ERROR 404</h1>
            <p>Trang này không tồn tại!</p>
            <button onClick={handleback}>Go home</button>
        </div>
    )
}

export default NotFoud;