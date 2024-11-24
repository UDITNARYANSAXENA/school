//components
import AboutInfo from "../components/AboutInfo";
import MissionVision from "../components/MissionVision";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="pages">
        <h2 className="title">About us</h2>
      </div>
      <AboutInfo />
      <MissionVision />
      <Footer />
    </>
  )
}

export default About