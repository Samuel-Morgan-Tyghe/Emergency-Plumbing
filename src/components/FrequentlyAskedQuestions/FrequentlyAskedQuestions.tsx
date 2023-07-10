import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'

// Defining a new function component named 'ExampleComponent'
function FrequentlyAskedQuestions() {
  const faqItems = [
    {
      faq: 'How quickly can you respond to an emergency plumbing issue?',
      answer:
        'As an emergency plumber based in Oxfordshire, we understand that plumbing issues can happen at any time and need immediate attention. We aim to reach your premises within an hour of your call, depending on traffic conditions and the distance to your location.',
    },
    {
      faq: 'What sort of plumbing emergencies do you handle?',
      answer:
        'We handle all types of plumbing emergencies. These include, but are not limited to, burst pipes, severe leaks, overflowing toilets, blocked drains, and issues with hot water systems. Our team is highly trained and equipped to tackle any emergency plumbing issue.',
    },
    {
      faq: 'Do you provide services after hours or during weekends and holidays?',
      answer:
        "Yes, we provide 24/7 emergency plumbing services, 365 days a year. We understand that plumbing emergencies can happen at any time, so we're always ready to help, whether it's late at night, on a weekend, or during a public holiday.",
    },
    {
      faq: 'How can I prevent plumbing emergencies in the future?',
      answer:
        'Regular maintenance and inspection of your plumbing system can help prevent many emergencies. Avoid throwing hard objects or non-flushable items down the toilet or sink to prevent blockages. Insulate your pipes properly to prevent them from freezing during the colder months. Also, knowing where your main water shut-off valve is located can help minimize water damage if a pipe bursts.',
    },
  ]
  return (
    <Flex
      h="100%"
      direction="column"
      justifyContent="center"
      zIndex={1}
      bg="#2A54A8"
      p={{ base: '8px', tablet: '16px', desktop: '80px' }}
    >
      <Flex
        direction="column"
        w={{ base: '100%', md: '66%' }}
        py={{ base: '16px', md: '40px' }}
        gap={{ base: '8px', tablet: '16px', desktop: '40px' }}
      >
        <Flex direction="column" gap="8px">
          <Text
            fontSize={{ base: '20px', tablet: '20px', desktop: '40px' }}
            color="white"
            fontWeight="500"
          >
            We’re here to help
          </Text>
          <Heading fontSize="61px" color="white" fontWeight="900">
            Frequently Asked Questions
          </Heading>
        </Flex>
        <Flex direction="column" gap="16px">
          {faqItems.map(({ faq, answer }, index) => (
            <Accordion
              defaultIndex={[index]}
              key={index}
              allowMultiple
              border="none"
            >
              <AccordionItem
                background="rgba(255, 255, 255, 0.1)"
                border="none"
              >
                <h2>
                  <AccordionButton justifyContent="space-between">
                    <Text color="white">{faq}</Text>
                    <AccordionIcon color="white" />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text color="white">{answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default FrequentlyAskedQuestions

// LUKE for copying this file use command + f search ExampleComponent and press the > to replace all with your newly renamed component

// Dont forget to rename the file and folder + use Uppercase
