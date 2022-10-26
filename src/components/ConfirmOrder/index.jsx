import { Container } from "./styles";
import { BsCheck2 } from "react-icons/bs"

const ConfirmOrder = () => {
  return (
    <Container>
      <h2>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation veni
        am consequat sunt nostrud amet?
      </h2>

      <div className="select">
        <input type="radio" id="Facebook" value="Facebook" />
        <label for="Facebook">Facebook</label>

        <input type="radio" id="Instagram" value="Instagram" />
        <label for="Instagram">Instagram</label>

        <input type="radio" id="Indicação" value="Indicação" />
        <label for="Indicação">Indicação</label>
      </div>

      <button>
        <BsCheck2 size={20}/>
        Confirmar Pedido
      </button>
    </Container>
  );
};

export default ConfirmOrder;
