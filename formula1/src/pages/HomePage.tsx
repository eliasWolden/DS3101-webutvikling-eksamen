import VideoBackground from "../components/Home/VideoBackground";
import Header from "../components/Home/Header";
import Content from "../components/Home/Content";
import Footer from "../components/Home/Footer";

const HomePage = () => {
  return (
    <div className="container-fluid bg-dark">
      <Header />
      <div className="row">
        <div className="col g-0">
          <VideoBackground />
        </div>
      </div>

      <div className="row">
        <div className="col g-0">
          <Content />
        </div>
      </div>
      <div className="row">
        <div className="col g-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
