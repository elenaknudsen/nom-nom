import React from 'react';
import ReactDOM from 'react-dom';

import BackgroundPage from './BackgroundPage';

//colors
let NAVY_BLUE = '#273140';
let CAROLINA_BLUE = '#4B9CD3';
let GREENISH = '#2B4F82';
let GOLDENISH = '#F4AC45';
let colors = {NAVY_BLUE, CAROLINA_BLUE, GREENISH, GOLDENISH}

ReactDOM.render(
   <div id='root' style={{ backgroundColor: NAVY_BLUE, height: '100%', position: 'absolute', top: '0px', left: '0px', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <BackgroundPage colors={colors}/>
   </div>,
  document.getElementById('root')
);

