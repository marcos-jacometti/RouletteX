import React, { useState } from 'react';
import { Container } from './styles';

const PredictionCalculator = () => {
  const [prediction, setPrediction] = useState(null);
  const [col1Percentage, setCol1Percentage] = useState('');
  const [col2Percentage, setCol2Percentage] = useState('');
  const [col3Percentage, setCol3Percentage] = useState('');
  const [lastNumber1, setLastNumber1] = useState('');
  const [lastNumber2, setLastNumber2] = useState('');
  const [lastNumber3, setLastNumber3] = useState('');

  const calculatePrediction = () => {
    if (!col1Percentage || !col2Percentage || !col3Percentage || !lastNumber1 || !lastNumber2 || !lastNumber3) {
      alert('Forneça informações suficientes para a previsão.');
      return;
    }

    const historicalProbabilities = [parseFloat(col1Percentage), parseFloat(col2Percentage), parseFloat(col3Percentage)];

    // Últimos números sorteados
    const [num1, num2, num3] = [lastNumber1, lastNumber2, lastNumber3].map(Number);

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

  const resetInputs = () => {
    setLastNumber3(lastNumber2);
    setLastNumber2(lastNumber1);
    setLastNumber1('');
  };

  return (
    <Container>
      <label className='label'>
        Coluna 01 (%):
        <input type="number" placeholder="Últimas 50 rodadas" value={col1Percentage} onChange={(e) => setCol1Percentage(e.target.value)} />
      </label>
      <label>
        Coluna 02 (%):
        <input type="number" placeholder="Últimas 50 rodadas" value={col2Percentage} onChange={(e) => setCol2Percentage(e.target.value)} />
      </label>
      <label>
        Coluna 03 (%):
        <input type="number" placeholder="Últimas 50 rodadas" value={col3Percentage} onChange={(e) => setCol3Percentage(e.target.value)} />
      </label>
      <label className='LastNumbers'>
        Últimos Números Sorteados na Roleta:
        <input type="number" placeholder="Último número" value={lastNumber1} onChange={(e) => setLastNumber1(e.target.value)} />
        <input type="number" placeholder="Penúltimo número" value={lastNumber2} onChange={(e) => setLastNumber2(e.target.value)} />
        <input type="number" placeholder="Antepenúltimo número " value={lastNumber3} onChange={(e) => setLastNumber3(e.target.value)} />
      </label>
      <button onClick={calculatePrediction}>Calcular Probabilidades</button>
      {prediction && (
        <div className='Predictions'>
          <p className='Title'>Previsões:</p>
          <p>Coluna 01: {prediction.col1}%</p>
          <p>Coluna 02: {prediction.col2}%</p>
          <p>Coluna 03: {prediction.col3}%</p>
          <p>Cobrir o 0!</p>
          <button onClick={resetInputs}>Jogar Novamente</button>
        </div>
      )}
    </Container>
  );
};

export default PredictionCalculator;
