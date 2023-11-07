import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firbase";
import { useAppDispatch } from "./redux/hook";
import { setLoading, setUser } from "./redux/featured/user/registrationSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, []);

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
