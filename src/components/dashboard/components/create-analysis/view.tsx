// deps
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

// models
import { Substance } from '../../../../models';

// usecases
import { getSubstances, postAnalysis } from '../../../../usecases';

// components
import { Input, SelectSubstance } from '../../..';

// styles
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  Title,
  Form,
  PlusIcon,
  SubmitButton,
} from './styles';

// types
import { CreateAnalysisProps } from './types';

export function CreateAnalysis(props: CreateAnalysisProps) {
  const { onClickBack } = props;

  const { handleSubmit, register, formState } = useForm({ mode: 'onChange' });

  const [allSubstances, setAllSubstances] = useState<Substance[]>([]);

  useEffect(() => {
    (async () => {
      setAllSubstances(await getSubstances());
    })();
  }, []);

  const [selectedSubstances, setSelectedSubstances] = useState<Substance[]>([]);

  const notSelectedSubstances = useMemo(
    () =>
      allSubstances.filter(
        (substance) => !selectedSubstances.some(({ id }) => substance.id === id)
      ),
    [allSubstances, selectedSubstances]
  );

  const [showSelector, setShowSelector] = useState(false);

  async function createAnalysis(data: Record<string, number>) {
    try {
      await postAnalysis(data);
    } catch (e) {}
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={onClickBack}>
          <BackIcon />
        </BackButton>
        <Title>Nova Análise de Solo</Title>
      </Header>

      <Form onSubmit={handleSubmit(createAnalysis)}>
        {selectedSubstances.map((substance) => (
          <Input
            {...register(substance.id, { required: true })}
            key={substance.id}
            name={substance.id}
            label={substance.name}
            type="number"
          />
        ))}

        {showSelector && (
          <SelectSubstance
            substances={notSelectedSubstances}
            onSelect={(substanceID) => {
              setSelectedSubstances((prev) => {
                const newSelectedSubstances = [...prev];

                const substance = allSubstances.find(
                  ({ id }) => substanceID === id
                );

                if (substance) newSelectedSubstances.push(substance);

                return newSelectedSubstances;
              });

              setShowSelector(false);
            }}
          />
        )}

        {!showSelector && !!notSelectedSubstances.length && (
          <PlusIcon onClick={() => setShowSelector(true)} />
        )}

        <SubmitButton
          disabled={!formState.isValid || !formState.isDirty}
          type="submit"
        >
          Gerar análise
        </SubmitButton>
      </Form>
    </Container>
  );
}
