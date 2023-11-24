import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
import OrderSummary from "./component/OrderSummary";
import NoMatch from "./component/NoMatch";
import Products from "./component/Products";
import FeaturedProduct from "./component/FeaturedProduct";
import NewProduct from "./component/NewProduct";
import Users from "./component/Users";
import UserDetails from "./component/UserDetails";
import Admin from "./component/Admin";
import Profile from "./component/Profile";
import Login from "./component/Login";
import { AuthProvider } from "./component/auth";
import RequireAuth from "./component/RequireAuth";





function App() {
    return (

        <AuthProvider>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProduct />} />
            <Route path="featured" element={<FeaturedProduct />} />
            <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
            </Route>
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        </Routes>
        </AuthProvider>
    )}


export default App;