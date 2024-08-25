import React from 'react'
import '../../css/bootstrap.css'
import '../../css/responsive.css'
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreerUser from '../components/developpeur2/formCreation/creerUser';
import { redirect } from 'next/navigation';
import getMe from '../get-me';

const Register = async () => {
  const me = await getMe();
  if(me.email) return redirect('/menu');
  return (
   <CreerUser/>
  )
}

export default Register;