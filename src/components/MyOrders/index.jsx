import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CardProduct from "../CardProduct";
import ConfirmOrder from "../ConfirmOrder";
import TotalCart from "../TotalCart";
import { Container } from "./styles";

const MyOrders = () => {
  const { products } = useContext(CartContext);

  return (
    <Container>
      <header>
        <h2>Meu Pedido</h2>
      </header>
      <main>
        {products.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
        <div className="frete">
          <h2>Frete</h2>
          <p>
            R$<span>5,00</span>
          </p>
        </div>
        <TotalCart />
      </main>
    </Container>
  );
};

export default MyOrders;
