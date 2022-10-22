// deps
import { useState } from 'react';

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
} from './styles';

export function Dashboard() {
  const [creatingAnalysis, setCreatingAnalysis] = useState(false);

  if (creatingAnalysis)
    return <CreateAnalysis onClickBack={() => setCreatingAnalysis(false)} />;

  return (
    <Container>
      <Body>
        <Map>
          <Header>
            <Title>Fazenda Feliz</Title>
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
