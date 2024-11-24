// rrd import
import { NavLink } from "react-router-dom";

// Components
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import WhySchool from "../components/WhySchool";

const Home = () => {
  return (
    <>
      <div className="home">
        <p className="title">Welcome to Vishal Bharti </p>
        <p className="info">
          Vishal Bharti Senior Secondary School, a premier educational
          institution, was established in 1989. Vishal Bharti Sr. Sec. School is
          a new wave Progressive school with the vision and aspiration of the
          new millennium enriched by the wisdom of great thinkers and educators
          like Tagore and Vivekananda and the dreams of scientist and educator
          Stephen Hawkings. Achieving excellence through human values is the
          goal of this School. The school is a unique experiment and honest
          endeavor aiming at man-making education for building a dynamic society
          by developing the personality of the child towards fullness. It is by
          helping the child in the manifestation of the perfection already
          existing in the child and by creating an environment where the child
          can recognize "the angle of surplus" that he is. Integral Education
          for fullness is ensured by developing his physical, intellectual,
          emotional and spiritual qualities in a balanced form, so that the
          child can blossom as a multi lotus in its pristine glory under the
          ever-purifying, constantly ever rising Sun. The manifestation of the
          perfection already existing in the child-the blossoming of the
          "Integral", i.e. his physical, intellectual, emotional and spiritual
          faculties.
        </p>
        <NavLink to="/about">Explore</NavLink>
      </div>
      <MissionVision />
      <WhySchool />
      <Footer />
    </>
  );
};

export default Home;
