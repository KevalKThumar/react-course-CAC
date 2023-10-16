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
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              loding...
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
