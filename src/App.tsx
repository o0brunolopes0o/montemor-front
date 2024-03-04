import React, { useEffect, useState } from 'react';

function App() {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/job/get')
      .then(response => response.json())
      .then(data => setVagas(data));
  }, []);

  return (
    <div>
      {vagas.map((vaga: { id: number, titulo: string, codigo_vaga: string, descricao: string }) => (
        <div key={vaga.id} style={{
          border: '1px solid black', 
          margin: '10px', 
          padding: '10px', 
          width: '40%', 
          height: '120px', 
          overflow: 'auto'
        }}>
          <h2>{vaga.titulo} - {vaga.codigo_vaga}</h2>
          <div dangerouslySetInnerHTML={{ __html: vaga.descricao }} />
        </div>
      ))}
    </div>
  );
}

export default App;