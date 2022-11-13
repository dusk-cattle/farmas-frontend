// deps
import { useContext, useState } from 'react';
import { SessionContext } from '../../contexts';

// usecases
import { logout } from '../../usecases';

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
              {data?.resource.name}
              <LogoutIcon onClick={handleLogoutButton} />
            </Title>
          </Header>

          <FarmContainer>
            <FarmMap />
          </FarmContainer>
        </Map>

        <Chart />
      </Body>

      <Footer>
        <FileIcon onClick={() => setCreatingAnalysis(true)} />
        <ReportsIcon onClick={() => setShowingReports(true)} />
        {data?.role === Roles.OWNER && (
          <AddWorkerIcon onClick={() => setAddingWorker(true)} />
        )}
      </Footer>
    </Container>
  );
}
