import React, { useState } from 'react';
import Results from './Results';

function Steps() {
  const [form, setForm] = useState({ date: "", km: "" });
  const [resultsData, setResultsData] = useState([]);
  const [error, setError] = useState("");

  const handleDateChange = (evt) => {
    const newDate = evt.target.value;
    setForm({ ...form, date: newDate });
  }

  const handleKmChange = (evt) => {
    const newKm = evt.target.value;
    setForm({ ...form, km: newKm });
  }

  const handleOkClick = (evt) => {
    evt.preventDefault();

    // Проверяем корректность данных
    if (!form.date || !form.km || !form.date.match(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{2}$/)) {
      setError("Пожалуйста, введите корректные данные.");
      return;
    }

    // Добавляем данные в массив resultsData
    setResultsData([form, ...resultsData]);
    // Очищаем форму
    setForm({ date: "", km: "" });
    // Сбрасываем ошибку, если она была
    setError("");
  }

  return (
    <div className="container">
      <form>
        <label htmlFor="dateInput">Дата (ДД.ММ.ГГ)</label>
        <input
          id="dateInput"
          type="text"
          value={form.date}
          pattern="^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{2}$"
          onChange={handleDateChange}
        />
        <label htmlFor="kmInput">Пройдено км</label>
        <input
          id="kmInput"
          type="text"
          value={form.km}
          onChange={handleKmChange}
        />
        <button onClick={handleOkClick}>ОК</button>
      </form>
      {error && <p className="error">{error}</p>}
      <Results data={resultsData} />
    </div>
  )
}

export default Steps;






