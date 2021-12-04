import React from "react";

import {
  Card,
  Title,
  Tag
} from "./styles"

interface IHistoryFinanceCardProps {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Card>
      <Tag color={tagColor}/>
      <Title>
        <span>{title}</span>
        <small>{subtitle}</small>
      </Title>
      <h3>{amount}</h3>
    </Card>
  );
}

export default HistoryFinanceCard;