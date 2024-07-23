const Card = ({ contact, children }) => {
  const { email, first_name, last_name, avatar, favorite } = contact;
  return (
    <div
      style={{
        border: "transparent",
        boxShadow: "0px 0px 17px 0px #d1d5db",
        borderRadius: "5px",
        borderStyle: "solid",
        margin: 15,
        display: "flex",
        flexDirection: "column",
        width: "215px",
        height: "220px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            width: "90px",
            height: "90px",
            objectFit: "cover",
            border: favorite ? "3px solid #b1d13d" : "",
            boxSizing: "border-box",
          }}
          src={avatar}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        {first_name} {last_name}
      </div>
      <div style={{ textAlign: "center" }}> {email}</div>
      <div style={{ marginTop: "25px" }}>
        {" "}
        <hr
          style={{
            width: "85%",
            height: "1px",
            border: "#e5e7eb",
            backgroundColor: "#e5e7eb",
          }}
        />
      </div>

      {/* <input style={{
                      width:'100px',
                      height: '40px',
                      borderRadius: '7%',
                      display: "flexbox"


                  }} type="button" value=" X  Remove" /> */}

      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        {children}
      </div>
    </div>
  );
};

export default Card;
