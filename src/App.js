import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,useParams } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

// const Home = () => {
//   return(
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   )
// }



const Profile = () => {
  return(
    <div>
      <h1>Profile Page</h1>
    </div>
  )
}

const User = () => {
  const params = useParams();
  console.log("Params : ",params);

  return(
    <div>
      <h1>Your Name is : {params.userId}</h1>
    </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter basename='/Arsh-Tailors'>
      <Navbar/>
        <Routes>
          <Route exact path='/Arsh-Tailors' element={<Home/>} />
          <Route path='/gallery' element={<Shop/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/accounts/profile' element={<Shop />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
