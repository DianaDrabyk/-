import logo from './logo.svg';
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { HuePicker } from 'react-color';

function App() {
  const question = "Який колір?";
  const questions = ["Який колір?", "Як колір?", "Я колір?", "Колір?"];

  const [mycolor, setColor] = useState('ffff');

  const handleChange = (color) => {
    setColor(color);
  }

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  const url = "http://localhost:5000/color1";

  const sendRequest = () => {
    axios.post(url, { color: mycolor.hex });
  }

  return (
    <>
      <div>
        <button style={{height: '100px', width: '1360px'}} onClick={() => { sendRequest() }}>Click Me!</button>
        <div className='row mt-5'>
          <div className='col-4'>
            <p style={{ color: mycolor.hex }}>{question}</p>
          </div>
          <div className='col-4'>
            <p style={{ color: mycolor.hex }}>{mycolor.hex}</p>
          </div>
          <div className='col-4'>
            <HuePicker color={mycolor} onChangeComplete={handleChange} />
          </div>

        </div>
        <div className='row mb-1'>
          <div className='col-4'>
            <img src='1.png'>

            </img>
          </div>
        </div>

        <div className='row'>
          <div className='col-4'>
            <p>
              Чи це актуально?
        
            </p>
              

            

          </div>
          <div className='col-4'>
            <p>
              Що ви відчуваєте дивлячись на небо?
            </p>
          </div>
        </div>
        <p>
          Чи любили ви квіти?
        </p>
        <p>
          Чи сняться вам сни?
        </p>
        {/* <div className='col-6'>
          <p>

            {
              questions.map((que, i) =>
                <div className="row">
                  <div className='col-6'>{i + 1}.{que}</div>
                  <div className='col-6'><HuePicker /></div>

                </div>
              )
            }
          </p>
        </div> */}
      </div>

    </>
  );
}

export default App;
