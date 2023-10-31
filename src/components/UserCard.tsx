import { Link } from "react-router-dom";
import { UserType } from "../repo/users.types";
import "./UserCard.scss";

// non la metto nel file con tutte le altre tipizzazioni, perchè tanto la uso solo qui
type UserCardType = {
  user: UserType;
  detailPath: string;
};

// componente che deve renderizzare una card dato uno specifico utente
// lettera maiuscola perchè componente custom
const UserCard = ({ user, detailPath }: UserCardType) => {
  // destrutturazione
  const { first_name, last_name, email, avatar } = user;

  return (
    <div className="user-card flex flex-col justify-center items-center">
      <img src={avatar} />
      <h2>
        {first_name} {last_name}
      </h2>
      <h3>
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <div>
        <Link to={detailPath}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
