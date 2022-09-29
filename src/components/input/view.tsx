// deps
import { useState } from 'react';

// styles
import { Container, Label, OpenedEyeIcon, ClosedEyeIcon } from './styles';

// types
import { InputProps } from './types';

export function Input(props: InputProps) {
  const { className, label, ...rest } = props;

  const [showPassword, setShowPassword] = useState<boolean | null>(
    rest.type === 'password' ? false : null
  );

  function renderEye() {
    if (showPassword === null) return null;

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    if (showPassword) return <OpenedEyeIcon onClick={toggleShowPassword} />;
    else return <ClosedEyeIcon onClick={toggleShowPassword} />;
  }

  return (
    <Container className={className}>
      <Label htmlFor={rest.id}>{label}</Label>
      <input {...rest} type={showPassword ? 'text' : rest.type} />
      {renderEye()}
    </Container>
  );
}
