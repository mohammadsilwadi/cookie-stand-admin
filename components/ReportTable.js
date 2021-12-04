import { hours } from "./data"
import useResource from '../hooks/useResource'
export default function ReportTableStandHeader() {
    const { resources, deleteResource } = useResource();
    if (resources?.length) {
        return (
            <table className="w-1/2 mx-auto my-4" >
                <thead>
                    <tr>
                        <th className="p-3 bg-green-600 border border-gray-70" >location</th>
                        {hours.map((value) => {
                            return <th className="p-3 bg-green-600 border border-gray-70" >{value}</th>
                        })}
                        <th className="p-3 bg-green-600 border border-gray-70" >Total</th>
                    </tr>
                </thead>
                <tbody>
                    {resources?.map(e =>

                        <tr key={e.id} className="text-center bg-green-400 border border-black-200" >
                            <div className="flex items-center justify-between px-20">
                                <td className='py-2 font-bold'> {e.location}</td>
                                <svg onClick={() => deleteResource(e.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                            {e.hourly_sales.map(sale => {
                                return <td>{sale}</td>
                            })}
                            <td>{(e.hourly_sales.reduce((a, b) => a + b, 0))}</td>
                        </tr>
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