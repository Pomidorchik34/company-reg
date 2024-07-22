import { useState } from "react";
import Inputs from "./Components/inputs";
import telegram from "./assets/tg.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <a href="" className="logo">
          <img src={telegram} alt="" />
        </a>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="" className="nav-link">
                Vakansiyalar
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Kandidatlar
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Kompaniyalar
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Xizmatlar
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Ta’lim
              </a>
            </li>{" "}
          </ul>
        </nav>{" "}
        <div className="opt">
          <select name="" id="">
            <option value="">Ozb</option>
            <button className="header-btn">Boshlash</button>
          </select>
        </div>
      </header>
      <Inputs />
    </>
  );
}

export default App;
