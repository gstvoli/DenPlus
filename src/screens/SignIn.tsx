import { useState } from 'react';
import { Alert } from 'react-native';
import Auth from '@react-native-firebase/auth';
import { VStack, Heading, Icon, useTheme} from 'native-base';
import { UserCircle, Key } from 'phosphor-react-native';

import { Input } from '../components/Input';
import { Button } from '../components/Button';


export function SignIn(){
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();

  function handleSignIn(){
    if (!email || !password){
      return Alert.alert('Entrar', 'Informe o e-mail e senha!');
    }

    setIsLoading(true);
    Auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error.code);
        setIsLoading(false);
        if(error.code === 'auth/invalid-email'){
          return Alert.alert('Entrar','E-mail inválido.');
        }

        if(error.code === 'auth/wrong-password'){
          return Alert.alert('Entrar','E-mail ou senha inválida.');
        }

        if(error.code === 'auth/user-not-found'){
          return Alert.alert('Entrar','E-mail ou senha inválida.');
        }

        return Alert.alert('Entrar','Não foi possível acessar.')
      });
  };

  return (
    <VStack flex={1} alignItems="center" bg="blue.700" px={8} pt={24}>
      <Heading color="white" fontSize="xl" mt={20} mb={6}>
        Faça seu Login!
      </Heading>

      <Input 
        placeholder='E-mail'
        mb={4}
        InputLeftElement={<Icon as={<UserCircle color={colors.blue[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setEmail}
      />
      <Input
        mb={8}
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.blue[300]} />} ml={4}/>}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Entrar" w={'full'} onPress={handleSignIn} isLoading={isLoading}/>
    </VStack>
  )
}
