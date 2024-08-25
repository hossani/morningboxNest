'use client'
import React, { useEffect, useState } from 'react'
import socket from '../util/socket';
import axios from 'axios';
import Card from '../components/developpeur2/menu/cards';

const ComponentCard = () => {
    
  const [breakfasts, setBreakfasts] = useState<any[]|[]>([]);

  useEffect(() => {
    // Récupérer les Breakfasts existants depuis l'API
    const fetchBreakfasts = async () => {
      try {
        console.log('hey')
        const response = await axios.get('http://localhost:4000/breakfasts');
        console.log('hoh')

        setBreakfasts(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des Breakfasts', error);
      }
    };
    fetchBreakfasts();

    // Ecoute des événements WebSocket
    socket.on('connect', () => {
      console.log('connected...');
    });

    socket.on('receiveBreakfast', (data) => {
      console.log('New Breakfast received');
      setBreakfasts((prevBreakfasts) => [data.content,...prevBreakfasts]);
    });

    return () => {
      socket.off('connect');
      socket.off('receiveBreakfast');
    };
  });

  return (
    <div className="row grid">
      {breakfasts.map((breakfast) => (
              <Card key={breakfast.id} breakfast={breakfast} />
            ))}

      </div>  )
}

export default ComponentCard