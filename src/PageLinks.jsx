import PageLink from "./PageLink";
import { pageLinks } from "./data";

// eslint-disable-next-line react/prop-types
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link, id) => {
        return (
          <PageLink key={id} link={link} itemClass={itemClass} />
          // <li key={link.id}>
          //   <a href={link.href} className={itemClass}>
          //     {link.text}
          //   </a>
          // </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
