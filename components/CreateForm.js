
import useResource from '../hooks/useResource'


export default function FormStandHeader({setCookie}) {

    const {  createResource } = useResource();

    function onCreate (event) {
        event.preventDefault();
        let array=[]
        for (let index = 0; index < 14; index++) {
           let value= Math.floor((Math.random() * (event.target.Maximum.value - event.target.minimum.value) ))
           array.push(Number(value)+ Number(event.target.minimum.value))
        }
        const obj = {
                "location": event.target.location.value,
                "description": "cookie sales report ",
                "minimum_customers_per_hour": event.target.minimum.value,
                "maximum_customers_per_hour": event.target.Maximum.value,
                "average_cookies_per_sale":event.target.avgCustomers.value,
                'hourly_sales':array,
        }
        createResource(obj)
    }
    
    return (
      <form onSubmit={onCreate} className="p-4 m-8 bg-green-300 rounded-md" >
         <div className="flex items-center justify-center py-8">
                <div className="w-full py-4 text-center mx-14">
                    <label className="">ADD LOCATION</label>
                    <input name="location" placeholder="Cookie Stand Location" className="w-full p-2 font-medium" required />
                </div>
                <button type="submit" className="w-2/3 py-6 font-bold text-white bg-green-500 border-b-4 border-green-700 hover:bg-green-400 hover:border-green-500 mr-14">CREATE STAND</button>
            </div>
          <div className="flex items-stretch">
            <div className="p-4 m-3 ">
              <label className="m-3 "> Minimum Customer pre Hour  </label>
              <input className="w-2/3 m-3 bg-gray-100" name="minimum" type="number" required/>
            </div>

            <div className="p-4 m-3 ">
              <label className="m-3 "> Maximum Customer pre Hour </label>
              <input className="w-2/3 m-3 bg-gray-100" name="Maximum" type="number"required/>
            </div>
            <div className="p-4 m-3 ">
              <label className="m-3 "> Average Cookies pre sale  </label>
              <input className="w-2/3 m-3 bg-gray-100" name="avgCustomers" type="number" required />
            </div>

            
          </div>
        </form>
    )
}