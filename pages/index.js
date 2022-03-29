import {
	Link,
	Container,
	Heading,
	Box,
	
	Button,
	List,
	ListItem,
	useColorModeValue,
	chakra
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Image from 'next/image'


const ProfileImage = chakra(Image, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
	return (
		<Layout>
		<Container>
			<Box borderRadius="lg"
        		mb={6}
        		p={3}
        		textAlign="center"
        		bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
				Hello, I&apos;m a Junior Front End Developer based in Czech!
			</Box>

			<Box display={{md:'flex'}}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Andrey Nagumanov
					</Heading>
					<p>Digital Craftsman <br /> ( Engineer/ Developer / Designer )</p>
				</Box>
				
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/andrey.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
			</Box>

			<Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Andrey is an engineer and a developer based in Brno with a 
        passion for building digital services/stuff he wants. 
        He is interested in all things launching products, 
        from planning and design to solving real problems 
        with code. If you too are trying to build something great, something that matters, let&apos;s get in contact via e.g.{' '}
          
            <Link href="https://www.linkedin.com/in/andrey-nagumanov/" target="_blank">LinkedIn</Link>
          
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
	  <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Mykolaiv (Никола́ев), Ukraine.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the Bachelor&apos;s Program in the Kazan National Research Technical University named after A.N.Tupolev
          (Казанский национальный исследовательский технический университет имени А. Н. Туполева)
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at Implant Ltd. (Medical Devices)
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Compliting the Master&apos;s Program in the Brno University of Technology (Vysoké učení technické v Brně)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,
            Drawing,
            Playing Video Games,
          Machine Learning,
          Cinematograph
        </Paragraph>
      </Section>
	  <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Vonamugan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                @vonamugan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/andrey-nagumanov/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoLinkedin />}
              >
                @andrey-nagumanov
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/ImDeusExMachina" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoTwitter />}
              >
                @ImDeusExMachina
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/vonamugan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoInstagram />}
              >
                @vonamugan
              </Button>
            </Link>
          </ListItem>
        </List>

        

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
		</Container>
		</Layout>
	)
}

export default Home
export { getServerSideProps } from '../components/chakra'

