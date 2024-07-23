const TittlePage = ({ messages }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "40px",
      }}
    >
      <h2
        style={{
          display: "inline",
          textAlign: "center",
          marginLeft: "30px",
          fontSize: "20px",
          fontWeight: "400",
        }}
      >
        {messages}
      </h2>
      <hr
        style={{
          width: "87%",
          height: "1px",
          backgroundColor: "#C1D72F",
        }}
      />
    </div>
  );
};

export default TittlePage;
