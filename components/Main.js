import { useState } from 'react'
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
export default function Main() {
  const [cookieStand, set_data] =useState([]);
  let ubdateHandler=(save_data)=>{
    set_data(cookieStand => [...cookieStand, save_data])

  }
   return (
        <main className="items-center justify-center px-20 text-center ">
        <CreateForm ubdateHandler={ubdateHandler}/>
        {cookieStand && <ReportTable data={cookieStand} hours={hours} />}
      </main>
    )
}

