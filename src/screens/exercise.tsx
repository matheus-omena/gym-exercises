import { Box, Heading, HStack, Icon, Image, Text, VStack } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { useNavigation } from '@react-navigation/native';

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/button';

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <ScrollView>
        <VStack
          px={5}
          bg='gray.600'
          pt={12}
        >
          <TouchableOpacity onPress={handleGoBack}>
            <Icon
              as={Feather}
              name='arrow-left'
              color='green.500'
              size={6}
            />
          </TouchableOpacity>

          <HStack
            justifyContent='space-between'
            mt={4}
            mb={8}
            alignItems='center'
          >
            <Heading
              color='gray.100'
              fontSize='lg'
              flexShrink={1}
              fontFamily='heading'
            >
              Puxada frontal
            </Heading>

            <HStack alignItems='center'>
              <BodySvg />
              <Text
                color='gray.200'
                ml={1}
                textTransform='capitalize'
              >
                Costas
              </Text>
            </HStack>
          </HStack>
        </VStack>

        <VStack p={5}>
          <Image
            source={{
              uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg',
            }}
            alt='Imagem do exercício'
            w='full'
            h={80}
            rounded='lg'
            mb={3}
            resizeMode='cover'
          />

          <Box
            bg='gray.600'
            rounded='md'
            pb={4}
            px={4}
          >
            <HStack
              alignItems='center'
              justifyContent='space-around'
              mb={6}
              mt={5}
            >
              <HStack>
                <SeriesSvg />
                <Text
                  color='gray.200'
                  ml={2}
                >
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text
                  color='gray.200'
                  ml={2}
                >
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title='Marcar como realizado' />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
