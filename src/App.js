import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import NotFound from "./Components/NotFound/NotFound";
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Home from "./Components/Home/Home";

import DashBoard from "./Components/DashBoard/DashBoard";
import Purchase from "./Components/Purchase/Purchase";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Parts from "./Components/Parts/Parts";
import MyPortfolio from "./Components/MyPortfolio/MyPortfolio";
import MyProfile from "./Components/MyProfile/MyProfile";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/parts/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path='/my-profile' element={
          <RequireAuth>
            <MyProfile />
          </RequireAuth>
        }></Route>
        <Route path='/parts' element={
          
            <Parts />
          }></Route>
        <Route path='/my-portfolio' element={
          
            <MyPortfolio />
          }></Route>


        <Route path='/dashboard' element={<DashBoard />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
