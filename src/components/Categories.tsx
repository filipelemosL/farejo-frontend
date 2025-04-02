import React from 'react';
import Slider from 'react-slick';
import './Categories.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Categories: React.FC = () => {


  return (
    <div className="container dbg">
      <div className='popular-categories dbg'>
        <div className='popular-category dbg'>
          <div className='pc-box-text dbg'>
            <p className='pc-text dbg'>Eletrônicos</p>
          </div>
          <div className='pc-box-thumb dbg'>
            {/* <img className='pc-thumb dbg' src="/assets/electronics.png" alt="category" /> */}
          </div>
        </div>
        <div className='popular-category dbg'>
          <div className='pc-box-text dbg'>
            <p className='pc-text dbg'>Moda</p>
          </div>
          <div className='pc-box-thumb dbg'>
            {/* <img className='pc-thumb dbg' src="/assets/fashion.png" alt="category" /> */}
          </div>
        </div>
      </div>
      <div className='categories dbg'>
        <div className='category dbg'>
          {/* <img className='c-thumb dbg' src="https://cdn-icons-png.flaticon.com/512/1040/1040204.png" alt="category" /> */}
          <p className='c-text dbg'>Moda</p>
        </div>
        <div className='category dbg'>
          {/* <img className='c-thumb dbg' src="https://cdn-icons-png.flaticon.com/512/1040/1040204.png" alt="category" /> */}
          <p className='c-text dbg'>Casa</p>
        </div>
        <div className='category dbg'>
          {/* <img className='c-thumb dbg' src="https://cdn-icons-png.flaticon.com/512/1040/1040204.png" alt="category" /> */}
          <p className='c-text dbg'>Ver tudo</p>
        </div>
      </div>


    </div>
  );
};

export default Categories;