import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import "./ServicesLeftBar.css";
import { NavLink } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { useTranslation } from "react-i18next";
export default function SerrvicesLeftBar() {
  const [t, i18n] = useTranslation();
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="Servicesleftbar_wrapper">
      <div className="ServicesLeftbar_header">
        <NavLink className="ServicesLeftbar_Heam_nav">
          <TopicOutlinedIcon />
          {t("Topics")}
        </NavLink>
      </div>

      <hr></hr>

      <div className="ServicesLeftbar_list">
        {a.map((x, index) => (
          <div key={index} className="ServicesLeftbar_list_elmnt">
            <Checkbox size="small" />
            <p>IT and Communications</p>
          </div>
        ))}
      </div>
    </div>
  );
}
