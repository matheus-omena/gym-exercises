import { Button } from '@components/button';
import { Input } from '@components/input';
import { ScreenHeader } from '@components/screen-header';
import { UserPhoto } from '@components/user-photo';
import { Center, Heading, ScrollView, Skeleton, Text, useToast, VStack } from 'native-base';
import { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PHOTO_SIZE = 33;

export function Profile() {
  const toast = useToast();

  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState('https://github.com/matheus-omena.png');

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);
    try {
      const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (selectedPhoto.canceled) {
        return;
      }

      if (selectedPhoto.assets[0].uri) {
        if (
          selectedPhoto.assets[0].fileSize &&
          selectedPhoto.assets[0].fileSize / 1024 / 1024 > 3
        ) {
          return toast.show({
            title: 'Tamanho máximo permitido: 3MB',
            placement: 'top',
            bgColor: 'red.500',
          });
        }

        setUserPhoto(selectedPhoto.assets[0].uri);
      }
    } catch (error) {
    } finally {
      setPhotoIsLoading(false);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />

      <ScrollView>
        <Center
          mt={6}
          px={5}
        >
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded='full'
              startColor='gray.500'
              endColor='gray.400'
            />
          ) : (
            <UserPhoto
              source={{
                uri: userPhoto,
              }}
              alt='Foto do usuário'
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color='green.500'
              fontWeight='bold'
              fontSize='md'
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input
            placeholder='Nome'
            bg='gray.600'
          />
          <Input
            placeholder='E-mail'
            bg='gray.600'
            value='matheus.omena@gmail.com'
            isDisabled={true}
          />
        </Center>

        <VStack
          px={5}
          mt={12}
        >
          <Heading
            color='gray.200'
            fontSize='md'
            mb={2}
            fontFamily='heading'
          >
            Alterar senha
          </Heading>

          <Input
            bg='gray.600'
            placeholder='Senha antiga'
            secureTextEntry
          />
          <Input
            bg='gray.600'
            placeholder='Nova senha'
            secureTextEntry
          />
          <Input
            bg='gray.600'
            placeholder='Confirme a nova senha'
            secureTextEntry
          />

          <Button
            title='Atualizar'
            mt={4}
            mb={10}
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
