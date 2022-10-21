// deps
import { forwardRef, useState } from 'react';

// styles
import {
  Container,
  Label,
  OpenedEyeIcon,
  ClosedEyeIcon,
  InfoIcon,
} from './styles';

// types
import { InputProps } from './types';

export const Input = forwardRef((props: InputProps, ref: any) => {
  const { className, label, error, unit, info, ...rest } = props;

  const [showPassword, setShowPassword] = useState<boolean | null>(
    rest.type === 'password' ? false : null
  );

  function renderRightIcon() {
    // if (rest.type === 'substance') return <InfoIcon onClick={() => {}} />;

    if (showPassword === null) return null;

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    if (showPassword) return <OpenedEyeIcon onClick={toggleShowPassword} />;
    else return <ClosedEyeIcon onClick={toggleShowPassword} />;
  }

  return (
    <Container
      className={className}
      error={!!error}
      gap={rest.type === 'substance' ? 0.5 : 1}
    >
      <Label htmlFor={rest.id}>{label}</Label>
      <input
        ref={ref}
        {...rest}
        type={
          showPassword
            ? 'text'
            : rest.type === 'substance'
            ? 'number'
            : rest.type
        }
      />
      {unit}
      {renderRightIcon()}
    </Container>
  );
});
