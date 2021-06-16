import React from 'react';

import './renderBlock.css';

const RenderBlock = ({top, bottom}) => {
  return (
    <>
      <div className = 'blockElement'>
        {top}
      </div>
      <div className = 'blockElement'>
        {bottom}
      </div>
      
    </>
  )
}

export default RenderBlock;