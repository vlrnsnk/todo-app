import Button from "react-bootstrap/Button";

function Header({ text, isGoBack }) {
  return (
    <div className="d-flex gap-5 align-items-center justify-content-evenly mb-4 mb-sm-5">
      {isGoBack &&
        <Button className="" variant="primary">Go Back</Button>
      }
      <h1>{text}</h1>
    </div>
  );
}

export default Header;
