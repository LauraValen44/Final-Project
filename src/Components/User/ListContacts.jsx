import { remove, toggle } from "../../Redux/contactsSlice";
import Card from "../Card";
import { useDispatch } from "react-redux";

const ListContacts = ({ data, flag }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "1000px",
        margin: "0 auto",
      }}
    >
      {(data || []).map((contact) => (
        <Card contact={contact} key={contact.id}>
          <button
            onClick={() => dispatch(toggle(contact.id))}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {contact.favorite ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c60c0c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-.5 .428m-6 6l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                <path d="M22 22l-5 -5" />
                <path d="M17 22l5 -5" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#b1d13d"
                className="icon icon-tabler icons-tabler-filled icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
              </svg>
            )}
          </button>
          {flag && (
            <button
              onClick={() => dispatch(remove(contact.id))}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#e21818"
                className="icon icon-tabler icons-tabler-filled icon-tabler-trash"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" />
                <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" />
              </svg>
            </button>
          )}
        </Card>
      ))}
    </div>
  );
};

export default ListContacts;
