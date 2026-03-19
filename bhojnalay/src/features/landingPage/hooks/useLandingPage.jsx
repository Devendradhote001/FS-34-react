import { useNavigate } from "react-router";

export const useLandingPage = () => {
  let categoryData = [
    {
      name: "South Indian",
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png",
    },
    {
      name: "Chinese",
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png",
    },
    {
      name: "Deserts",
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Desserts.png",
    },
    {
      name: "Pizza",
      image_url:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
    },
  ];

  let navigate = useNavigate();

  return {
    navigate,
    categoryData,
  };
};
