import React from 'react'
import '../../css/bootstrap.css'
import '../../css/responsive.css'
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileComp from '../components/developpeur2/profile/profileComp';
import { redirect } from 'next/navigation';
import getMe from '../get-me';

const Profile = async () => {
  const me = await getMe();
  if(!me.email || me.role) return redirect('/');
  return (
    <ProfileComp/>
  )
}

export default Profile