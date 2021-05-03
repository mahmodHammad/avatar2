import React from 'react';
import {ReactComponent as ReactLogo} from "./chevron-right-solid.svg";

const Toggle = ({color , width, height}) => {
  return (
      <div  className="toggleLogo" >
          <ReactLogo color={color} width={width} height={height} />

      </div>
  );
}
export default Toggle;