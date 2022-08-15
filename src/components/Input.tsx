import { Input as NBInput, IInputProps} from "native-base"

export function Input({...rest}: IInputProps){
  return(
    <NBInput 
      bg="gray.100"
      h={14}
      size="md"
      borderWidth={1}
      fontSize="md"
      fontFamily="body"
      placeholderTextColor="white.100"
      _focus={{
        borderWidth: 1,
        borderColor: "cGray.100",
        bg: "gray.700"
      }}
      {...rest}
    />
  )
}