import { toggle } from "../Redux/contactsSlice";
import Card from "./Card";
import { useDispatch } from "react-redux";

const ListFavorites = ({ favorites }) => {
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
      {(favorites || []).map((favorite) => (
        <Card key={favorite.id} contact={favorite}>
          <button
            onClick={() => dispatch(toggle(favorite.id))}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19.5 12.572l-.5 .428m-6 6l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
              <path d="M22 22l-5 -5"></path>
              <path d="M17 22l5 -5"></path>
            </svg>
          </button>
        </Card>
      ))}
    </div>
  );
};

export default ListFavorites;
