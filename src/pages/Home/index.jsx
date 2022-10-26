import { Container } from "./styles";
import Header from "../../components/Header";
import MyInfos from "../../components/MyInfos";
import MyOrders from "../../components/MyOrders";
import ConfirmOrder from "../../components/ConfirmOrder";
import Footer from "../../components/Footer";

const Home = () => {

  return (
    <Container>
      <Header />

      <MyInfos />

      <MyOrders />

      <ConfirmOrder />

      <Footer />
    </Container>
  );
};

export default Home;
