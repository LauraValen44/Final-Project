import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { add } from "../../Redux/contactsSlice";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
  background-color: #ffffff;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 150px;
  background-color: #c1d72f;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const StyledcheckboxContainer = styled.div`
  margin: 10px 0;
`;
const StyledButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

  function clearForm() {
    setName("");
    setLastName("");
    setEmail("");
    setFavorite(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(
      add({
        id: crypto.randomUUID(),
        name,
        lastName,
        email,
        favorite,
        avatar: "img/default-user.jpg",
      })
    );

    clearForm();
  }

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="First name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <StyledInput
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />

        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <StyledcheckboxContainer>
          <label>
            <StyledInput
              type="checkbox"
              value={favorite}
              onChange={(event) => setFavorite(event.target.checked)}
            />
            Enable like favorite
          </label>
        </StyledcheckboxContainer>
        <StyledButton type="submit">SAVE</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default Form;
