import { useDispatch } from "react-redux";
import { themeChange } from "../reduxRTK/themeSlice";

const Theme = () => {
  const dispatch = useDispatch();

  return (
    <div className="btn-group">
      <button
        className="btn btn-light"
        onClick={() => dispatch(themeChange(false))}
      >
        Light
      </button>
      <button
        className="btn btn-dark"
        onClick={() => dispatch(themeChange(true))}
      >
        Dark
      </button>
    </div>
  );
};

export default Theme;
