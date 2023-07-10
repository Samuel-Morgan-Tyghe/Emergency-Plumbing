import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import Phone from '~/assets/icons/phone.svg'
import trustPilot from '~/assets/trustpilot.png'
import Emergencies from '~/components/Emergencies/Emergencies'
import FrequentlyAskedQuestions from '~/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions'
import Header from '~/components/Header/Header'
import MainImage from '~/components/MainImage/MainImage'
import MainText from '~/components/MainText/MainText'

const HomePage: React.FC = () => {
  const emergenciesText = [
    {
      title: 'Burst pipes',
      description:
        'A burst pipe can cause significant damage to your property and result in high water bills. We will quickly identify the location of the burst and repair or replace the damaged section.',
    },
    {
      title: 'Blocked Drains',
      description:
        'Blocked drains can cause water to back up and result in unpleasant odours. We use specialized equipment to clear the blockage and restore normal drainage.',
    },
    {
      title: 'Central Heating Issues',
      description:
        'Issues with central heating systems can leave your home uncomfortably cold, especially during winter. Our skilled technicians can diagnose the issue and carry out necessary repairs or replacements to ensure your home stays warm.',
    },
    {
      title: 'Leaks',
      description:
        'Leaks can occur in various places, such as pipes, taps, and toilets. We will locate the source of the leak and repair or replace the affected components to prevent further damage.',
    },
    {
      title: 'Clogged Toilets',
      description:
        'A clogged toilet can be a frustrating and messy experience, especially if it overflows. Our team can quickly clear the blockage and ensure your toilet is working properly again.',
    },
    {
      title: 'No Hot Water',
      description:
        'If you suddenly find yourself without hot water, it could be a sign of a faulty water heater or boiler. Our experts can diagnose the issue and carry out the necessary repairs or replacements to get your hot water flowing again.',
    },
  ]
  return (
    <>
      <Header />

      <Flex
        direction={{ base: 'column', desktop: 'row' }}
        paddingX={{ base: '8px', tablet: '16px', desktop: '80px' }}
        bg="#ffffff"
        overflow="auto"
      >
        <MainImage />
        <Center
          flexDirection="column"
          w="100%"
          p={{ base: '8px', tablet: '16px', desktop: '80px' }}
        >
          <Flex
            direction="column"
            fontSize={{ base: '20px', tablet: '40px', desktop: '80px' }}
            fontWeight="700"
          >
            <Heading
              fontWeight="700"
              fontSize={{ base: '20px', tablet: '40px', desktop: '80px' }}
            >
              We Fix All Your Plumbing
              <Heading
                fontWeight="700"
                color="#E83A17"
                fontSize={{ base: '20px', tablet: '40px', desktop: '80px' }}
              >
                Problems
              </Heading>
            </Heading>
          </Flex>
          <Flex
            direction={{ base: 'column', desktop: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            w="100%"
          >
            <Image src={trustPilot} alt="trustPilot" w="200px" />
            <Link href="tel:+1234567890" overflow="auto">
              <Flex
                cursor="pointer"
                bg="#E83A17"
                rounded="full"
                h="75px"
                alignItems="center"
                position="sticky"
                top="0px"
                p="16px"
              >
                <Text
                  align={'right'}
                  fontWeight={700}
                  color="white"
                  fontSize="24px"
                >
                  <Link href="tel:+447521276803">Call: 07521 276 803</Link>
                </Text>
                <Image src={Phone} />
              </Flex>
            </Link>
          </Flex>
        </Center>
      </Flex>
      <Box paddingX={{ base: '8px', tablet: '16px', desktop: '80px' }}>
        <Flex
          direction="column"
          pb={{ base: '8px', tablet: '16px', desktop: '80px' }}
        >
          <MainText></MainText>

          <SimpleGrid
            columns={{ base: 1, tablet: 2, desktop: 3 }}
            spacing={'16px'}
            gap={'16px'}
            padding={'16px'}
            width={'100%'}
            justifyItems={'center'}
          >
            {emergenciesText.map(e => (
              <Emergencies key={e}>
                <>
                  <Text fontWeight="800" fontSize="24px">
                    {e.title}
                  </Text>
                  <Text>{e.description}</Text>
                </>
              </Emergencies>
            ))}
          </SimpleGrid>
        </Flex>

        {/* <Flex p="4">
          <Heading size="lg">All Emergency Plumbing</Heading>
          <Spacer />
          <HStack spacing="4">
            <Link href="mailto:contact@allemergencyplumbing.com">
              Contact Us
            </Link>
            <Link href="tel:18001234567">Call: 1800 123 4567</Link>
          </HStack>
        </Flex>
        <VStack align="center" spacing="8" p="8">
          <Text fontSize="2xl">
            24/7 Emergency Plumbing Services For All Your Urgent Needs
          </Text>
          <Image
            src="/emergency-plumber.jpg"
            alt="All Emergency Plumbing"
            boxSize="400px"
          />
          <Text>
            Our team of licensed and experienced plumbers is available around
            the clock to provide fast, reliable, and affordable plumbing
            services for your home or business. No job is too big or too small,
            and we always prioritize emergencies.
          </Text>
          <Button
            as={Link}
            href="mailto:contact@allemergencyplumbing.com"
            colorScheme="#2A54A8"
          >
            Contact Us Now
          </Button>
          <Heading size="lg">Customer Reviews</Heading>
          <Reviews />
        </VStack>
        <Heading as="h2" size="lg" fontWeight="bold" marginBottom={4}>
          Customer Reviews
        </Heading>
        <TrustPilot />

        <Text fontSize="sm" marginBottom={4}>
          © {new Date().getFullYear()} All Emergency Plumbing. All rights
          reserved.
        </Text>
        <Box bg="gray.200" py={12} px={6}>
          <VStack spacing={6} textAlign="center" maxW="800px" mx="auto">
            <Heading size="xl">Need An Emergency Plumber?</Heading>
            <Text fontSize="lg">
              If you have a plumbing emergency, we're here to help. Our team of
              experts is available 24/7 to handle any plumbing issue you may be
              facing. From burst pipes to sewer backups, we've got you covered.
            </Text>
            <Button
              as={Link}
              href="tel:18001234567"
              colorScheme="#2A54A8"
              size="lg"
              fontWeight="bold"
            >
              Call Now: 1800 123 4567
            </Button>
          </VStack>
        </Box> */}
      </Box>
      <FrequentlyAskedQuestions />
    </>
  )
}

export default HomePage
