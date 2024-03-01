// import { Link } from "react-router-dom";
// import "./Menu.scss";

// import { Link } from "react-router-dom";
import { menu } from "../../component/dashboard/data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <a href={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </a >
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
