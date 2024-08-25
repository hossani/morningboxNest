import React from 'react'
import Sidebar from '../components/general/sidebar';
import '../../css/bootstrap.css'
import '../../css/responsive.css'
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableCrud from '../components/developpeur1/tableCrud/tableCrud';
import { redirect } from 'next/navigation';
import getMe from '../get-me';

const PageCRUD = async() => {
  const me = await getMe();
  if(!me.email || !me.role) return redirect('/');
  return (
    <>
    <div className="container-sidebar-dash">
    <Sidebar/>
    <TableCrud/>
    </div>
    </>
  )
}

export default PageCRUD