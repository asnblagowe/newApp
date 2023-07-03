import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import Section from "./section/Section";
import Footer from "./footer/Footer";
import Button from "react-bootstrap/Button";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  let users = [
    { id: 1, name: "mukha ", lastName: "Masirbaaev", age: 90 },
    { id: 2, name: "Aiba", lastName: "Keldibekov", age: 24 },
    { id: 3, name: "arlen", lastName: "Azotovich", age: 31 },
  ];

  return (
    <div className="App">
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
}

export default App;
