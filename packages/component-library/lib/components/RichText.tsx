import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import type { BlocksContent } from "@strapi/blocks-react-renderer";
import { SharedRichTextComponent } from "../types/types.gen";

const RichTextComp = (props: SharedRichTextComponent) => {
  return (
    <BlocksRenderer
      content={props.body as unknown as BlocksContent}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => (
          <p className="text-neutral900 max-w-prose">{children}</p>
        ),
        // ...or point to a design system
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1>{children}</h1>;
            case 2:
              return <h2>{children}</h2>;
            case 3:
              return <h2>{children}</h2>;
            case 4:
              return <h4>{children}</h4>;
            case 5:
              return <h5>{children}</h5>;
            case 6:
              return <h6>{children}</h6>;
            default:
              return <h2>{children}</h2>;
          }
        },
        // For links, you may want to use the component from your router or framework
        link: ({ children, url }) => (
          <span>
            {" "}
            ceci est lien vers {url} -- {children}
          </span>
        ),
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
};

export default RichTextComp;
