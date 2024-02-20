/* eslint-disable react-refresh/only-export-components */

import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';

import "./User.scss"

function User() {
  const val = 19;
  return (
    <>
      <div>

        <h1 className='user-heading'>
          my coding profile
        </h1>

        <div className='app_User-container'>
          <div className='box'>

            <div className='User_heading'>
              <div>LeetCode:</div>
              <h2>Vivek_Kumar2909</h2>
            </div>
            <div className='solved'>
              Solved
            </div>

            <div className='stat_container'>
              <div className="box1" style={{ "--i": `${val}%`, "--clr": "#fd0a54" }}>
                <div className="circle">
                  <h2>19 <small>%</small></h2>
                </div>
              </div>
              <div className="linear_box">
                <div className="gap_box">
                  <div className="questions">Easy: 250/900</div>
                  <div className="line">
                    <div className="linear_progress" style={{ width: `${val}%` }}>
                    </div>
                  </div>
                  <div className="questions">Easy: 250/900</div>
                  <div className="line">
                    <div className="linear_progress" style={{ width: `${val}%` }}>
                    </div>
                  </div>
                  <div className="questions">Easy: 250/900</div>
                  <div className="line">
                    <div className="linear_progress" style={{ width: `${val}%` }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='User_heading'>
              <div>LeetCode:</div>
              <h2>Vivek_Kumar2909</h2>
            </div>

            <div className='box2'>
              <div className='ranking'>
                <div>
                  Ranked
                </div>
                <div>
                  Ranked
                </div>
              </div>
              <div className='ranking'>
                <div>
                  Ranked
                </div>
                <div>
                  Ranked
                </div>
              </div>
              <div className='ranking'>
                <div>
                  Ranked
                </div>
                <div>
                  Ranked
                </div>
              </div>
              <div className='ranking'>
                <div>
                  Ranked
                </div>
                <div>
                  Ranked
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(User, 'app__User'),
  'coding',
  'app__primarybg',
);
