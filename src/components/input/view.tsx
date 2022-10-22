// deps
import { forwardRef, useState } from 'react';

// styles
import {
  Container,
  Label,
  OpenedEyeIcon,
  ClosedEyeIcon,
  InfoIcon,
  InfoBalloon,
} from './styles';

// types
import { InputProps } from './types';

export const Input = forwardRef((props: InputProps, ref: any) => {
  const { className, label, error, unit, info, ...rest } = props;

  const [showPassword, setShowPassword] = useState<boolean | null>(
    rest.type === 'password' ? false : null
  );

  const [showInfo, setShowInfo] = useState(false);

  function renderRightIcon() {
    if (rest.type === 'substance')
      return (
        <InfoIcon
          onClick={() => {
            setShowInfo(true);

            setTimeout(() => setShowInfo(false), (info?.length ?? 0) * 100);
          }}
        />
      );

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
      {showInfo && (
        <InfoBalloon onClick={() => setShowInfo(false)}>{info}</InfoBalloon>
      )}

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
