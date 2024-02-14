/* eslint-disable react-refresh/only-export-components */

import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';

import "./User.scss"

function User() {
  return (
    <>
        <div className='app_User-container'>
            <div>
                HelloThe World Wide Web—usually called the Web for short—is a collection of different websites you can access through the Internet. A website is made up of related text, images, and other resources. Websites can resemble other forms of media—like newspaper articles or television programs—or they can be interactive in a way that's unique to computers.

The purpose of a website can be almost anything: a news platform, an advertisement, an online library, a forum for sharing images, or an educational site like us!
            </div>
            <div>
                HelloThe World Wide Web—usually called the Web for short—is a collection of different websites you can access through the Internet. A website is made up of related text, images, and other resources. Websites can resemble other forms of media—like newspaper articles or television programs—or they can be interactive in a way that's unique to computers.

The purpose of a website can be almost anything: a news platform, an advertisement, an online library, a forum for sharing images, or an educational site like us!
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
