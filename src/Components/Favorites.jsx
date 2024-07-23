import TittlePage from "./TittlePage";
import ListFavorites from "./ListFavorites";
import { useSelector } from "react-redux";
import { favorites } from "../Redux/contactsSlice";

const Favorites = () => {
  const ContactsFavorites = useSelector(favorites);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "1000px",
          margin: "0 auto",
        }}
      >
        {" "}
        <TittlePage messages="Favorites" />
        <ListFavorites favorites={ContactsFavorites} />
      </div>
    </>
  );
};

export default Favorites;
