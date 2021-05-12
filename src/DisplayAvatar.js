import React ,{useState}from "react";
import { Stage, Layer, Image ,Rect} from 'react-konva';
import useImage from 'use-image';
import { makeStyles } from '@material-ui/core/styles';


const ItemImage = ({x,y,imageSource}) => {
    const [image] = useImage(imageSource);
    return <Image  image={image} y={y}  />;
};

function Render({imageSources,bg,stageRef,height,divRef}) {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        canv: {
          height:height
        },
      }));
      
    const classes = useStyles();
  return (
      <div  className={classes.canv} ref={divRef} >
    <Stage className={classes.canv}  ref={stageRef} height={1000} width={1000}  >
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