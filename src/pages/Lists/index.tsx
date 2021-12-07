// Funtional imports
import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// Components imports
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import ContentHeader from '../../components/ContentHeader';

// Styles imports
import { Container, Content, Filters } from './styles';

// Utils imports
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formateDate';

// Data imports
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listOfMonths from '../../repositories/months';

// Interfaces
interface IData {
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [selectedFrequency, setSelectedFrequency] = useState<string[]>(['recorrente', 'eventual', 'todos']);

  let { type } = useParams();

  const pageContent = useMemo(() => {
    return type === 'entry-balance' ? {
      title: 'Entradas',
      lineColor: '#F7931B',
      data: gains
    } : {
      title: 'Saídas',
      lineColor: '#E44C4E',
      data: expenses
    }
  }, [type]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    const { data } = pageContent

    data.forEach(item => {
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
  }, [pageContent]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    });
  }, []);

  const handleFrequencyClick = (frequency: string) => {
    frequency !== 'todos' ? setSelectedFrequency([frequency]) : setSelectedFrequency(['recorrente', 'eventual', 'todos']);
  }

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch(e) {
      throw new Error(`invalid month value. Is acepted 0 - 24: ${e}`);
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch(e) {
      throw new Error(`invalid year value. Is acepted integer number: ${e}`);
    }
  }

  useEffect(() => {
    const filteredDate = pageContent.data.filter(item => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

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
  }, [pageContent, monthSelected, yearSelected, selectedFrequency]);

  return (
    <Container>
      <ContentHeader
        title={pageContent.title}
        lineColor={pageContent.lineColor}
      >
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
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