import React, { useMemo, useState, useEffect } from 'react';

import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formateDate';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listOfMonths from '../../repositories/months';

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
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
  const [selectedFrequency, setSelectedFrequency] = useState<string[]>(['recorrente', 'eventual', 'todos']);

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

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listData.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if(!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    });
  }, [listData]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    });
  }, []);

  const handleFrequencyClick = (frequency: string) => {
    if(frequency !== 'todos') {
      setSelectedFrequency([frequency])
    } else {
      setSelectedFrequency(['recorrente', 'eventual', 'todos']);
    }
  }

  useEffect(() => {
    const filteredDate = listData.filter(item => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
    })

    const formattedDate = filteredDate.map(item => {
      return {
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E', 
      }
    })

    setData(formattedDate)
  }, [listData, monthSelected, yearSelected, selectedFrequency]);

  return (
    <Container>
      <ContentHeader
        title={pageContent.title}
        lineColor={pageContent.lineColor}
      >
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className={`
            tag-filter
            tag-filter-recurrent
            ${selectedFrequency.includes('recorrente') && 'tag-active'}
          `}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`
            tag-filter
            tag-filter-eventual
            ${selectedFrequency.includes('eventual') && 'tag-active'}
          `}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
        <button
          type="button"
          className={`
            tag-filter
            tag-filter-all
            ${selectedFrequency.includes('todos') && 'tag-active'}
          `}
          onClick={() => handleFrequencyClick('todos')}
        >
          Todos
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