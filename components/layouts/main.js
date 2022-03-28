import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelWPLoader from '../voxel-wp-loader'

const LazyVoxelWP = dynamic(() => import('../voxel-wp'), {
    ssr: false,
    loading: () => <VoxelWPLoader />
})

const Main = ({ children, router }) => {
    return (
    <Box as="main" pb={8}>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Andrey's homepage" />
        <meta name="author" content="Andrey Nagumanov" />
        <meta name="author" content="vonamugan" />
        
        
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@imdeusexmachina" />
        <meta name="twitter:creator" content="@imdeusexmachina" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Andrey Nagumanov's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Andrey Nagumanov - Homepage</title>
        </Head>

    <NavBar path={router.asPath} />

    <Container maxW="container.md" pt={14}>
        <LazyVoxelWP />

        {children}

        <Footer />
    </Container>
    </Box>
    )
}

export default Main