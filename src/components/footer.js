import logo from '../logoo.png';

function Footer() {
  return (
    <footer
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "4rem",
        background: "linear-gradient(90deg, #004587, #2fb4e9)"
      }}
    >
      <img
        src={logo}
        alt="Manav Rachna School"
        style={{ height: "2.2rem" }}
      />
    </footer>
  );
}

export default Footer;