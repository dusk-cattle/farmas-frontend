// deps
import { useState } from 'react';

// usecases
import { logout } from '../../usecases';

// components
import { Chart, CreateAnalysis } from './components';

// styles
import {
  Container,
  Body,
  Map,
  Header,
  Title,
  FarmContainer,
  EmptyTitle,
  EmptyDescription,
  CreateAnalysisButton,
  FileIcon,
  LogoutIcon,
} from './styles';

export function Dashboard() {
  const [creatingAnalysis, setCreatingAnalysis] = useState(false);

  if (creatingAnalysis)
    return <CreateAnalysis onClickBack={() => setCreatingAnalysis(false)} />;

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
            <EmptyTitle>Nada para exibir</EmptyTitle>
            <EmptyDescription>
              Não há dados suficientes para
              <br />
              exibir sua fazenda
            </EmptyDescription>
          </FarmContainer>
        </Map>

        <Chart />
      </Body>

      <CreateAnalysisButton onClick={() => setCreatingAnalysis(true)}>
        <FileIcon />
      </CreateAnalysisButton>
    </Container>
  );
}
