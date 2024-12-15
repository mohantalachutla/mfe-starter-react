import { Blockquote, Kbd } from 'flowbite-react';

const Text = ({ variant, children, ...props }) => {
  switch (variant) {
    case 'h1':
      return <h1 {...props}>{children}</h1>;
    case 'h2':
      return <h2 {...props}>{children}</h2>;
    case 'h3':
      return <h3 {...props}>{children}</h3>;
    case 'h4':
      return <h4 {...props}>{children}</h4>;
    case 'h5':
      return <h5 {...props}>{children}</h5>;
    case 'h6':
      return <h6 {...props}>{children}</h6>;
    case 'kbd':
      return <Kbd {...props}>{children}</Kbd>;
    case 'code':
      return <code {...props}>{children}</code>;
    case 'pre':
      return <pre {...props}>{children}</pre>;
    case 'li':
      return <li {...props}>{children}</li>;
    case 'ul':
      return <ul {...props}>{children}</ul>;
    case 'ol':
      return <ol {...props}>{children}</ol>;
    case 'i':
      return <i {...props}>{children}</i>;
    case 'b':
      return <b {...props}>{children}</b>;
    case 'strong':
      return <strong {...props}>{children}</strong>;
    case 'em':
      return <em {...props}>{children}</em>;
    case 'del':
      return <del {...props}>{children}</del>;
    case 'ins':
      return <ins {...props}>{children}</ins>;
    case 'mark':
      return <mark {...props}>{children}</mark>;
    case 's':
      return <s {...props}>{children}</s>;
    case 'u':
      return <u {...props}>{children}</u>;
    case 'sub':
      return <sub {...props}>{children}</sub>;
    case 'sup':
      return <sup {...props}>{children}</sup>;
    case 'small':
      return <small {...props}>{children}</small>;
    case 'hr':
      return <hr />;
    case 'br':
      return <br />;
    case 'blockquote':
      return <Blockquote {...props}>{children}</Blockquote>;
    case 'p':
      return <p {...props}>{children}</p>;
    case 'span':
      return <span {...props}>{children}</span>;
    case 'div':
      return <div {...props}>{children}</div>;
    default:
      return <div {...props}>{children}</div>;
  }
};

export default Text;
