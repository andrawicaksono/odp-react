import { NavLink } from "react-router";
import walledLogo from "../assets/walled.png";
import modeToggle from "../assets/mode-toggle.png";

const Navbar = () => {
  let activeNavLink = "ml-8 font-bold text-primary";
  let inactiveNavLink = "ml-8";
  return (
    <nav className="bg-white mb-9 px-6 sm:px-4 lg:px-8">
      <div>
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <NavLink to="/" end>
                <img src={walledLogo} alt="Walled" className="h-7" />
              </NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center border-r border-[#B3B3B3] pr-4 h-10">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeNavLink : inactiveNavLink
                }
                to="/"
                end
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeNavLink : inactiveNavLink
                }
                to="/transfer"
                end
              >
                Transfer
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeNavLink : inactiveNavLink
                }
                to="/topup"
                end
              >
                Top Up
              </NavLink>
              <NavLink className="ml-8" to="#" end>
                Sign Out
              </NavLink>
            </div>
            <button className="ml-4 h-7 w-7">
              <img src={modeToggle} alt="" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
