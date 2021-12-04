import React, { useMemo } from 'react';

import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';

import { useParams } from "react-router-dom";

const List: React.FC = () => {
  let { type } = useParams();

  const pageContent = useMemo(() => {
    if(type === 'entry-balance') {
      return {
        title: 'Entradas',
        lineColor: '#F7931B'
      }
    } else if (type === 'exit-balance') {
      return {
        title: 'Saídas',
        lineColor: '#E44C4E'
      }
    } else {
      return {
        title: 'Lista',
        lineColor: '#4E41F0'
      }
    }
  }, [type])

  const months = [
    {value: 12, label: 'Dezembro'},
    {value: 1, label: 'Janeiro'},
    {value: 3, label: 'Fevereiro'},
    {value: 4, label: 'Março'},
  ];
  
  const years = [
    {value: 2021, label: 2021},
    {value: 2020, label: 2020},
    {value: 2019, label: 2019},
    {value: 2018, label: 2018},
  ];

  let cardList = []

  for(let i = 0; i <= 33; i++) {
    let isRed = Math.floor(Math.random() * 2)

    cardList.push(
      <HistoryFinanceCard
        key={i}
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
        title={pageContent.title}
        lineColor={pageContent.lineColor}
      >
        <SelectInput options={months}/>
        <SelectInput options={years}/>
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className="tag-filter tag-filter-recurrent"
        >
          Recorrentes
        </button>
        <button
          type="button"
          className="tag-filter tag-filter-eventual"
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {cardList}
      </Content>
    </Container>
  );
}

export default List;