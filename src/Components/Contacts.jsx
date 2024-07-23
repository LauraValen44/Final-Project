import TittlePage from "./TittlePage";
import { useSelector } from "react-redux";
import { contactsActions } from "../Redux/contactsSlice";
import ListContacts from "./User/ListContacts";

const Contacts = () => {
  const { contacts } = useSelector(contactsActions);

  return (
    <>
      <TittlePage messages="Contacts List" />
      <ListContacts data={contacts} flag={true}></ListContacts>
    </>
  );
};

export default Contacts;
