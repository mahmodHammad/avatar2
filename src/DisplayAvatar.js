import React ,{useState}from "react";
import { Stage, Layer, Image ,Rect} from 'react-konva';
import useImage from 'use-image';

const ItemImage = ({x,y,imageSource}) => {
    const [image] = useImage(imageSource);
    return <Image  image={image} y={y}  />;
};

function Render({imageSources,bg,stageRef,height}) {
  

  return (
      <div ref={stageRef}>
    <Stage height={height} width={1000}  >
    <Layer>
    <Rect
      x={0}
      y={0}
      width={1000}
      height={1000}
      fillLinearGradientStartPointX={1000}
      fillLinearGradientStartPointY={0}
      fillLinearGradientEndPointX={0}
      fillLinearGradientEndPointY={1000}
      fillLinearGradientColorStops={bg}
    />
    {imageSources.map(img=><ItemImage imageSource ={img}  />)}
    </Layer>
  </Stage>
  </div>
  );
}

export default Render;