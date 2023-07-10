import { Flex, Link, Text } from '@chakra-ui/react'

// Defining a new function component named 'ExampleComponent'
function Header() {
  return (
    <Flex
      bg="#2A54A8"
      // boxSize={250}
      width={'100%'}
      padding={15}
      direction={{ base: 'column', desktop: 'row' }}
      justifyContent={'space-between'}
      alignItems={'center'}
      px={{ base: '8px', tablet: '16px', desktop: '120px' }}
      py={{ base: '8px', tablet: '16px', desktop: '40px' }}
    >
      <Flex direction={'column'}>
        <Text
          color={'white'}
          bg="#2A54A8"
          align={{ base: 'center', desktop: 'left' }}
          fontWeight={700}
          fontSize="38px"
        >
          All Plumbing Emergencies
        </Text>
        <Text
          color={'white'}
          bg="#2A54A8"
          align={{ base: 'center', desktop: 'left' }}
          fontWeight={700}
          fontSize="28px"
        >
          Quick Service On Emergency Call 24/7
        </Text>
      </Flex>
      <Flex
        direction={{ base: 'column', desktop: 'row' }}
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
          <Link href="tel:+447521276803">Call: 07521 276 803</Link>
        </Text>
      </Flex>
    </Flex>
  )
}

export default Header
