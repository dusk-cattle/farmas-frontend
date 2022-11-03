// deps
import { useState } from 'react';

// usecases
import { logout } from '../../usecases';

// components
import { AddWorker, Chart, CreateAnalysis, FarmMap } from './components';

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
  LogoutIcon,
} from './styles';

export function Dashboard() {
  const [creatingAnalysis, setCreatingAnalysis] = useState(false);
  const [addingWorker, setAddingWorker] = useState(false);

  if (creatingAnalysis)
    return <CreateAnalysis onClickBack={() => setCreatingAnalysis(false)} />;

  if (addingWorker)
    return <AddWorker onClickBack={() => setAddingWorker(false)} />;

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
              Fazenda Feliz
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
        <AddWorkerIcon onClick={() => setAddingWorker(true)} />
      </Footer>
    </Container>
  );
}
