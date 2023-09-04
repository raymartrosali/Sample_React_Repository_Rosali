import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Image1 from "./images/1.png";
import Image2 from "./images/2.png";
import Image3 from "./images/3.png";
import Image4 from "./images/4.png";
import Image5 from "./images/5.png";
import GridItems from "./components/GridItems";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Banner></Banner> 
      <div className="bg-dark p-5">
        <div className="container">
          <h1 className="text-warning">Top 5 Animes of the week:</h1>
          <div className="row g-5 justify-content-center">
            <GridItems name="Demon Slayer" imageFile={Image1} desc="Lorem Ipsum"></GridItems>
            <GridItems name="Haikyuu" imageFile={Image2} desc="Lorem Ipsum Ismet"></GridItems>
            <GridItems name="Eyeshield 21" imageFile={Image3} desc="Lorem Ipsum Ismum"></GridItems>
            <GridItems name="Kuroko no Baske" imageFile={Image4} desc="Lorem Ipsum Isnun"></GridItems>
            <GridItems name="Yamato Nadeshiko" imageFile={Image5} desc="Lorem Ipsum Iswam"></GridItems>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
