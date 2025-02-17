import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../Teacher module/UIELEMENTS/Avatar";
import Card from "../../Teacher module/UIELEMENTS/Card";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/dash`}>  {/* Dynamic Link */}
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <p>{props.department}</p>
            <h3>{props.subject}</h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
