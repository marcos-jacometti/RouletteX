import React, { useState } from 'react';
import { Container } from './styles';

const PredictionCalculator = () => {
  const [prediction, setPrediction] = useState(null);
  const [col1Percentage, setCol1Percentage] = useState('');
  const [col2Percentage, setCol2Percentage] = useState('');
  const [col3Percentage, setCol3Percentage] = useState('');
  const [lastNumbers, setLastNumbers] = useState('');

  const calculatePrediction = () => {
    if (!col1Percentage || !col2Percentage || !col3Percentage || !lastNumbers) {
      alert('Forneça informações suficientes para a previsão.');
      return;
    }

    const historicalProbabilities = [parseFloat(col1Percentage), parseFloat(col2Percentage), parseFloat(col3Percentage)];

    // Últimos números sorteados
    const [num1, num2, num3] = lastNumbers.split(',').map(Number);

    // Predominância da coluna nos últimos 3 números sorteados
    const colDominant = (num1 >= 13 && num1 <= 24) ? 2 : (num2 >= 13 && num2 <= 24) ? 2 : (num3 >= 13 && num3 <= 24) ? 2 : 1;

    // Ajustar as probabilidades conforme a estratégia
    const col1Probability = historicalProbabilities[0] * (colDominant === 1 ? 1.2 : 0.8);
    const col2Probability = historicalProbabilities[1] * (colDominant === 2 ? 1.2 : 0.8);
    const col3Probability = historicalProbabilities[2] * (colDominant === 3 ? 1.2 : 0.8);

    const totalProbability = col1Probability + col2Probability + col3Probability;

    const normalizedCol1 = (col1Probability / totalProbability) * 100;
    const normalizedCol2 = (col2Probability / totalProbability) * 100;
    const normalizedCol3 = (col3Probability / totalProbability) * 100;

    setPrediction({
      col1: normalizedCol1.toFixed(2),
      col2: normalizedCol2.toFixed(2),
      col3: normalizedCol3.toFixed(2),
    });
  };

  return (
    <Container>
      <label className='label'>
        Coluna 01 (%):
        <input type="number" placeholder="Digite o % das 50 rodadas" value={col1Percentage} onChange={(e) => setCol1Percentage(e.target.value)} />
      </label>
      <label>
        Coluna 02 (%):
        <input type="number" placeholder="Digite o % das 50 rodadas" value={col2Percentage} onChange={(e) => setCol2Percentage(e.target.value)} />
      </label>
      <label>
        Coluna 03 (%):
        <input type="number" placeholder="Digite o % das 50 rodadas" value={col3Percentage} onChange={(e) => setCol3Percentage(e.target.value)} />
      </label>
      <label className='LastNumbers'>
        Últimos Números Sorteados na Roleta (separados por vírgula):
        <input type="text" placeholder="Digite os últimos 3 números" value={lastNumbers} onChange={(e) => setLastNumbers(e.target.value)} />
      </label>
      <button onClick={calculatePrediction}>Calcular Probabilidades</button>
      {prediction && (
        <div className='Predictions'>
          <p className='Title'>Previsões:</p>
          <p>Coluna 01: {prediction.col1}%</p>
          <p>Coluna 02: {prediction.col2}%</p>
          <p>Coluna 03: {prediction.col3}%</p>
          <p>Cobrir o 0!</p>
          <button onClick={() => setPrediction(null)}>Jogar Novamente</button>
        </div>
      )}
    </Container>
  );
};

export default PredictionCalculator;
