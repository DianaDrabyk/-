import { useNavigate } from 'react-router-dom';

const Finish = () => {
    const navigate = useNavigate();
    const next = () => {
        const to = '/';
        navigate(to);
    }

    return (
        <>
            <div className="pt-5 p-4">
                <div className="row pt-5 pb-3">
                    <div className="col-12">
                        Дякую що поділились вашими кольорами :3
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-12">
                        <button
                            className="w-100"
                            onClick={() => { next(); }}>
                            На початок
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Finish;