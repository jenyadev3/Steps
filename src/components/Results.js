function Results({data}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.km}</td>
           <td>
            <span class="material-symbols-outlined">edit</span>
            <span class="material-symbols-outlined">close</span>
           </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;