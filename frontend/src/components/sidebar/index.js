import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/index';

export default function SideBar() {
  const [initialCards, setInitialCards] = useState([]);
  const [filteredTitle, setFilteredTitle] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/submissoes')
      .then(response => {
        console.log("RESPONSE:", response.data)
        setInitialCards(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar os dados:', error);
      });
  }, []);

  const filteredCards = initialCards.filter(card =>
    card.name.toLowerCase().includes(filteredTitle.toLowerCase())
  );

  return (
    <div className='side mt-5' style={{ height: '800px', overflowY: 'scroll' }}>
      <div className="d-flex align-items-center justify-content-center mb-3 flex-column">
        <input
          type="text"
          placeholder="Filtrar por título"
          value={filteredTitle}
          onChange={e => setFilteredTitle(e.target.value)}
          className='mt-3 mb-2 p-2 rounded'
        />
        <p>Quantidade de arquivos cadastrados: {filteredCards.length}</p>
      </div>
      <div className="">
        {filteredCards.map((card, index) => (
          <Card key={index} title={card.name} date={card.createdAt} className="mb-3" />
        ))}
      </div>
    </div>
  );
}
