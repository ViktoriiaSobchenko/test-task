import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <Circles
      height="200"
      width="200"
      color="#ebd8ff"
      ariaLabel="circles-loading"
      wrapperClass={css.loader}
      visible={true}
    />
  );
}

export default Loader;
