import logo from './logo.svg';
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { HuePicker } from 'react-color';

function App() {
  const question = "Який колір?";
  const questions = ["Який колір?", "Як колір?", "Я колір?", "Колір?"];

  const [mycolor, setColor] = useState('fff');

  const handleChange = (color) => {
    setColor(color);
  }

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  const url = "http://192.168.31.192:5000/color1";

  const sendRequest = () => {
    axios.post(url, { color: mycolor.hex });
  }

  return (
    <>
      <div>
        <button style={{height: '100px', width: '100px'}} onClick={() => { sendRequest() }}>Click Me!</button>
        <div className='row mt-3'>
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
        <div className='row mb-2'>
          <div className='col-4'>
            <img src='ICU.gif'>

            </img>
          </div>
          <div className='col-4'>
            <img src='ICU.gif'>


            </img>
          </div>
          <div className='col-4'>
            <img src='ICU.gif'>

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
            <img src='ICU.gif'>

            </img>

          </div>
          <div className='col-4'>
            <p>
              Чи це було актуально?
            </p>
          </div>
        </div>
        <p>
          Чи це актуально?
        </p>
        <p>
          Чи це було актуально?
        </p>
        <img src='ICU.gif'>

        </img>
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
