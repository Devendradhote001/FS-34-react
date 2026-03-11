import { useDispatch } from "react-redux";
import { setSong } from "../../player/state/playerSlice";

export const useHome = () => {
  let dispatch = useDispatch();

  let addSong = (elem) => dispatch(setSong(elem));

  return {
    addSong,
  };
};
