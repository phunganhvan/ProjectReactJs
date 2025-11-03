// import { Children } from "react";
import LayoutDefault from "../Layout/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
// import PrivateRoutes from "../components/PrivateRoute";
import Register from "../pages/Register"
// import BlogAll from "../pages/Blog/BlogAll";
// import BlogRelated from "../pages/Blog/BlogRelated";
// import BlogDetail from "../pages/Blog/BlogDetail";
import InfoUser from "../pages/InfoUser";
import Logout from "../pages/Logout";
import DaiSo from "../pages/DaiSo";
import GiaiTich from "../pages/GiaiTich";
import GiaiTichTeacher from "../pages/GiaiTichTeacher";
import DaiSoTeacher from "../pages/DaiSoTeacher";
import { patch } from "../utils/request";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "Login",
                element: <Login />
            },
            {
                path: "Logout",
                element: <Logout />
            },
            {
                path: "Register",
                element: <Register />
            },
            {
                path: "DaiSo",
                element: <DaiSo />
            },
            {
                path: "GiaiTich",
                element: <GiaiTich />
            },
            {
                path: "GiaiTichTeacher",
                element: <GiaiTichTeacher/>
            },
            {
                path: "DaiSoTeacher",
                element: <DaiSoTeacher />
            },
            
            // {
            //     path: "Blog",
            //     element: <Blog/>,
            //     children: [
            //         {
            //             index: true,
            //             element: <BlogAll/>
            //         },
            //         {
            //             path: "related",
            //             element: <BlogRelated/>
            //         },
            //         {
            //             path: "news",
            //             element: <BlogAll/>
            //         },
            //         {
            //             path: ":id",
            //             element: <BlogDetail/>
            //         },
            //     ]
            // },
            {
                path: "*",
                element: <Error404 />
            },
            {
                path: "InfoUser",
                element: <InfoUser />
            }
        ]
    }
];
{/* <Routes>
      <Route path='/' element= {<LayoutDefault/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Blog' element= {<Blog/>}>
          <Route index element={<BlogAll/>}/>
          <Route path='/Blog/new' element={<Blognew/>}/>
          <Route path='/Blog/related' element={<BlogRelated/>}/>
          <Route path=':id' element={<BlogDetail/>}/>
        </Route>
        <Route element={<PrivateRoutes/>}>
          <Route path='/InfoUser' element={<InfoUser/>} />
        </Route>
        <Route path='*' element={<Error404/>} />
      </Route>
    </Routes> */}