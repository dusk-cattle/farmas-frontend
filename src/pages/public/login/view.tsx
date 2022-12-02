// deps
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

// usecases
import { login } from "../../../usecases";

// hooks
import { useWatchdog } from "../../../backend";

// contexts
import { ToastContext } from "../../../contexts";

// components
import { SelectFarm } from "./components";

// enums
import { Routes } from "../../../enums";

// styles
import {
  Container,
  Banner,
  LeafIcon,
  H1,
  H2,
  Input,
  Button,
  Span,
  Link,
} from "../styles";

// types
import { FormData } from "./types";

export function LoginPage() {
  const { register, handleSubmit, formState, watch } = useForm<FormData>({
    mode: "onChange",
  });

  const [emailValue, passwordValue] = watch(["email", "password"]);

  const [loading, setLoading] = useState(false);

  const { isAuthOnline } = useWatchdog();
  // TODO: remover console.log("Autenticação está online?: " + isAuthOnline);

  function validateEmailFormat(value: string) {
    return (
      !!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)?.length ||
      "E-mail inválido"
    );
  }

  const { toast } = useContext(ToastContext);

  const [selectingFarm, setSelectingFarm] = useState(false);

  async function signIn(data: FormData) {
    setLoading(true);

    try {
      const { email, password } = data;

      await login({ email, password });

      setSelectingFarm(true);
    } catch (error: any) {
      toast(error.message, "error");
    }

    setLoading(false);
  }

  return (
    <Container onSubmit={handleSubmit(signIn)}>
      <Banner>
        <LeafIcon />
        FARMAS
      </Banner>

      <H1>Bem-vindo de volta!</H1>
      <H2>Entre para usar a plataforma</H2>

      <Input
        {...register("email", {
          required: "Digite seu e-mail",
          validate: validateEmailFormat,
        })}
        label="E-mail"
        placeholder="Digite aqui"
        error={formState.errors.email?.message}
      />
      <Input
        {...register("password", { required: "Digite sua senha" })}
        label="Senha"
        type="password"
        placeholder="Digite aqui"
        error={formState.errors.password?.message}
      />

      <Button disabled={!formState.isValid || loading} type="submit">
        {loading ? "..." : "Entrar"}
      </Button>
      <Span>
        Ainda não possui uma conta?{" "}
        <Link to={Routes.REGISTER}>Registre-se</Link>
      </Span>

      {selectingFarm && (
        <SelectFarm email={emailValue} password={passwordValue} />
      )}
    </Container>
  );
}
