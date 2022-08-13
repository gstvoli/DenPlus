import { Input as NBInput, IInputProps, Fade} from "native-base"

export function Input({...rest}: IInputProps){
  return(
    <NBInput 
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="lightBlue.400"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700"
      }}
      {...rest}
    />
  )
}