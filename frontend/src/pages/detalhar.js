import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Menu from "../components/menu/index";
import SideBar from "../components/sidebar/index";
import Lines from '../components/graphics/line';
import ContentCard from '../components/content-card';

let labels = [];
export const data = {
  labels,
  datasets: [
    {
      label: 'Profundidade',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function Detalhar() {
  const { id } = useParams();
  const [chartData, setChartData] = useState(data);
  const [value, setValue] = useState('');
  const [average, setAverage] = useState('');
  const [deviation, setDeviation] = useState('');
  useEffect(() => {
    function getData() {
      axios.get(`http://localhost:3001/submissoes/${id}`)
        .then(response => {
          console.log("GQR:", response.data);

          const gqrData = response.data.result.map(data => parseFloat(data.gqr));
          const depthData = response.data.result.map(data => data.depth);
          setValue(response.data.result.pop());
          setAverage(response.data.average);
          setDeviation(response.data.deviation);
          const updatedData = {
            labels: depthData,
            datasets: [
              {
                label: 'GQR',
                data: gqrData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          };

          setChartData(updatedData);
        })
        .catch(error => {
          console.log("Algo deu errado:", error);
        });
    }
    getData();
  }, [id]);

  return (
    <div className='d-flex flex-column'>
      <Menu />
      <div className='d-flex m-5'>
        <SideBar />
        <div className='container-graph row p-5 m-5'>
          <div className='d-flex justify-content-center mx-5'>
            <ContentCard title={"Maior GQR encontrado"} value={value.gqr} depth={`(Depth: ${value.depth})`} icon='analytics'/>
            <ContentCard title={"Média de GQR"} value={average} icon='data'/>
            <ContentCard title={"Desvio padrão"} value={deviation} icon='outline' />
          </div>
          <Lines data={chartData} chartId="line-1" />
        </div>

      </div>

    </div>
  );
}