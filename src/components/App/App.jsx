import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <Main temp={75} weather={"clear"} timeOfDay={"day"} />
      <Footer />
    </div>
  );
}

export default App;
