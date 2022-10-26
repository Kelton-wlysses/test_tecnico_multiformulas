import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Container } from "./styles";

const MyInfos = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <header>
        <h2>
          Minhas Informações
        </h2>
      </header>
      <main>
        <h2>Nome:</h2>
        <p>{user[0].name}</p>

        <h2>Endereço:</h2>
        <p>{user[0].end}</p>

        <h2>Telefone:</h2>

      </main>
    </Container>
  );

};

export default MyInfos;
