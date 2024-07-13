import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/input';
import { Button } from '@components/button';
import { useNavigation } from '@react-navigation/native';

export function SignUp() {
  const navigation = useNavigation();

  function handleGoBackToLogin() {
    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        flex={1}
        bg='gray.700'
        px={5}
      >
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt='Pessoas treinando'
          //resizeMode='contain'
          position='absolute'
        />

        <Center my={24}>
          <LogoSvg />

          <Text
            color='gray.100'
            fontSize='sm'
          >
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading
            color='gray.100'
            fontSize='xl'
            mb={6}
            fontFamily='displayHeading'
          >
            Crie sua conta
          </Heading>

          <Input placeholder='Nome' />
          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            placeholder='Senha'
            secureTextEntry
          />
          <Input
            placeholder='Confirme sua senha'
            secureTextEntry
          />

          <Button title='Criar e acessar' />
        </Center>

        <Center mt={24}>
          <Button
            title='Voltar para o login'
            variant='outline'
            onPress={handleGoBackToLogin}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
