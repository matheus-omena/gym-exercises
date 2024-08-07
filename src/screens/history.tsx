import { HistoryCard } from '@components/history-card';
import { ScreenHeader } from '@components/screen-header';
import { Heading, VStack, SectionList, Text } from 'native-base';
import { useState } from 'react';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '26.08.24',
      data: ['Puxada frontal', 'Remada unilateral'],
    },
    {
      title: '25.08.24',
      data: ['Puxada frontal'],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de exercícios' />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color='gray.200'
            fontSize='md'
            mt={10}
            mb={3}
            fontFamily='heading'
          >
            {section.title}
          </Heading>
        )}
        px={5}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <Text
            color='gray.100'
            textAlign='center'
          >
            Não há exercícios registrados ainda.{'\n'}Vamos fazer exercícios hoje?
          </Text>
        )}
      />
    </VStack>
  );
}
