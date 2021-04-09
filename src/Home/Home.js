import React, { useEffect, useState } from "react";
import {
  Icon,
  InputCity,
  Container,
  Day,
  ContainerWrapper,
  ContainerForecast,
  TemperatureFooter,
  WindSpeedy,
  Description,
  CityName,
  Button,
  Temperature,
  ContainerInput,
  DescriptionWindSpeedy,
} from "./Styled";
import LogoIcone from "../icons/logo.svg";
import RainIcon from "../icons/chuva.svg";
import SunIcon from "../icons/dia-limpo.svg";
import CloudDayIcon from "../icons/dia-nublado.svg";
import SnowIcon from "../icons/neve.svg";
import MoonIcon from "../icons/noite-limpa.svg";
import CloudNightIcon from "../icons/noite-nublada.svg";
import StormIcon from "../icons/tempestade.svg";

const noite =
  "https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const dia =
  "https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

function Home() {
  const [weather, setWeather] = useState();
  const [textInput, setTextInput] = useState("");
  async function getWeather() {
    try {
      let response = await fetch(
        "https://api.hgbrasil.com/weather/?key=5858ce88&format=json-cors&city_name=" +
          textInput
      );
      let resJson = await response.json();
      console.log(resJson.results);
      setWeather(resJson.results);
    } catch (error) {
      console.log(error);
    }
  }

  // storm - tempestade
  // snow - neve
  // hail - granizo
  // rain - chuva
  // fog - neblina
  // clear_day - dia limpo
  // clear_night - noite limpa
  // cloud - nublado
  // cloudly_day - nublado de dia
  // cloudly_night - nublado de noite
  // none_day - erro ao obter mas está de dia
  // none_night - erro ao obter mas está de noite

  function traducaoCondition(status) {
    switch (status) {
      case "storm":
        return "Tempestade";

      case "snow":
        return "Neve";

      case "clear_night":
        return "Noite limpa";

      case "clear_day":
        return "Dia limpo";

      case "rain":
        return "Chuva";

      case "cloudly_night":
        return "Noite nublada";

      case "cloudly_day":
        return "Dia Nublado";

      default:
        return "";
    }
  }

  function getIcon(icone) {
    switch (icone) {
      case "storm":
        return StormIcon;

      case "snow":
        return SnowIcon;

      case "clear_night":
        return MoonIcon;

      case "clear_day":
        return SunIcon;

      case "rain":
        return RainIcon;

      case "cloudly_night":
        return CloudNightIcon;

      case "cloudly_day":
        return CloudDayIcon;

      default:
        break;
    }
  }

  function isDayorNight(currently) {
    return currently == "noite" ? noite : dia;
  }

  return (
    <Container currently={weather ? isDayorNight(weather.currently) : dia}>
      <ContainerInput>
        <InputCity
          value={textInput}
          placeholder="Informe sua cidade"
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        ></InputCity>
        <Button
          onClick={() => {
            getWeather();
            setTextInput("");
          }}
        >
          OK
        </Button>
      </ContainerInput>
      <CityName>{weather ? weather.city_name : ""}</CityName>
      <Description>{weather ? traducaoCondition(weather.condition_slug) : ""}</Description>
      {weather ? (
        <>
          <Temperature>{weather ? weather.temp : ""}°</Temperature>
          <DescriptionWindSpeedy>Velocidade do vento</DescriptionWindSpeedy>
          <WindSpeedy>{weather ? weather.wind_speedy : ""}</WindSpeedy>
          <ContainerWrapper>
            <ContainerForecast>
              {weather ? (
                <Icon src={getIcon(weather.forecast[0].condition)}></Icon>
              ) : (
                ""
              )}
              <TemperatureFooter>
                {weather
                  ? weather.forecast[0].max.toFixed(2) +
                    "°c / " +
                    weather.forecast[0].min.toFixed(2) +
                    "°c"
                  : ""}
              </TemperatureFooter>
              <Day> {weather ? weather.forecast[0].weekday : ""}</Day>
            </ContainerForecast>
            <ContainerForecast>
              {weather ? (
                <Icon src={getIcon(weather.forecast[1].condition)}></Icon>
              ) : (
                ""
              )}

              <TemperatureFooter>
                {weather
                  ? weather.forecast[1].max.toFixed(2) +
                    "°c / " +
                    weather.forecast[1].min.toFixed(2) +
                    "°c"
                  : ""}
              </TemperatureFooter>
              <Day>{weather ? weather.forecast[1].weekday : ""}</Day>
            </ContainerForecast>
            <ContainerForecast>
              {weather ? (
                <Icon src={getIcon(weather.forecast[2].condition)}></Icon>
              ) : (
                ""
              )}
              <TemperatureFooter>
                {weather
                  ? weather.forecast[2].max.toFixed(2) +
                    "°c / " +
                    weather.forecast[2].min.toFixed(2) +
                    "°c"
                  : ""}
              </TemperatureFooter>
              <Day>{weather ? weather.forecast[2].weekday : ""}</Day>
            </ContainerForecast>
          </ContainerWrapper>
        </>
      ) : null}
    </Container>
  );
}

export default Home;
