import { NavLink } from "react-router";
import walledLogo from "../assets/walled.png";

const Navbar = ({ active }) => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <NavLink to="/" end>
                <img src={walledLogo} alt="Walled" className="h-7" />
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <nav>
              <NavLink
                className={
                  active === "dashboard"
                    ? "ml-8 font-bold text-primary"
                    : "ml-8"
                }
                to="/"
                end
              >
                Dashboard
              </NavLink>
              <NavLink
                className={
                  active === "transfer" ? "ml-8 font-bold text-primary" : "ml-8"
                }
                to="/transfer"
                end
              >
                Transfer
              </NavLink>
              <NavLink
                className={
                  active === "topup" ? "ml-8 font-bold text-primary" : "ml-8"
                }
                to="/topup"
                end
              >
                Top Up
              </NavLink>
              <NavLink
                className={
                  active === "signout" ? "ml-8 font-bold text-primary" : "ml-8"
                }
                to="#"
                end
              >
                Sign Out
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
