// deps
import { useEffect, useState } from 'react';

// models
import { Report } from '../../../../models';

// usecases
import { getReports } from '../../../../usecases';

// styles
import { Container, Header, BackButton, BackIcon, Title } from './styles';

// types
import { ShowReportsProps } from './types';

export function ShowReports(props: ShowReportsProps) {
  const { onClickBack } = props;

  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    (async () => {
      setReports(await getReports());
    })();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onClick={onClickBack}>
          <BackIcon />
        </BackButton>
        <Title>Relatórios</Title>
      </Header>
    </Container>
  );
}
