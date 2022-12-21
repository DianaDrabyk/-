import axios from 'axios';
import { useState } from 'react';
import { HuePicker } from 'react-color';
import { useNavigate } from 'react-router-dom';

const QuestionTemplate = ({ question, to, from, endpoint }) => {
    const navigate = useNavigate();
    const url = "http://localhost:5000/";
    const [mycolor, setColor] = useState('ffff');

    const handleChange = (color) => {
        setColor(color);
    }

    const back = () => {
        navigate(from);
    }

    const next = () => {
        axios
            .post(url + endpoint, { color: mycolor.hex })
            .then(() => {
                navigate(to);
            });

        navigate(to);
    }

    return (
        <div className="col-6 offset-2">
            <div className="pt-4 pb-1 d-flex flex-row justify-content-between align-items-center">
                <div>{question}</div>
                <div style={{height: '12px', width: '12px', backgroundColor: mycolor?.hex}}></div>
            </div>
            <div className="row pb-3 justify-content-center" style={{ height: '400px' }} >
                <div className="col-12">
                    <HuePicker height='100%' width='100%' direction="vertical" color={mycolor} onChangeComplete={handleChange} />
                </div>
            </div>
            <div className="row justify-content-between pb-2">
                <div className="col-12">
                    <button
                        className="w-100"
                        onClick={() => { back(); }}>
                        Назад
                    </button>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-12">
                    <button
                        className="w-100"
                        disabled={!mycolor?.hex}
                        onClick={() => { next(); }}>
                        Далі
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuestionTemplate;