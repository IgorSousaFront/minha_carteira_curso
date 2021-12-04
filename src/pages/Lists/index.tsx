import React from 'react';

import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content } from './styles';
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

  let cardList = []

  for(let i = 0; i <= 33; i++) {
    let isRed = Math.floor(Math.random() * 2)
    cardList.push(
      <HistoryFinanceCard
        tagColor={isRed ? '#E44C4E' : '#4E41F0'}
        title="Conta de luz"
        subtitle="27/07/2020"
        amount="R$120,00"
      />
    )
  }

  return (
    <Container>
      <ContentHeader
        title="Entradas"
        lineColor="#E44C4E"
      >
        <SelectInput options={names}/>
        <SelectInput options={years}/>
      </ContentHeader>

      <Content>
        {cardList}
        {/* <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="27/07/2020"
          amount="R$120,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="27/07/2020"
          amount="R$120,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="27/07/2020"
          amount="R$120,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de luz"
          subtitle="27/07/2020"
          amount="R$120,00"
        /> */}
      </Content>
    </Container>
  );
}

export default List;