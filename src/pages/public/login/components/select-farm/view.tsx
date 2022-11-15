// deps
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// models
import { Farm } from '../../../../../models';

// usecases
import { getFarms, login } from '../../../../../usecases';

// enums
import { Routes } from '../../../../../enums';

// styles
import {
  Container,
  Title,
  Option,
  PlantIcon,
  Loading,
  NewFarmButton,
  LockIcon,
} from './styles';

// types
import { SelectFarmProps } from './types';

export function SelectFarm(props: SelectFarmProps) {
  const { email, password } = props;

  const [farms, setFarms] = useState<Farm[]>([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const _farms = await getFarms();

        if (!_farms.length) navigate(Routes.ROOT);

        setFarms(_farms);
      } catch (e) {
        navigate(Routes.ROOT);
      }

      setLoading(false);
    })();
  }, []);

  async function selectFarm(farmID: string) {
    setLoading(true);

    await login({ email, password, resourceId: farmID });

    setLoading(false);

    navigate(Routes.ROOT);
  }

  function renderOptions() {
    return farms.map((farm, i) => (
      <Option key={i} onClick={() => selectFarm(farm.id)}>
        {farm.name}
        <PlantIcon />
      </Option>
    ));
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title>Selecione a fazenda para continuar</Title>

          {renderOptions()}

          <NewFarmButton>
            <LockIcon />
            Nova fazenda
          </NewFarmButton>
        </>
      )}
    </Container>
  );
}
