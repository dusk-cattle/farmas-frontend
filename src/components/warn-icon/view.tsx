// styles
import { useState } from 'react';
import { Container, Icon, Tooltip } from './styles';

// types
import { WarnIconProps } from './types';

export function WarnIcon(props: WarnIconProps) {
  const { message } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Icon onClick={() => setIsOpen(true)} />
      {isOpen && <Tooltip>{message}</Tooltip>}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '30',
          }}
        />
      )}
    </Container>
  );
}
