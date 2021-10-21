import colors from "./favbar.json";

const Favbar = (props) => {
  const obj = colors.find((o) => o.cat === props.category);
  const bgColor = obj.bg;
  const fontColor = obj.font;

  return (
    <nav
      className="navbar fixed-top favbar"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "45px",
        backgroundColor: bgColor,
        color: fontColor,
        fontFamily: "Lato",
      }}
    >
      <h2>{props.category}</h2>
    </nav>
  );
};

export default Favbar;
