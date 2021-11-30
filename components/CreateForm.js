
export default function CreateForm(props){
    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    function Handler(event) {
        event.preventDefault();
        const save_data = {
          location: event.target.location.value,
          min_customers: event.target.minimum.value,
          max_customers: event.target.Maximum.value,
          avg_cookies: event.target.avgCustomers.value,
          sales_per_hour:[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36,516],
        }
        
        props.ubdateHandler(save_data)

      }
      return(
    <form onSubmit={Handler} className="m-8 p-4 bg-green-300 rounded-md" >
          <h2 className="text-center text-2xl">Cookie Stand Admin  </h2>
          <div className="w-100">
            <label className=" w-1/3"> Location </label>
            <input className="bg-gray-100 m-3 w-2/3" name="location" type="text" />
          </div>
          <div className="flex items-stretch">
            <div className="m-3 p-4 ">
              <label className=" m-3 "> Minimum Customer pre Hour  </label>
              <input className="bg-gray-100 m-3 w-2/3" name="minimum" type="number" />
            </div>

            <div className="m-3 p-4 ">
              <label className=" m-3 "> Maximum Customer pre Hour </label>
              <input className="bg-gray-100 m-3 w-2/3" name="Maximum" type="number" />
            </div>
            <div className="m-3 p-4 ">
              <label className=" m-3 "> Average Cookies pre sale  </label>
              <input className="bg-gray-100 m-3 w-2/3" name="avgCustomers" type="number" />
            </div>

            <button class="bg-green-500 hover:bg-green-400 text-white font-bold h-12 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
              Create
            </button>
          </div>
        </form>
      )
}
      