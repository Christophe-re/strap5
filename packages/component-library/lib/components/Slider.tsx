import { SharedSliderComponent } from "../types/types.gen";

const SliderComp = ( props : SharedSliderComponent) => {
  return (
    <div>
      <span>Slider</span>
      {props.files?.map((file, index) => (
        <img key={index} src={file?.url} />
      ))}
    </div>
  );
};

export default SliderComp;
