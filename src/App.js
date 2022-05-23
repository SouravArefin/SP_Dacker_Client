import { Route, Routes } from "react-router-dom";
import './App.css';
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
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Navbar from "./Components/Navbar/Navbar";
import MyOrder from "./Components/DashBoard/User/MyOrder";
import AddReview from "./Components/DashBoard/User/AddReview";
import AllUser from "./Components/DashBoard/Admin/AllUser";
import ManageOrder from "./Components/DashBoard/Admin/ManageOrder";

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/parts/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        {/* <Route path='/my-profile' element={
          <RequireAuth>
            <MyProfile />
          </RequireAuth>
        }></Route> */}
          <Route path='/parts' element={<Parts />}></Route>

        <Route path='/my-portfolio' element={
          <MyPortfolio />
        }></Route>


        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard />
          </RequireAuth>

        }>

          <Route index element={<MyOrder />}></Route>
          <Route path="review" element={<AddReview />}></Route>
          <Route path="profile" element={ <MyProfile />}></Route>
          <Route path="user" element={ <AllUser />}></Route>
          <Route path="manageOrder" element={ <ManageOrder />}></Route>
        


        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
