
import { Routes, Route, Navigate } from "react-router-dom";
import {lazy} from "react";
import LazySuspense from "./Components/LazySuspense";
const LazyLogin= lazy(()=>import("./auth/Login"))
const LazyRegister= lazy(()=>import("./auth/Register"))
const LazyForgetPassword=lazy(()=>import("./auth/ForgetPassword"))
const LazyHome=lazy(()=>import("./User/UserMain"))
const LazyAuth=lazy(()=>import("../src/auth/auth.jsx"))
const LazyUserLayout = lazy(()=> import("./User/UserLayout.jsx"))
const LazyAboutUs=lazy(()=>import("./User/AboutUs.jsx"))
const LazyService = lazy(()=>import("./User/Services.jsx"))
const LazyProductLaunch = lazy(()=>import("./User/ProductLaunch.jsx"))
const LazyProfile = lazy(()=>import("./User/Profile.jsx"))
const LazyAdminLayout = lazy(()=>import("./Admin/AdminLayout.jsx"))
const LazyDashBoard =lazy(()=>import("./Admin/AdminDashboard.jsx"))

const UserRoutes = () =>
{
  return(
    <LazyUserLayout>
      <Routes>
        <Route path="aboutus" element ={<LazySuspense component={LazyAboutUs}/>}/>
        <Route path="home" element ={<LazySuspense component={LazyHome}/>}/>
        <Route path="services" element ={<LazySuspense component={LazyService}/>}/>
        <Route path="services/*" element ={<LazySuspense component={ServiceRoutes}/>}/>
        <Route path="profile" element={<LazySuspense component ={LazyProfile}/>}/>
      </Routes>
    </LazyUserLayout>
  )
}
const AdminRoutes = () =>{
  return(
  <LazyAdminLayout>
    <Routes>
      <Route path="admindash" element={<LazySuspense component={LazyDashBoard}/>}/>
    </Routes>
  </LazyAdminLayout>
  )
}
const ServiceRoutes=()=>{
  return (
    <LazyUserLayout>
      <Routes>
<Route path="productlaunch" element={<LazySuspense component={LazyProductLaunch}/>}/>
        
      </Routes>
    </LazyUserLayout>
  )
}
function App() {
  return (
   
     <Routes>
      <Route exact path="/" element={<Navigate to="/corporate/auth"/>}/>
      <Route path="/corporate/login" element={<LazySuspense component={LazyLogin} />}/>
      <Route path="/corporate/register" element={<LazySuspense component={LazyRegister} />}/>
      <Route path="/corporate/forgotpassword" element={<LazySuspense component={LazyForgetPassword} />}/>
      <Route path="/corporate/auth" element={<LazySuspense component ={LazyAuth}/>}/>

      <Route path="/corporate/user/*" element={<LazySuspense component ={UserRoutes}/>}/>
     <Route path="/corporate/admin/*" element={<LazySuspense component={AdminRoutes}/>}/>
     </Routes>

  )
}

export default App;
