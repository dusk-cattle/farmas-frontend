// deps
import { useContext, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

// models
import { Substance } from "../../../../models";

// usecases
import { getSubstances, postAnalysis } from "../../../../usecases";

// contexts
import { ToastContext } from "../../../../contexts";

// components
import { Input, SelectSubstance, WarnIcon } from "../../..";

// styles
import {
  Container,
  Header,
  BackButton,
  BackIcon,
  Title,
  Form,
  InputContainer,
  CloseIcon,
  PlusIcon,
  SubmitButton,
  SubstanceInput,
} from "./styles";

// types
import { CreateAnalysisProps, FormData } from "./types";
import { SubstanceController, useWatchdog } from "../../../../backend";

const birthDateFormat = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/g;

function formatToDate(value: string, separator: string = ".") {
  const filteredValue = value.replace(/[^0-9]/g, "");
  const cuttedValue = filteredValue.substring(0, 8);

  const daySlice = cuttedValue.slice(0, 2);
  const monthSlice = cuttedValue.slice(2, 4);
  const yearSlice = cuttedValue.slice(4, 8);

  const slices: string[] = [];
  if (daySlice !== "") slices.push(daySlice);
  if (monthSlice !== "") slices.push(monthSlice);
  if (yearSlice !== "") slices.push(yearSlice);

  const formattedDate = slices.join(separator);

  return formattedDate;
}

export function CreateAnalysis(props: CreateAnalysisProps) {
  const { onClickBack } = props;

  const { handleSubmit, register, formState, unregister, trigger } =
    useForm<FormData>({
      mode: "onChange",
    });

  const [allSubstances, setAllSubstances] = useState<Substance[]>([]);

  const { toast } = useContext(ToastContext);

  useEffect(() => {
    (async () => {
      const susbtances = await SubstanceController.getSubstances();

      if (!susbtances.length)
        return toast("Não foi possível carregar as substâncias", "error");
      setAllSubstances(susbtances);
    })();
  }, [toast]);

  const [selectedSubstances, setSelectedSubstances] = useState<Substance[]>([]);

  const notSelectedSubstances = useMemo(
    () =>
      allSubstances.filter(
        (substance) => !selectedSubstances.some(({ id }) => substance.id === id)
      ),
    [allSubstances, selectedSubstances]
  );

  const [showSelector, setShowSelector] = useState(false);

  async function createAnalysis(data: FormData) {
    try {
      const { timestamp, ...substances } = data;

      const [month, day, year] = timestamp.split(".");

      await postAnalysis({
        substances,
        timestamp: new Date([day, month, year].join("/")),
      });

      toast("Análise enviada com sucesso!", "success");

      onClickBack?.();
    } catch (e) {
      toast("Ocorreu um erro para enviar a análise", "error");
    }
  }

  function validateTimestampInput(value: string) {
    return !!value.match(birthDateFormat)?.length;
  }

  function handleTimestampChange(event: any) {
    const inputValue: string = event?.target?.value || "";
    const formattedDate = formatToDate(inputValue);

    event.target.value = formattedDate;

    trigger("birthDate");
  }

  const { isAnalysisOnline: isOnline } = useWatchdog();

  const offlineMessage =
    "As análises podem ser cadastradas, mas não serão exibidas enquanto você estiver fora do ar.";

  useEffect(() => {
    if (!isOnline) toast(offlineMessage, "error", 6000);
  }, [isOnline]);

  return (
    <Container>
      <Header>
        <BackButton onClick={onClickBack}>
          <BackIcon />
        </BackButton>
        <Title>Nova Análise de Solo</Title>

        {!isOnline && <WarnIcon message={offlineMessage} />}
      </Header>

      <Form onSubmit={handleSubmit(createAnalysis)}>
        <Input
          {...register("timestamp", {
            required: true,
            validate: validateTimestampInput,
          })}
          name="timestamp"
          label="Data"
          placeholder="DD.MM.AAAA"
          onChange={handleTimestampChange}
        />

        {selectedSubstances.map((substance) => (
          <InputContainer key={substance.id}>
            <SubstanceInput
              {...register(substance.id, { required: true })}
              key={substance.id}
              name={substance.id}
              label={substance.name}
              unit={substance.unit}
              type="substance"
              info={substance.description}
              placeholder="Digite aqui"
              className="substance-input"
            />

            <CloseIcon
              onClick={() => {
                setSelectedSubstances((prev) => {
                  const newSelectedSubstances = [...prev];

                  unregister(substance.id);

                  return newSelectedSubstances.filter(
                    ({ id }) => substance.id !== id
                  );
                });
              }}
            />
          </InputContainer>
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
