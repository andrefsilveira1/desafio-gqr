import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/index';
import { BsSearch } from 'react-icons/bs';
import "./index.css"


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
      <div className="d-flex align-items-center justify-content-center mb-3">
        <input
          type="text"
          placeholder="Filtrar por título"
          value={filteredTitle}
          onChange={e => setFilteredTitle(e.target.value)}
          className="form-control pr-5" // Adicione um espaçamento à direita para acomodar o ícone
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <BsSearch size={25} color="gray" />
          </span>
        </div>
      </div>
      <div className="">
        {filteredCards.map((card, index) => (
          <Card key={index} title={card.name} date={card.createdAt} className="mb-3" />
        ))}
      </div>
    </div>
  );
}
