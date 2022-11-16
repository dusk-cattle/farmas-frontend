// deps
import { useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { SessionContext } from '../../contexts';

// usecases
import { getFarms, logout } from '../../usecases';

// components
import {
  AddWorker,
  ShowReports,
  Chart,
  CreateAnalysis,
  FarmMap,
} from './components';
import { ReportStatusContainer } from './components/show-reports/styles';

// enums
import { Roles } from '../../enums';

// styles
import {
  Container,
  Body,
  Map,
  Header,
  Title,
  FarmContainer,
  Footer,
  FileIcon,
  AddWorkerIcon,
  ReportsIcon,
  LogoutIcon,
} from './styles';
import { WeatherApiResponse, WeatherData } from './types';
import { GetCoordinates } from '../../backend';
import { apiKey } from '../../keys/weatherapi';

export function Dashboard() {
  const [creatingAnalysis, setCreatingAnalysis] = useState(false);
  const [addingWorker, setAddingWorker] = useState(false);
  const [showingReports, setShowingReports] = useState(false);

  const { data } = useContext(SessionContext);

  const [hasFarm, setHasFarm] = useState(false);

  const [currentWeather, setCurrentWeather] = useState<WeatherData>();

  useEffect(() => {
    (async () => {
      setHasFarm(!!(await getFarms()).length);

    })();


  }, []);

  useEffect(() => {
    (async () => {
      await getCurrentWeather()
    })();
  }, [hasFarm])

  if (creatingAnalysis)
    return <CreateAnalysis onClickBack={() => setCreatingAnalysis(false)} />;

  if (addingWorker)
    return <AddWorker onClickBack={() => setAddingWorker(false)} />;

  if (showingReports)
    return <ShowReports onClickBack={() => setShowingReports(false)} />;

  async function handleLogoutButton() {
    try {
      await logout();
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } catch (error) { }
  }

  async function getCurrentWeather() {
    if (!hasFarm)
      return

    const location = await GetCoordinates();
    if (!location)
      return

    const { latitude, longitude } = location.centerPoint

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt_br&appid=${apiKey}`;
    const { data } = await axios.get<WeatherApiResponse>(url)

    if (!data.weather)
      return

    const { description, icon } = data.weather[0];

    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

    const weatherData: WeatherData = {
      description,
      icon: iconUrl,
      temperature: data.main
    }

    setCurrentWeather(weatherData)
  }

  return (
    <Container>
      <Body>
        <Map>
          <Header>
            <Title>
              <LogoutIcon onClick={handleLogoutButton} />
              {data?.resource?.name}
            </Title>
          </Header>

          <FarmContainer>
            <FarmMap />
          </FarmContainer>
        </Map>

        {
          currentWeather &&
          <ReportStatusContainer enabled={true} style={{ margin: '10px', marginBottom: '20px' }}>
            <img src={currentWeather?.icon} />

            <span style={{ textTransform: 'capitalize' }}>{currentWeather?.description}</span>
            <span>Temperatura: {(currentWeather.temperature.temp - 273.15).toFixed(2)}C</span>
            <span>Pressão: {(currentWeather.temperature.pressure).toFixed(0)}hPa</span>
            <span>Humidade: {(currentWeather.temperature.humidity).toFixed(0)}%</span>
          </ReportStatusContainer>
        }

        <Chart />
      </Body>

      <Footer>
        <FileIcon
          onClick={() => setCreatingAnalysis(true)}
          disabled={!hasFarm}
        />
        <ReportsIcon
          onClick={() => setShowingReports(true)}
          disabled={!hasFarm}
        />
        {data?.role === Roles.OWNER && (
          <AddWorkerIcon onClick={() => setAddingWorker(true)} />
        )}
      </Footer>
    </Container>
  );
}
