import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./navbar.css";

export const NavBar = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="navigation">
        <Link to={"/"}>Home</Link>

        {user && (
          <>
            <Link to={"/create-post"}>Create Post</Link>
          </>
        )}

        {!user && (
          <>
            <Link to={"/login"}>Login</Link>
          </>
        )}
      </div>
      <div className="user-info">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} height="40" width="40" />
            <button onClick={signUserOut}>Log out</button>
          </>
        )}
      </div>
    </div>
  );
};
