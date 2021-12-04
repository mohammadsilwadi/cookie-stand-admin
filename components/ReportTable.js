import { hours } from "./data"
import useResource from '../hooks/useResource'
export default function ReportTableStandHeader() {
   const {resources,deleteResource } = useResource();  
   if(resources?.length){ 
    return (
        <table className="w-1/2 mx-auto my-4" >
            <thead>
                 <tr>
                 <th className="p-3 bg-green-600 border border-gray-70" >location</th>
        {hours.map((value)=>{
          return <th className="p-3 bg-green-600 border border-gray-70" >{value}</th>
          })}
          <th className="p-3 bg-green-600 border border-gray-70" >Total</th>
        </tr>
        </thead> 
            <tbody>
          { resources?.map(e=>
        
              <tr key={e.id}  className="" > <td> {e.location}</td>  
               {e.hourly_sales.map(sale=>{
                   return <td>{sale}</td>
                    })}
             <td>{(e.hourly_sales.reduce((a, b) => a + b, 0))}</td>
              <td onClick={() => deleteResource(e.id)}>X</td></tr>
         
              )
        }
            </tbody>
            <tfoot>
           <td className="p-3 pl-2 bg-green-500 border" >Total</td>
           </tfoot>   
      </table> 
    )
}
    return (
        <h2 className='text-2xl text-center'>No Cookie Stands Available</h2>
    )
}