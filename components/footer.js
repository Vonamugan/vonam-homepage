import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Andrey Nagumanov. All Rights Reserved.<br />
      Thanks Takuya Matsuyama for inspiration.
    </Box>
    
  )
}

export default Footer