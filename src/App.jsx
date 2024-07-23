import { useState } from "react";
import { RegisterForm } from "./Components";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "./hooks";

const StyledNav = styled(Link)`
  &:hover {
    color: #c1d72f;
  }
`;

const App = () => {
  useUser();
  const [component, setComponent] = useState(false);

  const onButton = () => {
    setComponent((prevState) => !prevState);
  };

  return (
    <div>
      <header style={styles.header}>
        <img
          style={{ width: "150px", height: "100%", marginLeft: "1px" }}
          src="/img/globant.png"
          alt="Logo de globant"
        />
        <nav>
          <ul style={{ listStyle: "none" }}>
            <li>
              <StyledNav to={"/overview"}> Overview </StyledNav>
              <StyledNav to={"/contacts"}> Contacts </StyledNav>
              <StyledNav to={"/favorites"}> Favorites </StyledNav>
              <button onClick={onButton} style={styles.newButton}>
                {" "}
                + New{" "}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {component && <RegisterForm />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px ",
    backgroundColor: "#f0f0f0",
    boxShadow: "2px 1px 2px rgba(0, 0, 0, 0.5",
  },
  newButton: {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#b3d233",
    cursor: "pointer",
  },
};

export default App;
