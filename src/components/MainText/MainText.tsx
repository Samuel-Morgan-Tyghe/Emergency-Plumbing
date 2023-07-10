import { Box, Text } from '@chakra-ui/react'

// Defining a new function component named 'ExampleComponent'
function MainText() {
  return (
    <Box bg="white" width={'100%'} padding={'15px'}>
      <Text
        color={'black'}
        bg="white"
        align={'center'}
        fontSize={{ base: '20px', tablet: '20px', desktop: '40px' }}
      >
        WELCOME TO
      </Text>
      <Text
        color={'#2A54A8'}
        bg="white"
        align={'center'}
        fontSize="64px"
        fontWeight="800"
      >
        ALL PLUMBING EMERGENCIES
      </Text>
      <Text color={'black'} bg="white" align={'center'} fontSize="24px">
        Your reliable and trusted plumber in Oxfordshire. We understand that
        plumbing emergencies can happen at any time, which is why we offer our
        services 24/7, 365 days a year.
        <br />
        <br /> Our team of expert plumbers are fully qualified and experiences
        in dealing with all kinds of plumbing emergencies, from burst pipes and
        leaks to blocked drains. We use the latest technology and equipment to
        diagnose and resolve issues quickly and efficiently, saving you time and
        money.
      </Text>
    </Box>
  )
}

export default MainText

// LUKE for copying this file use command + f search ExampleComponent and press the > to replace all with your newly renamed component

// Dont forget to rename the file and folder + use Uppercase
