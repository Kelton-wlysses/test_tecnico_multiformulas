import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container } from "./styles";

const TotalCart = () => {

  const { products } = useContext(CartContext);

  function total(){
    const result = products.reduce((acc, cv) =>{
      return acc + cv.price
    }, 0);
    const resultFrete = result + 5
    return Number(resultFrete).toFixed(2).toString().replace(".", ",")
  }

  return (
    <Container>
        <div>
          <h2>Total</h2>
          <p>
            R$<span>
              {total()}
            </span>
          </p>
        </div>
    </Container>
  );

};
export default TotalCart;

