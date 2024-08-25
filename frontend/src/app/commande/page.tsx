import React from 'react'
import '../../css/bootstrap.css'
import '../../css/responsive.css'
import '../../css/style.css';
import Sidebar from '../components/general/sidebar';
import ListCommande from '../components/developpeur1/commande/commande';
import 'bootstrap/dist/css/bootstrap.min.css';
import { redirect } from 'next/navigation';
import getMe from '../get-me';

const CommandePage = async() => {
  const me = await getMe();
  if(!me.email || !me.role) return redirect('/');
  return (
    <div className="container-sidebar-dash">
    <Sidebar/>
    <ListCommande/>
    </div>
  )
}

export default CommandePage;