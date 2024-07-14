import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";

function Header({ text, isGoBack }) {
  const navigate = useNavigate();

  return (
    <div className="d-flex gap-5 align-items-center justify-content-evenly mb-4 mb-sm-5">
      {isGoBack &&
        <Button variant="primary" onClick={() => navigate("/")}>Go Back</Button>
      }
      <h1>{text}</h1>
    </div>
  );
}

export default Header;
