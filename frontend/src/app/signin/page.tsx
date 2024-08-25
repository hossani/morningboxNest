import React from 'react'
import '../../css/bootstrap.css'
import '../../css/responsive.css'
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormConnection from '../components/developpeur2/formConnexion/formConnection';
import { redirect } from 'next/navigation';
import getMe from '../get-me';

const Login = async() => {
  const me = await getMe();
  if(me.email) return redirect('/menu');
  return (
<FormConnection/>
  )
}

export default Login