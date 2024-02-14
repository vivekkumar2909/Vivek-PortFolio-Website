import './Modal.scss';
import Aisass from '../../assets/Ai-sass.png';

export default function Modal() {
    return (
        <div>
            <div className='modal'>
                <div className='Heading'>
                    <h1 >
                        Ai-SAAS
                    </h1>
                </div>
                <div >
                    <hr className='line' />
                </div>
                <div className='Demo'>
                    <div className='Demo-live'>
                        LIVE DEMO
                    </div>
                    <div className='Demo-live'>
                        SOURCE CODE
                    </div>
                </div>


                <div className='container'>
                    <div className='image-con'>
                        <img src={Aisass} alt='pro' />
                    </div>
                    <div className='image-con'>
                        Decsription
                    </div>
                </div>

            </div>
        </div>
    )
}
