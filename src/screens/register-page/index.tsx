// deps
import React from 'react';
import { Text, TextInput, Button, View } from 'react-native';

// styles
import { Container, Banner } from './styles';

// types
import { RegisterPageProps } from './types';

export function RegisterPage(props: RegisterPageProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Container>
      <Banner />
      <Text
        style={{
          position: 'absolute',
          fontSize: 24,
          fontWeight: '800',
          color: 'white',
          marginTop: 48,
          marginLeft: 32,
        }}>
        FARMAS
      </Text>

      <View style={{ flex: 1, padding: 24, paddingBottom: 48 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Bem vindo!</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 24 }}>
          Cadastre-se para começar a usar
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            marginBottom: 6,
            marginLeft: 6,
          }}>
          E-mail
        </Text>
        <TextInput
          style={{
            height: 38,
            borderWidth: 1,
            padding: 10,
            borderColor: '#F0DBE5',
            borderRadius: 6,
            marginBottom: 18,
          }}
          onChangeText={setEmail}
          value={email}
        />

        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            marginBottom: 6,
            marginLeft: 6,
          }}>
          Senha
        </Text>
        <TextInput
          style={{
            height: 38,
            borderWidth: 1,
            padding: 10,
            borderColor: '#F0DBE5',
            borderRadius: 6,
          }}
          onChangeText={setPassword}
          value={password}
        />

        <View
          style={{
            backgroundColor: '#46AC50',
            borderRadius: 6,
            padding: 12,
            marginTop: 'auto',
          }}>
          <Button color="white" title="Cadastrar" />
        </View>

        <Text style={{ textAlign: 'center', marginTop: 18 }}>
          Já possui uma conta? Entre
        </Text>
      </View>
    </Container>
  );
}
