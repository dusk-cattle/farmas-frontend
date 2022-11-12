// deps
import { useEffect, useState } from "react";

// models
import { Report } from "../../../../models";

// usecases
import { getReports } from "../../../../usecases";

// components
import { Comments } from "./components";

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
} from "./styles";

// types
import { ShowReportsProps } from "./types";

export function ShowReports(props: ShowReportsProps) {
  const { onClickBack } = props;

  const [reports, setReports] = useState<Report[]>([]);

  const [currentReport, setCurrentReport] = useState<string>("");
  const [currentHTML, setCurrentHTML] = useState<string>();

  useEffect(() => {
    (async () => {
      setReports(await getReports());
    })();
  }, []);

  const [showComments, setShowComments] = useState(false);

  if (showComments) return <Comments reportId={currentReport} />;

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
        <Body>
          {!currentHTML &&
            reports.map((report, i) => {
              const date = new Date(report.date).toLocaleDateString("pt-BR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
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
            })}
        </Body>
      )}
    </Container>
  );
}
