import UserCard from "../components/UserCard";
import { useUsers } from "../hooks/useUsers";

const HomePage = () => {
  const { users, isLoading } = useUsers();

  if (isLoading) {
    // se isLoading è true, allora ritorna questo e bom, non fa anche il return dopo (fino a quando il valore di isLoading non diventa false)
    return <p>Loading data</p>;
  }

  return (
    <>
      <h1>Robot users</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {users.map((user, index) => {
          return (
            <UserCard key={index} user={user} detailPath={`/detail/${index}`} />
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
