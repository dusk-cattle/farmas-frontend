// deps
import { useContext, useEffect, useState } from 'react';
import { ToastContext } from '../../../../contexts';

// models
import { Report } from '../../../../models';

// usecases
import { getReports } from '../../../../usecases';

// components
import { Comments, SearchInput } from './components';

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
  ReportStatusContainer,
  ReportStatusIndicator,
  ShareIcon,
} from './styles';

// types
import { ShowReportsProps } from './types';

export function ShowReports(props: ShowReportsProps) {
  const { onClickBack } = props;

  const [allReports, setAllReports] = useState<Report[]>([]);
  const [searchedReports, setSearchedReports] = useState<Report[]>([]);

  const [currentReport, setCurrentReport] = useState<string>('');
  const [currentHTML, setCurrentHTML] = useState<string>();

  const [loading, setLoading] = useState(true);

  const { toast } = useContext(ToastContext);

  useEffect(() => {
    (async () => {
      try {
        const reports = await getReports();
        setAllReports(reports);
        setSearchedReports(reports);
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

  function getCurrentReportState(report: Report) {
    switch (report.status) {
      case 'REQUESTED':
        return { text: 'Na Fila', color: 'grey' };

      case 'BUILDING':
        return { text: 'Criando', color: 'darkorange' };

      case 'COMPLETE':
        return { text: 'Disponível', color: 'green' };

      default:
        return { text: 'Erro', color: 'red' };
    }
  }

  async function share(report: Report) {
    const blob = new Blob([report.html], {
      type: 'text/html',
    });

    const file = new File([blob], `${report.date}.html`, { type: 'text/html' });

    const date = new Date(report.date).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    try {
      await window.navigator.share({
        title: `Relatório de ${date}`,
        files: [file],
      });
    } catch (err) {
      alert(err);
      console.error('Share failed:', err);
    }
  }

  function renderReports() {
    if (loading)
      return (
        <Body>
          <EmptyContainer>
            <Loading />
          </EmptyContainer>
        </Body>
      );

    if (!searchedReports.length)
      return (
        <Body>
          <EmptyContainer>
            <EmptyIllustration />
            Você não possui relatórios ainda
          </EmptyContainer>
        </Body>
      );

    const reportComponents = searchedReports.map((report, i) => {
      const date = new Date(report.date).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const state = getCurrentReportState(report);

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

          <ReportStatusContainer enabled={true}>
            <span>{state.text}</span>
            <ReportStatusIndicator color={state.color} />
          </ReportStatusContainer>

          {state.text === 'Disponível' && (
            <ReportStatusContainer
              enabled={false}
              onClick={async () => false && (await share(report))}
            >
              <ShareIcon />
            </ReportStatusContainer>
          )}
        </ReportContainer>
      );
    });

    return (
      <Body>
        <SearchInput
          search={(filterReports) =>
            setSearchedReports(filterReports(allReports))
          }
        />
        {reportComponents}
      </Body>
    );
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
