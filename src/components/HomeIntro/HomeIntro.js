import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import { useTranslation } from "react-i18next";
import { InputAdornment } from "@mui/material";
import { Button } from "@mui/material";
import "./HomeIntro.css";

export default function HomeIntro() {
  const [t, i18n] = useTranslation();
  return (
    <div className="homeIntro_wrapper">
      <div className="intro_title">
        <h3>{t("homeIntroWelcome")}</h3>
      </div>
      <div className="intro_discription">
        <p>{t("homeIntroDiscription")}</p>
      </div>
      <div className="intro_search_container">
        <TextField
          size="small"
          className="intro_search_input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button size="small" className="black_btn" variant="contained">
          {t("Search")}
        </Button>
      </div>

      <div className="intro_data_wrapper">
        <div className="intro_data_container">
          <div className="intro_data_flex">
            <AccountBalanceOutlinedIcon />
            <p className="intro_num">12,312</p>
          </div>
          <p className="intro_data_discrip">{t("portalVisitors")}</p>
        </div>

        <div className="intro_data_container">
          <div className="intro_data_flex">
            <AccountBalanceOutlinedIcon />
            <p className="intro_num">12,312</p>
          </div>
          <p className="intro_data_discrip">{t("availableServiceProviders")}</p>
        </div>

        <div className="intro_data_container">
          <div className="intro_data_flex">
            <ListAltOutlinedIcon />
            <p className="intro_num">12,312</p>
          </div>
          <p className="intro_data_discrip">{t("ProcessedCustomer")}</p>
        </div>

        <div className="intro_data_container">
          <div className="intro_data_flex">
            <SearchIcon />
            <p className="intro_num">12,312</p>
          </div>
          <p className="intro_data_discrip">{t("OnlineGovernmentServices")}</p>
        </div>

        <div className="intro_data_container">
          <div className="intro_data_flex">
            <GroupAddOutlinedIcon />
            <p className="intro_num">12,312</p>
          </div>
          <p className="intro_data_discrip">{t("RegisteredCustomers")}</p>
        </div>
      </div>
    </div>
  );
}
