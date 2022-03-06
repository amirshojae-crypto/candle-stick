import React from 'react';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import './App.css';

interface IProps {
  symbol: string
};

const App: React.FC<IProps> = ({ symbol }) => {
  return (
    <div style={{ height: '100%' }}>
      <AdvancedRealTimeChart theme="dark" autosize symbol={symbol}></AdvancedRealTimeChart>
    </div>
  );
}

export default App;
