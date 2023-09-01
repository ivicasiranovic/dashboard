import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideNav from "./components/sidenav/SideNav";
import TopNav from "./components/topnav/TopNav";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UsersList";
import UserProfile from "./pages/userprofile/UserProfile";
import CreateUser from "./pages/createuser/CreateUser";
import ProductList from "./pages/productlist/ProductLists";

function App() {
  return (
    <HashRouter>
      <TopNav />
      <div className="container">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<UserProfile />}></Route>
          <Route path="/createuser" element={<CreateUser />}></Route>
          <Route path="/productlist" element={<ProductList />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
