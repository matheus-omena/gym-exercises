import { ExerciseCard } from '@components/exercise-card';
import { Group } from '@components/group';
import { HomeHeader } from '@components/home-header';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { FlatList, Heading, HStack, Text, VStack } from 'native-base';
import { useState } from 'react';

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [groups, setGroups] = useState<string[]>(['Costas', 'Biceps', 'Triceps', 'Ombro']);
  const [exercises, setExercises] = useState<string[]>([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terra',
  ]);
  const [selectedGroup, setSelectedGroup] = useState<string>('Costas');

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise');
  }

  return (
    <VStack>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={selectedGroup === item}
            onPress={() => setSelectedGroup(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 5 }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack
        //flex={1}
        px={5}
      >
        <HStack
          justifyContent='space-between'
          mb={5}
        >
          <Heading
            color='gray.200'
            fontSize='md'
            fontFamily='heading'
          >
            Exercícios
          </Heading>

          <Text
            color='gray.200'
            fontSize='sm'
          >
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard onPress={handleOpenExerciseDetails} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
      </VStack>
    </VStack>
  );
}
