// deps
import React from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import { Link } from 'react-router-native';

// styles
import { Container, Banner } from './styles';

// types
import { RegisterPageProps } from './types';

export function RegisterPage(props: RegisterPageProps) {
  const [name, setName] = React.useState('');
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
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Olá!</Text>
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
          Nome
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
          onChangeText={setName}
          value={name}
        />

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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 18,
          }}>
          <Text>Já possui uma conta? </Text>
          <Link to="login">
            <Text
              style={{
                color: '#46AC50',
              }}>
              Entre
            </Text>
          </Link>
        </View>
      </View>
    </Container>
  );
}
