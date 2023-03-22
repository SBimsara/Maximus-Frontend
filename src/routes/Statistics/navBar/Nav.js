import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div>
          <a className="navbar-brand" href="#">
            NavBar
          </a>
          <div
            class="btn-group"
            style={{ paddingLeft: "150px", paddingTop: "150px" }}
          >
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Action
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <Link to="/statistics/">
                  <button class="dropdown-item" type="button">
                    Stat
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/statistics/Stat1">
                  <buton class="dropdown-item" type="button">
                    Stat1
                  </buton>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
