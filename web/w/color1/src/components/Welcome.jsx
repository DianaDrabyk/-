import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="pt-5 p-4">
                <div className="row pt-5 pb-3">
                    <div className="col-12">
                        Вітаю,
                        оберіть колір, що асоціюється з емоцією
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <button className="w-100" onClick={() => { navigate('/question1'); }}>Далі</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Welcome;