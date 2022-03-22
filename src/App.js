import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import { SimpleCounter } from "./components/SimpleCounter";
import { List } from "./components/List";
import { Accordion } from "./components/Accoridon";
import { ImageSlider } from "./components/ImageSlider";
import { NavMenu } from "./components/NavMenu";
import { Checklist } from "./components/Checklist";
import { Login } from "./components/Login";
import { useEffect, useState } from "react";
import { LoginRequired } from "./components/LoginRequired";
import { PrintData } from "./components/PrintData";
import { Context } from "./components/Context";

const AllRoutes = [
  {
    name: "Seach Bar",
    path: "/search-bar",
    element: <SearchBar />
  },
  {
    name: "Simple Counter",
    path: "/simple-counter",
    element: <SimpleCounter />
  },
  {
    name: "List",
    path: "/List",
    element: <List />
  },
  {
    name: "Accordion",
    path: "/accordion",
    element: <Accordion />
  },
  {
    name: "Image Slider",
    path: "/image-slider",
    element: <ImageSlider />
  },
  {
    name: "Checklist",
    path: "/checklist",
    element: <Checklist />
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />
  },
  {
    name: "Print Data API",
    path: "/print-data-api",
    element: <PrintData />
  },
  {
    name: "Context API",
    path: "/context-api",
    element: <Context />
  }
];
export default function App() {
  const [user, setUser] = useState(false);
  console.log(user);
  useEffect(() => {
    const item = localStorage.getItem("user");
    item && JSON.parse(item) ? setUser(true) : setUser(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <>
      <BrowserRouter>
        <Login
          user={user}
          logout={() => setUser(false)}
          login={() => setUser(true)}
        />
        <NavMenu />
        <Routes>
          {user && (
            <>
              {AllRoutes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                );
              })}
            </>
          )}
          <Route path="*" element={<LoginRequired />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
