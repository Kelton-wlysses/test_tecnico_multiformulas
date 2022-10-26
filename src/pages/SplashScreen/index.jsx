import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const SplashScreen = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <Container>
      <div>
        <h2>Bem vindo <span>{user[0].name}</span>!</h2>
        <button onClick={() => navigate('/home')}>entrar</button>
      </div>
    </Container>
  );
};

export default SplashScreen;
