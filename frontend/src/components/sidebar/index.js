import React, { useState } from 'react';
import Card from "../card/index"

export default function SideBar() {
  const initialCards = [
    { title: 'Arquivo teste', date: '15/08/22' },
    { title: 'Outro dado', date: '15/08/22' },
    { title: 'Arquivo teste', date: '15/08/22' },
    { title: 'Ponta negra', date: '15/08/22' },
    { title: 'Abel Cabral', date: '15/08/22' },
    { title: 'Sweet', date: '15/08/22' },
    { title: 'Kraimer', date: '15/08/22' },
    { title: 'Hadonnis', date: '15/08/22' },
    { title: 'Russo', date: '15/08/22' },
    { title: 'Argentino', date: '15/08/22' },
    { title: 'Fillys', date: '15/08/22' },
    { title: 'Suanna', date: '15/08/22' },
    { title: 'Boliche', date: '15/08/22' },
    { title: 'Cartas', date: '15/08/22' },
  ];

  const [filteredTitle, setFilteredTitle] = useState('');
  const filteredCards = initialCards.filter(card =>
    card.title.toLowerCase().includes(filteredTitle.toLowerCase())
  );

  return (
    <div className='side mt-5' style={{ height: '800px', overflowY: 'scroll' }}>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <input
          type="text"
          placeholder="Filtrar por título"
          value={filteredTitle}
          onChange={e => setFilteredTitle(e.target.value)}
          className=''
        />
      </div>
      <div className="">
        {filteredCards.map((card, index) => (
          <Card key={index} title={card.title} date={card.date} className="mb-3" /> 
        ))}
      </div>
    </div>
  );
}
