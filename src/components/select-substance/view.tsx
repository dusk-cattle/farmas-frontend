// deps
import React from 'react';
import { useController } from 'react-hook-form';

// models
import { Substance } from '../../models';

// styles
import {
  Container,
  Label,
  Selected,
  ArrowIcon,
  DropBox,
  Option,
  Checkbox,
} from './styles';

// types
import { SelectSubstanceProps } from './types';

export function SelectSubstance(props: SelectSubstanceProps) {
  const { substances, onSelect, id } = props;

  const [selected, setSelected] = React.useState<Substance>();

  const [active, setActive] = React.useState(false);

  function toggleDropBox() {
    setActive(!active);
  }

  const ref = React.useRef<HTMLDivElement>(null);

  function renderOptions() {
    const options = substances.map((substance, index) => {
      function handleClick() {
        const selectElement = ref.current
          ?.getElementsByTagName('select')
          .item(0);
        if (selectElement) selectElement.value = substance.id.toString();

        setSelected(substance);

        onSelect?.(substance.id);

        toggleDropBox();
      }

      const isSelected = selected?.id === substance.id;

      return (
        <Option key={index} selected={isSelected} onClick={handleClick}>
          {substance.name}

          <Checkbox />
        </Option>
      );
    });

    return options;
  }

  function renderDropbox() {
    if (!active) return null;

    return (
      <DropBox onClick={(e) => e.stopPropagation()}>{renderOptions()}</DropBox>
    );
  }

  const selectedText = selected?.name;

  function renderContent() {
    return (
      <>
        <Selected>{selectedText}</Selected>
        <ArrowIcon isActive={active} />

        {renderDropbox()}
      </>
    );
  }

  function renderTrueSelect() {
    return (
      <select id={id} style={{ display: 'none' }}>
        {substances.map(({ id, name }, index) => (
          <option key={index} value={id}>
            {name}
          </option>
        ))}
      </select>
    );
  }

  return (
    <Container ref={ref} id={id} isActive={active} onClick={toggleDropBox}>
      {renderTrueSelect()}

      <Label>Selecione a substância</Label>

      {renderContent()}
    </Container>
  );
}
