import { Center } from '@chakra-ui/react'

// Defining a new function component named 'ExampleComponent'
function Emergencies({ children }: any) {
  return (
    <Center
      flexDirection="column"
      bg="#E83A17"
      shadow="0px 4px 4px 3px rgba(0, 0, 0, 0.25)"
      rounded="16px"
      gap="16px"
      p="32px"
      color="white"
      w="320px"
      h="320px"
      textAlign="center"
    >
      {children}
    </Center>
  )
}
export default Emergencies

// LUKE for copying this file use command + f search ExampleComponent and press the > to replace all with your newly renamed component

// Dont forget to rename the file and folder + use Uppercase
