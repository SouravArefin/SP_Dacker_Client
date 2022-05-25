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
import RequireAdmin from './Components/RequireAuth/RequireAdmin'
import AddTools from "./Components/DashBoard/Admin/AddTools";
import Welcome from "./Components/DashBoard/Welcome";
import ManageTools from "./Components/DashBoard/Admin/ManageTools";
import UpdateTool from './Components/DashBoard/Admin/UpdateTool'
import { ToastContainer } from "react-toastify";
import Payment from "./Components/DashBoard/User/Payment";
import UpdateForm from "./Components/MyProfile/UpdateProfile";
import UpdateProfile from "./Components/MyProfile/UpdateProfile";
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

          <Route index element={<Welcome/>}></Route>

          <Route path="review" element={<AddReview />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route path="myorder" element={<MyOrder />}></Route>
          <Route path="payment/:id" element={<Payment/>}></Route>
          <Route path="my-profile/edit-profile/:id" element={<UpdateProfile/>}></Route>
          
          <Route path="user" element={
            <RequireAdmin><AllUser /></RequireAdmin>
          }></Route>
          <Route path="manageOrder" element={
              <RequireAdmin> <ManageOrder /></RequireAdmin>
           
          }></Route>
          <Route path="add" element={
              <RequireAdmin> <AddTools /></RequireAdmin>
           
          }></Route>
          <Route path='updateTool/:id' element={
              <RequireAdmin> <UpdateTool/></RequireAdmin>
           
          }></Route>
          <Route path="manageTools" element={
              <RequireAdmin> <ManageTools /></RequireAdmin>
           
          }></Route>
        


        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;
