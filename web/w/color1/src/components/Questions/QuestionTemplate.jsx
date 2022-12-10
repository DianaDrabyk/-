import axios from 'axios';
import { useState } from 'react';
import { HuePicker } from 'react-color';
import { useNavigate } from 'react-router-dom';

const QuestionTemplate = ({ question, to, from }) => {
    const navigate = useNavigate();
    const url = "http://localhost:5000/color1";
    const [mycolor, setColor] = useState('ffff');

    const handleChange = (color) => {
        setColor(color);
    }

    const sendRequest = () => {
        axios
            .post(url, { color: mycolor.hex })
            .then(() => {
                navigate('/question2');
            });
    }

    const back = () => {
        navigate(from);
    }

    const next = () => {
        navigate(to);
    }

    return (
        <div>
            <div className="row p-4 justify-content-center">
                <p className="text-center" style={{ color: mycolor.hex }}>{question}</p>
            </div>
            <div className="row pb-4 justify-content-center">
                <HuePicker color={mycolor} onChangeComplete={handleChange} />
            </div>
            <div className="row justify-content-between">
                <div className="col-5">
                    <button
                        className="w-100"
                        onClick={() => { back(); }}>
                        Назад
                    </button>
                </div>
                <div className="col-5">
                    <button
                        className="w-100"
                        disabled={!mycolor?.hex}
                        style={{ background: mycolor.hex }}
                        onClick={() => { next(); }}>
                        Далі
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuestionTemplate;