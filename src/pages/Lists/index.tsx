import React from 'react';

import SelectInput from '../../components/SelectInput';

import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';

const List: React.FC = () => {
  const names = [
    {value: 'Igor', label: 'Igor'},
    {value: 'Hendyara', label: 'Hendyara'},
    {value: 'João Miguel', label: 'João Miguel'},
  ];
  
  const years = [
    {value: 2018, label: 2018},
    {value: 2019, label: 2019},
    {value: 2020, label: 2020},
    {value: 2021, label: 2021},
  ];

  return (
    <Container>
      <ContentHeader
        title="Entradas"
        lineColor="#E44C4E"
      >
        <SelectInput options={names}/>
        <SelectInput options={years}/>
      </ContentHeader>
    </Container>
  );
}

export default List;