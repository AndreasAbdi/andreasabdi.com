import React, { useState } from 'react';
import Chat from './chat';
import SideBar from './side_bar';

const BodyContainer = () => {
  
    return (
      <div className="bodyContainer">
          <Chat />
          <SideBar />
      </div> 
    );
    
}
// ========================================
  
export default BodyContainer;