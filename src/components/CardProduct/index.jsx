import { Container } from "./styles";

const CardProduct = ({ product }) => {
  return (
    <Container>
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <div>
        <h2>Quantidade: 1</h2>
        <p>
          R$
          <span>
            {Number(product.price).toFixed(2).toString().replace(".", ",")}
          </span>
        </p>
      </div>
    </Container>
  );
};
export default CardProduct;
