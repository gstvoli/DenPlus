import { useState } from 'react'
import { Alert } from 'react-native'
import { VStack, Heading, Icon, useTheme} from 'native-base'
import { UserCircle, Key } from 'phosphor-react-native'


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
      
    </VStack>
  )
}
