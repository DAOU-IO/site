import type { NextPage } from 'next';
import GotoButton from '../components/GotoButton';

import { 
      Box, 
      Text, 
      Flex,
      Image,
      Link,
      Spacer,
    } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';

const Home: NextPage = () => {
  return (
    <Box bg='blackAlpha.900' w="100%" h="100vh" >
      <Box px="10vh" pt="5vh" >
        <Flex>
            <Image
              boxSize='64px'
              src='/images/you-oracle.svg'
              alt='DAOU logo'
            />
            <Spacer />
        </Flex>
        <Box pl="5vh" pt="5vh" my="20px" borderTop="1px" borderBottom="1px" borderColor='whiteAlpha.900' h='38vh' >
          <Box>
            <Text fontSize='6xl' color="whiteAlpha.900" >DAOU</Text>
          </Box>
          <Box mt="3vh" >
            <Text fontSize='6xl' color="whiteAlpha.900" >Maximize your social capital in DAOs</Text>
          </Box>
        </Box>
        <Box mt="10vh" >
          <GotoButton />
        </Box>
        <Flex mt='20vh'>
          <Text fontSize='1xl' color="whiteAlpha.900" mr="2vh" >
            Made With ❤️ By <Link href='https://twitter.com/fifteen42_' >Tingfei.</Link>
          </Text>
          <Flex>
            <Text fontSize='1xl' color="whiteAlpha.900" mr="1vh" >
              Find us on
            </Text>
            <Link href='https://github.com/DAOU-IO' pb="5px" >
              <Image
                boxSize='22px'
                src='/images/Github.png'
                alt='Github logo'
              />
            </Link>
            <Link href='https://twitter.com/daou_io' ml="5px" mt="2px" >
              <Icon icon="akar-icons:twitter-fill" color="white" width='22px' height='22px' />
            </Link>
          </Flex>
        </Flex>
      </Box>
      <LogoImage
        src="/images/bankless.png"
        bottom='40vh'
        right="-5vh"
      />
      <LogoImage
        src="/images/nation3.png"
        bottom='26vh'
        right="10vh"
      />
      <LogoImage
        src="/images/PleasrDAO.png"
        bottom='10vh'
        right="30vh"
      />
      <LogoImage
        src="/images/DeveloperDAO.jpeg"
        bottom='-5vh'
        right="45vh"
      />
    </Box>
  )
}

const LogoImage = styled(Image)`
  width: 260px;
  border: 3px solid #fff;
  border-radius: 30px;
  transform: rotate(30deg);
  position: fixed;
`;

export default Home;