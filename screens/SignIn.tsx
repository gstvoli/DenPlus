import { useState } from 'react'
import { Alert } from 'react-native'
import { VStack, Heading, Icon, useTheme} from 'native-base'
import { UserCircle, Key } from 'phosphor-react-native'

import { Input } from '../components/Input'
import { Button } from '../components/Button'


export function SignIn(){
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { colors } = useTheme();

  function handleSignIn(){
    if (!email || !password){
      return Alert.alert('Entrar', 'Informe o e-mail e senha!');
    }
  }

  return (
    <VStack flex={1} alignItems="center" bg="blue.300" px={8} pt={24}>
      <Heading color="white" fontSize="x1" mt={20} mb={6}>
        Faça seu Login!
      </Heading>

      <Input 
        placeholder='E-mail'
        mb={4}
        InputLeftElement={<Icon as={<UserCircle color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Entrar" w={'full'} onPress={handleSignIn} isLoading={isLoading}/>
    </VStack>
  )
}
