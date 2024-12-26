import {  SharedSeoComponent } from "../types/types.gen";

const SeoComp = ( props : SharedSeoComponent) => {
  return (
    <div>
      <span>Seo</span>
      <span>{props.metaDescription}</span>
      <span>{props.metaTitle}</span>
    </div>
  );
};

export default SeoComp;
