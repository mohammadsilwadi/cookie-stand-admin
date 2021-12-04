
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';

import useResource from '../hooks/useResource'
export default function Main() {
   return (
        <main className="items-center justify-center flex-grow p-4 px-20 mb-auto text-center ">
        <CreateForm/>
        <ReportTable/>  
      </main>
    )
}

