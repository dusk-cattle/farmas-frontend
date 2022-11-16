// deps
import { useEffect, useState } from 'react';
import { Report } from '../../../../../../models';

// styles
import { Container } from './styles';

// types
import { SearchInputProps } from './types';

export function SearchInput(props: SearchInputProps) {
  const { search } = props;

  const [query, setQuery] = useState('');

  function normalizeText(
    text: string,
    options?: {
      replacementOfSpecialChar?: string;
    }
  ) {
    const defaultReplacementOfSpecialChar = ' ';
    const replacementOfSpecialCharFromOptions =
      options?.replacementOfSpecialChar;

    let replacementOfSpecialChar = defaultReplacementOfSpecialChar;

    if (replacementOfSpecialCharFromOptions !== undefined) {
      replacementOfSpecialChar = replacementOfSpecialCharFromOptions;
    }

    let normalizedText = text.toLowerCase();

    normalizedText = normalizedText
      .replace(/[áàãâä]/gi, 'a')
      .replace(/[éè¨ê]/gi, 'e')
      .replace(/[íìïî]/gi, 'i')
      .replace(/[óòöôõ]/gi, 'o')
      .replace(/[úùüû]/gi, 'u')
      .replace(/[ç]/gi, 'c')
      .replace(/[ñ]/gi, 'n')
      .replace(/[^a-zA-Z0-9]/g, replacementOfSpecialChar);

    return normalizedText;
  }

  function handleChange(event: any) {
    const value = event?.target?.value ?? '';

    setQuery(normalizeText(value).toLowerCase());
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      search?.((allReports) => {
        function composeSearchString({ date, status }: Report) {
          const formattedDate = new Date(date)
            .toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
            .replaceAll('de ', '');

          const formattedStatus =
            {
              REQUESTED: 'na fila',
              BUILDING: 'criando',
              COMPLETE: 'disponivel',
            }[status] ?? 'erro';

          return [formattedDate, formattedStatus].join(' ');
        }

        const filteredReports = allReports.filter((report) =>
          composeSearchString(report).includes(query)
        );

        filteredReports.sort((reportA, reportB) => {
          return (
            composeSearchString(reportA).indexOf(query) -
            composeSearchString(reportB).indexOf(query)
          );
        });

        return filteredReports;
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <Container
      label="Pesquisar"
      placeholder="Digite aqui"
      onChange={handleChange}
    />
  );
}
