import { Container } from "./styles";
import Logo from '../../assets/logo.png'

const Header = () => {

  return (
    <Container>
      <header>
        <figure>
          <img src={Logo} alt="" />
        </figure>
      </header>
      <main>
        <h2>
          Farmárcia de Manipulação que há 28 anos leva saúde e qualide de vida até você!
        </h2>
      </main>
    </Container>
  );

};

export default Header;
