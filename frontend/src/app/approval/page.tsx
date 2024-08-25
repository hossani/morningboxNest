import React from 'react'
import '../../css/bootstrap.css'
import '../../css/responsive.css'
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/general/sidebar';
import TableApprob from '../components/developpeur1/approbation/approbation';
import { redirect } from 'next/navigation';
import getMe from '../get-me';
const Approval = async() => {
  const me = await getMe();
  if(!me.email || !me.role) return redirect('/');
  return (
    <div className="container-sidebar-dash">
    <Sidebar/>
    <TableApprob/>
    </div>
  )
}

export default Approval;