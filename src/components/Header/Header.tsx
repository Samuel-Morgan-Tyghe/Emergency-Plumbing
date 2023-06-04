import { Flex, Link, Text } from '@chakra-ui/react'

// Defining a new function component named 'ExampleComponent'
function Header() {
  return (
    <Flex
      bg="#2A54A8"
      // boxSize={250}
      width={'100%'}
      padding={15}
      justifyContent={'space-between'}
      alignItems={'center'}
      px="120px"
      py="80px"
    >
      <Flex direction={'column'}>
        <Text
          color={'white'}
          bg="#2A54A8"
          align={'left'}
          fontWeight={700}
          fontSize="38px"
        >
          All Plumbing Emergencies
        </Text>
        <Text
          color={'white'}
          bg="#2A54A8"
          align={'left'}
          fontWeight={700}
          fontSize="28px"
        >
          Quick Service On Emergency Call 24/7
        </Text>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        gap="28px"
        fontSize="32px"
        textDecoration="underline"
        color={'white'}
      >
        <Text bg="#2A54A8" align={'right'}>
          Contact Us
        </Text>
        <Text bg="#2A54A8" align={'right'} fontWeight={700} cursor="pointer">
          <Link href="tel:+1234567890">Call: 1800 123 456</Link>
        </Text>
      </Flex>
    </Flex>
  )
}

export default Header
