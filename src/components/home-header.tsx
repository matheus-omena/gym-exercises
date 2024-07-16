import { Heading, HStack, Icon, Text, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from './user-photo';
import { TouchableOpacity } from 'react-native';

export function HomeHeader() {
  return (
    <HStack
      bg='gray.600'
      pt={16}
      pb={5}
      px={5}
      alignItems='center'
    >
      <UserPhoto
        source={{
          uri: 'https://github.com/matheus-omena.png',
        }}
        alt='Imagem do usuário'
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text
          color='gray.100'
          fontSize='md'
        >
          Olá,
        </Text>

        <Heading
          color='gray.100'
          fontSize='md'
          fontFamily='heading'
        >
          Matheus
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name='logout'
          color='gray.200'
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  );
}
