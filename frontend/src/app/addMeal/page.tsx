import Sidebar from '../components/general/sidebar';
import '../../css/bootstrap.css'
import '../../css/responsive.css'
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormulaireAddMeal from '../components/developpeur1/addMeal/formAdd';
import { redirect } from 'next/navigation';
import getMe from '../get-me';
const AddMeal = async () => {
  const me = await getMe();
  console.log('me',me)
  if(!me.email || !me.role) return redirect('/');

  return (
    <>
    <div className="container-sidebar-dash">
    <Sidebar/>
    <FormulaireAddMeal/>
    </div>
    </>
  )
}

export default AddMeal;