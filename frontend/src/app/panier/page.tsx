import '../../css/bootstrap.css'
import '../../css/responsive.css'
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import PanierComponent from '../components/developpeur2/panier/panierComp';
import { redirect } from 'next/navigation';
import getMe from '../get-me';

const PanierPage =async () => {
  
  const me = await getMe();
  if(!me.email || me.role) return redirect('/');
  return (
    <PanierComponent/>
  )
}

export default PanierPage