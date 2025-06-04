import Header from "../components/Header";
import "../App.css";
import MainArea from "../components/MainArea";
import Profile from "../components/Profile";
import GalleryContainer from "../components/GalleryContainer";

function App() {
  return (
    <div className="container" id="app">
      <Header />
      <MainArea>
        <Profile />
        <GalleryContainer />
      </MainArea>
    </div>
  );
}

export default App;
