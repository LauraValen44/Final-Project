import { useSelector } from "react-redux";
import TittlePage from "./TittlePage";
import ListContacts from "./User/ListContacts";
import { contactsActions, favorites } from "../Redux/contactsSlice";
import ListFavorites from "./ListFavorites";

const Overview = () => {
  const { contacts: data } = useSelector(contactsActions);
  const getFavorites = useSelector(favorites);
  const favoritesShort = getFavorites.slice(0, 4);
  const contacts = data
    ?.filter((contact) => contact.favorite === false)
    .slice(0, 8);

  return (
    <>
      <TittlePage messages="Favorites" />
      <ListFavorites favorites={favoritesShort} />

      <TittlePage messages="Contact List" />
      <ListContacts data={contacts} flag={false}></ListContacts>
    </>
  );
};

export default Overview;
