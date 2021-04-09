import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.currently ? props.currently : '"https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"'});
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
`;


export const CityName = styled.h2`
  font-size: 30px;
  border: 0;
  color: white;
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0;
`;

export const Temperature = styled.h3`
  font-size: 80px;
  margin: 0;
  padding: 10px;
  border: 0;
  color: white;
  text-align: center;
  font-weight: 400;
  margin-top: 50px;
  text-shadow: 0 3px 1px rgb(0 0 0 / 20%);
`;

export const Dashed = styled.div`
  width: 50%;
  height: 1px;
  text-align: center;
  border-bottom: 2px dashed white;
`;

export const Description = styled.h3`
  font-size: 20px;
  border: 0;
  color: white;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 0;
`;

export const WindSpeedy = styled.h3`
  font-size: 18px;
  border: 0;
  color: white;
  text-align: center;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 40px;
`;

export const DescriptionWindSpeedy = styled.h3`
  font-size: 18px;
  border: 0;
  font-weight: bolder;
  color: white;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 0;
`;
export const ContainerForecast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TemperatureFooter = styled.p`
  font-size: 14px;
  text-align: center;
  color: white;
  font-weight: 600;
  margin-top: 5px;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  padding: 10px;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  width: 80%;
  background-color:  #ffdead49;
  border-radius: 9px;
  padding: 10px;
  box-shadow: 0 2px 2px #00000059;
`;

export const Day = styled.p`
  font-size: 16px;
  color: white;
  font-weight: bold;
  margin: 0;
`;

export const InputCity = styled.input`
  box-shadow: 0 2px 2px #00000059;
  border-radius: 50px;
  background-color: white;
  width: 100%;
  height: 35px;
  padding-left: 20px;
  border: none;
  outline: none;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 50px;
  border: none;
  height: 40px;
  border-radius: 50px;
  background-color: #fea168;
  box-shadow: 0 2px 2px #00000059;
  color: white;
  text-align: center;
  margin-left: 10px;
  margin-top: 20px;
  font-weight: 700;
  outline: none;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
`;
