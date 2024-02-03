import React, { useState } from "react";
import Briefcase from "../../assets/Briefcase.png";
import StatBoard from "../../assets/StatBoard.png";
import Menu from "../../assets/Circled Menu.png";
import Support from "../../assets/Support.png";
import Puzzle from "../../assets/Puzzle.png";
import Help from "../../assets/Help.png";
import Shutdown from "../../assets/Shutdown.png";
import ProfileImage from "../../assets/Rectangle 10.png";
import "./Home.css";
import LineChart from "../LineChart/LineChart";
import PieChart from "../PieChart/PieChart";
import Table from "../Table/Table";
import Profile from "../Profile/Profile";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuHandler = () => {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  return (
    <div className="home_screen">
      <div className="dashboard">
        <div className="title_logo">
          <div className="icon">
            <img src={Briefcase} alt="" />
          </div>
          <div className="title">
            <img src={StatBoard} alt="" />
          </div>
        </div>
        <div className="options">
          <ul>
            <li>
              <div>
                <img src={Menu} alt="" />
              </div>
              <p>Dashboard</p>
            </li>
            <li>
              <div>
                <img src={Support} alt="" />
              </div>
              <p>Support</p>
            </li>
            <li>
              <div>
                <img src={Puzzle} alt="" />
              </div>
              <p>Plugins</p>
            </li>
            <li>
              <div>
                <img src={Help} alt="" />
              </div>
              <p>Help</p>
            </li>
          </ul>
        </div>
        <div className="logout">
          <button>
            <p>Logout</p>
            <div>
              <img src={Shutdown} alt="" />
            </div>
          </button>
        </div>
      </div>
      <div className="chart_shower">
        <div className="head">
          <div className="hanburger">
            <div className="hanburg_logo">
              {!openMenu ? (
                <i className="material-symbols-outlined" onClick={menuHandler}>
                  menu
                </i>
              ) : (
                <i class="material-symbols-outlined" onClick={menuHandler}>
                  close
                </i>
              )}

              <div className="title_logo">
                <div className="icon">
                  <img src={Briefcase} alt="" />
                </div>
                <div className="title">
                  <img src={StatBoard} alt="" />
                </div>
              </div>
            </div>
            {openMenu ? (
              <div className="hanburger_menu">
                <div className="options">
                  <ul>
                    <li>
                      <div>
                        <img src={Menu} alt="" />
                      </div>
                      <p>Dashboard</p>
                    </li>
                    <li>
                      <div>
                        <img src={Support} alt="" />
                      </div>
                      <p>Support</p>
                    </li>
                    <li>
                      <div>
                        <img src={Puzzle} alt="" />
                      </div>
                      <p>Plugins</p>
                    </li>
                    <li>
                      <div>
                        <img src={Help} alt="" />
                      </div>
                      <p>Help</p>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
          <div className="wishes">
            <p>Good Morning !</p>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div className="profile">
            <div className="profile_data">
              <h3>John Doe</h3>
              <p>john@doe.com</p>
            </div>
            <div className="profile_img">
              <img src={ProfileImage} alt="" />
            </div>
          </div>
        </div>
        <div className="graph_table">
          <div className="graphs">
            <div className="lineGraph">
              <LineChart />
            </div>
            <div className="pieChart">
              <div className="pie_chart_setter">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="table_profile">
            <div className="table">
              <Table />
              <div className="pagination">
                <Pagination />
              </div>
            </div>
            <div className="profile">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
