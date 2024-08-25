import React from 'react'
import '../../css/bootstrap.css'
import '../../css/responsive.css'
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css'
import Tracking from '../components/developpeur2/tracking/tracking';
import { redirect } from 'next/navigation';
import getMe from '../get-me';

const PageTrack = async() => {
  const me = await getMe();
  if(!me.email || me.role) return redirect('/');
  return (
<Tracking/>
)
}

export default PageTrack