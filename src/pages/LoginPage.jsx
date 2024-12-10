import walledLogo from "../assets/walled.png";
import loginBanner from "../assets/login-banner.png";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const isLoggedIn = login(username, password);
    if (isLoggedIn) {
      navigate("/");
    }
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Walled" src={walledLogo} className="mx-auto h-10 w-auto" />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  required
                  placeholder="Username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text- font-semibold text-white drop-shadow-xl hover:drop-shadow-none hover:shadow-inner"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Belum punya akun?{" "}
            <a href="#" className="font-semibold text-primary">
              Daftar di sini
            </a>
          </p>
        </div>
      </div>

      <div className="w-1/2">
        <img className="h-full object-cover" src={loginBanner} alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
