import React, { useMemo, useState, useEffect } from 'react';

import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import { useParams } from "react-router-dom";

interface IData {
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);

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
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type]);

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

  useEffect(() => {
    const response = listData.map(item => {
      return {
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dateFormatted: item.date,
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      }
    })
    setData(response)
  }, [type]);

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
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.map((item, key) => (
          <HistoryFinanceCard
            key={key}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
}

export default List;