// deps
import { useContext, useEffect, useState } from 'react';
import { ToastContext } from '../../../../contexts';

// models
import { Report } from '../../../../models';

// usecases
import { getReports } from '../../../../usecases';

// components
import { Comments } from './components';

// styles
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  Title,
  Body,
  PDFContainer,
  ReportContainer,
  PDFIcon,
  CommentIcon,
  EmptyContainer,
  EmptyIllustration,
  Loading,
} from './styles';

// types
import { ShowReportsProps } from './types';

export function ShowReports(props: ShowReportsProps) {
  const { onClickBack } = props;

  const [reports, setReports] = useState<Report[]>([]);

  const [currentReport, setCurrentReport] = useState<string>('');
  const [currentHTML, setCurrentHTML] = useState<string>();

  const [loading, setLoading] = useState(true);

  const { toast } = useContext(ToastContext);

  useEffect(() => {
    (async () => {
      try {
        setReports(await getReports());
      } catch (error: any) {
        toast(error.message, 'error');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const [showComments, setShowComments] = useState(false);

  if (showComments)
    return (
      <Comments
        reportID={currentReport}
        onClickBack={() => setShowComments(false)}
      />
    );

  function renderReports() {
    if (loading)
      return (
        <Body>
          <EmptyContainer>
            <Loading />
          </EmptyContainer>
        </Body>
      );

    if (!reports.length)
      return (
        <Body>
          <EmptyContainer>
            <EmptyIllustration />
            Você não possui relatórios ainda
          </EmptyContainer>
        </Body>
      );

    const reportCopmponents = reports.map((report, i) => {
      const date = new Date(report.date).toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      return (
        <ReportContainer
          key={i}
          onClick={() => {
            setCurrentHTML(report.html);
            setCurrentReport(report.id);
          }}
        >
          <PDFIcon />
          {date}
        </ReportContainer>
      );
    });

    return <Body>{reportCopmponents}</Body>;
  }

  return (
    <Container>
      <Header>
        <BackButton
          onClick={() => {
            if (currentHTML) setCurrentHTML(undefined);
            else onClickBack?.();
          }}
        >
          <BackIcon />
        </BackButton>
        <Title>Relatórios</Title>
        {currentHTML && <CommentIcon onClick={() => setShowComments(true)} />}
      </Header>

      {currentHTML ? (
        <PDFContainer
          dangerouslySetInnerHTML={
            currentHTML ? { __html: currentHTML } : undefined
          }
        />
      ) : (
        renderReports()
      )}
    </Container>
  );
}
