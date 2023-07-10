import { Box, Image } from '@chakra-ui/react'
import plumbingImage from '~/assets/plumbingImage.jpg'

// Defining a new function component named 'ExampleComponent'
function MainImage() {
  return (
    <Box w="100%">
      <Image src={plumbingImage} alt="Main Image" />
    </Box>
  )
}

export default MainImage

// LUKE for copying this file use command + f search ExampleComponent and press the > to replace all with your newly renamed component

// Dont forget to rename the file and folder + use Uppercase
