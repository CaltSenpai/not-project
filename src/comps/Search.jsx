import React from 'react';
import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';

export default function SearchField(props) {
  const theme = useMantineTheme();

  return (
    <TextInput
      icon={<Search size={18} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          {theme.dir === 'ltr' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
        </ActionIcon>
      }
      placeholder="Search for a Book"
      rightSectionWidth={42}
      {...props}
    />
  );
}