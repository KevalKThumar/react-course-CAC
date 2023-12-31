import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./Appwrite/Auth";
import { login, logout } from "./Store/authSlice";
import { Container, Footer, Header } from "./Components/index";
import { Outlet } from "react-router-dom";

function App() {
  const [loding, setLoding] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log("userData:", userData);
          dispatch(login({ userData }));
        } else {
          console.log("userData Not Found:");
          dispatch(logout());
        }
      })
      .finally(() => setLoding(false));
  }, []);

  return !loding ? (
    <>
      <div className="min-h-screen flex flex-wrap text-center bg-gray-400 ">
        <div className="w-full block">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="p-6 rounded-lg">
        <img
          className="text-2xl mix-blend-color-burn"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        />
        {/* <h1 className="text-2xl font-bold">Loading...</h1> */}
      </div>
    </div>
  );
}

export default App;
