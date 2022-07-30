import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forcast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const Forcast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log(forecastDays);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_min)}°C /
                   {Math.round(item.main.temp_max)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="daily-details-grid">
              <div className="daily-details-grid-item">
                <label>Pressure</label>
                <label>{item.main.pressure}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Humidity</label>
                <label>{item.main.humidity}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Clouds</label>
                <label>{item.clouds.all}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Wind Speed:</label>
                <label>{Math.round(item.wind.speed)}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Sea Level:</label>
                <label>{item.main.sea_level} m</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Feels Like:</label>
                <label>{Math.round(item.main.feels_like)} °C</label>
              </div>
            </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}

      </Accordion>
    </>
  )
}
export default Forcast;