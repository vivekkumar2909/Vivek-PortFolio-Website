/* eslint-disable react-refresh/only-export-components */

import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';

import "./User.scss"

function User() {
  // const val = 19;
  return (
    <>
      <div>

        <h1 className='user-heading'>
          my coding profile
        </h1>

        <div className='app_User-container'>
          <div className='box'>
            When you add an image to a page using the HTML  element, the image will maintain the size and aspect ratio of the image file, or that of any HTML width or height attributes. Sometimes you would like the image to completely fill the box that you have placed it in. In that case you first need to decide what happens if the image is the wrong aspect ratio for the container.

            The image should completely fill the box, retaining aspect ratio, and cropping any excess on the side that is too big to fit.
            The image should fit inside the box, with the background showing through as bars on the too-small side.
            The image should fill the box and stretch, which may mean it displays at the wrong aspect ratio.
            The object-fit property makes each of these approaches possible. In the example below you can see how different values of object-fit work when using the same image. Select the approach that works best for your design.
          </div>
          <div className='box'>
            When you add an image to a page using the HTML  element, the image will maintain the size and aspect ratio of the image file, or that of any HTML width or height attributes. Sometimes you would like the image to completely fill the box that you have placed it in. In that case you first need to decide what happens if the image is the wrong aspect ratio for the container.

            The image should completely fill the box, retaining aspect ratio, and cropping any excess on the side that is too big to fit.
            The image should fit inside the box, with the background showing through as bars on the too-small side.
            The image should fill the box and stretch, which may mean it displays at the wrong aspect ratio.
            The object-fit property makes each of these approaches possible. In the example below you can see how different values of object-fit work when using the same image. Select the approach that works best for your design.
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
