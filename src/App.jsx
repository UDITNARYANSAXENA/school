//rrd imports
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
} from "react-router-dom";

// Components
// import Navbar from "./components/Navbar";
import ProgramError from "./components/ProgramError";

// Routes
import Home from "./routes/Home";
import About from "./routes/About";
import Facility from "./routes/Facility";
import Admission from "./routes/Admission";
import Contact from "./routes/Contact";
//layout import
import RootLayout from "./layouts/RootLayout";
import ProgramLayout from "./layouts/ProgramLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="facility" element={<Facility />} />
      <Route path="programs" element={<ProgramLayout />} errorElement={<ProgramError />}>  
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="apply" element={<Admission />} />
    </Route>
  )
);

const App = () => {
  return ( 
    <RouterProvider router={router} />
  );
}
 
export default App;