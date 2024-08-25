'use client'
import socket from '@/app/util/socket';
import axios from 'axios';
import React, { useState } from 'react';

const FormulaireAddMeal = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [image, setImage] = useState<File | null>(null); 
  const [description, setDescription] = useState('');
  const [loading,setLoading]=useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!title || !price || !status || !image || !description) {
      return;
    }
    setLoading(prevState=>!prevState)
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dhtqzlo9k/image/upload';
    const uploadPreset = 'cloudinarytutorial';
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', uploadPreset);
    
    try {
      const res = await axios.post(cloudinaryUrl, formData);
      const newArticle = {
        title,
        price,
        status,
        description,
        image: res.data.secure_url,
      };
      console.log("avant post")

      await axios.post('http://localhost:4000/breakfasts',newArticle); 
      console.log("apres post")
       // Envoi via WebSocket
      socket.emit('newBreakfast', newArticle);
      console.log('res', newArticle);
      setLoading(prevState=>!prevState)
      setTitle('');
      setPrice('');
      setStatus('');
      setDescription('');
      setImage(null);
    } catch (error) {
      console.error('Error :', error);
      throw error;
    }
  };

  return (
    <>
      <form className="form-class" onSubmit={handleSubmit}>
        <h3 className="titre-formulaire">Formulaire d'ajout</h3>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 block w-full h-8 px-1" />
          </div>
          <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 block w-full h-8 px-1" />
          </div>
          <div>
            <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status</label>
            <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 block w-full h-8 px-1">
              <option value="">Choose a status</option>
              <option value="disponible">Disponible</option>
              <option value="rupture">En rupture</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="image">Upload image</label>
            <input name="image" className="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 h-8" id="image" type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} name="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        <div>
          <button type="submit" disabled={loading} className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center btn-form">
            {loading?'wait':'submit'}</button>
        </div>
      </form>
    </>
  );
};

export default FormulaireAddMeal;
