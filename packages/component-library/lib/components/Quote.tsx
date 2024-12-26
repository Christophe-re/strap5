import { SharedQuoteComponent } from "../types/types.gen";

const QuoteComp = ( props : SharedQuoteComponent) => {
  return (
    <div>
      <span>SharedQuote</span>
      <span>{props.title}</span>
      <span>{props.body}</span>
    </div>
  );
};

export default QuoteComp;
