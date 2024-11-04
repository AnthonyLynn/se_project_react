import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import "./Main.css";

/* TODO delete after finishing */
import tShirt from "../../images/T-Shirt.svg";

function Main(props) {
  return (
    <>
      <WeatherCard
        temp={props.temp}
        weather={props.weather}
        timeOfDay={props.timeOfDay}
      />
      <p className="main__text">
        Today is {props.temp}&deg;F / You may want to wear:
      </p>
      <ul className="main__items">
        <ItemCard
          handleCardClick={props.handleCardClick}
          item={"T-Shirt"}
          image={tShirt}
        />
        <ItemCard
          handleCardClick={props.handleCardClick}
          item={"T-Shirt"}
          image={tShirt}
        />
        <ItemCard
          handleCardClick={props.handleCardClick}
          item={"T-Shirt"}
          image={tShirt}
        />
        <ItemCard
          handleCardClick={props.handleCardClick}
          item={"T-Shirt"}
          image={tShirt}
        />
        <ItemCard
          handleCardClick={props.handleCardClick}
          item={"T-Shirt"}
          image={tShirt}
        />
      </ul>
    </>
  );
}

export default Main;
