// deps
import { useContext, useEffect, useState } from 'react';
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

export function Dashboard() {
  const [creatingAnalysis, setCreatingAnalysis] = useState(false);
  const [addingWorker, setAddingWorker] = useState(false);
  const [showingReports, setShowingReports] = useState(false);

  const { data } = useContext(SessionContext);

  const [hasFarm, setHasFarm] = useState(false);

  useEffect(() => {
    (async () => {
      setHasFarm(!!(await getFarms()).length);
    })();
  }, []);

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
    } catch (error) {}
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
