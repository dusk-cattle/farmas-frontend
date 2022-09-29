// styles
import { Container, Label } from './styles';

// types
import { InputProps } from './types';

export function Input(props: InputProps) {
  const { className, label, ...rest } = props;

  return (
    <Container className={className}>
      <Label htmlFor={rest.id}>{label}</Label>
      <input {...rest} />
    </Container>
  );
}
