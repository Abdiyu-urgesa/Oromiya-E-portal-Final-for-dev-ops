import ServiceCard from "../../components/ServiceCards/ServiceCard";
import "./Services.css";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SerrvicesLeftBar from "../../components/ServicesLeftBar/ServicesLeftBar";
import MostReqServices from "../../components/MostReqServices/MostReqServices";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { get_service } from "../../services/service_calls/Service_Api";
import { useTranslation } from "react-i18next";
export default function Services() {
  const [t, i18n] = useTranslation();
  const [services, setservices] = useState();

  useEffect(() => {
    get_service().then((res) => {
      if (res.success && res.data) {
        console.log(res.data);
        setservices(res.data.data);
      } else {
        console.log(res.error);
      }
    });
  }, []);

  return (
    <div className="service_wrapper">
      <div className="service_left">
        <SerrvicesLeftBar></SerrvicesLeftBar>
      </div>
      <div className="service_cente">
        <div className="service_header">
          <div className="service_header_tit">
            <ListAltOutlinedIcon />
            <p>{t("ListOfservices")}</p>
          </div>
          <div className="filter_search_container">
            <TextField
              size="small"
              id="filter_search_input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button size="small" className="black_btn" variant="contained">
              {t("Go")}
            </Button>
          </div>
        </div>
        <hr></hr>
        <div className="content_intro">
          <p>{t("service_discription")}</p>
        </div>
        <div className="services_container">
          {services?.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.attributes.name}
              discription="sddjjd" //{service.attributes.discription}
            ></ServiceCard>
          ))}
        </div>
      </div>
      <div className="service_right">
        <MostReqServices></MostReqServices>
      </div>
    </div>
  );
}
