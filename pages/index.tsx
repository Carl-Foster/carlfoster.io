import React from 'react'
import Head from 'next/head'
import { Box, Heading, Flex, IconButton, ThemeProvider, CSSReset, Link } from '@chakra-ui/core'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import theme from '../theme'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Flex as="main" height="100vh" align="center" justify="center" backgroundColor={theme.colors.teal["800"]}>
        <Box>
          <Heading color={theme.colors.gray["50"]}>Carl Foster</Heading>
          <Flex align="center" justify="center">
            <Link href="mailto:carl@carlfoster.io">
              <IconButton aria-label="Email me" icon="email" variant="link" size="lg" variantColor="gray" />
            </Link>
            <Link href="https://github.com/Carl-Foster">
              <IconButton aria-label="GitHub Profile" icon={GoMarkGithub} variant="link" size="lg" variantColor="gray" />
            </Link>
            <Link href="https://www.linkedin.com/in/carl-foster-4b5268112/">
              <IconButton aria-label="LinkedIn" icon={FaLinkedin} variant="link" size="lg" variantColor="gray" />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </ThemeProvider>
  </>
)

export default Home
