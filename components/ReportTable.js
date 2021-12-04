import React from 'react'
import { useState, useEffect } from 'react'
export default function ReportTable(props) {
    const [totals, settotals] = useState([48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516])

    useEffect(() => {
        if (props.data.length > 0) {
            let oldTotals = totals.map((element, idx) => {
                return element = element + props.data[0].sales_per_hour[idx]
            });
            settotals(oldTotals)
        }

    }, [props.data])
    if (props.data.length === 0) {
        return (
            <h2 className="mx-auto my-8 text-xl font-semibold text-center">
                No Cookie Stands Available
            </h2>
        );
    }
    return (
        <table className="w-5/6 mx-auto mt-4 text-center border border-green-300 rounded-md">
            <thead className="bg-green-500 border border-green-300">
                <th className="px-2">Location</th>
                {props.hours.map((item) => {
                    return <th>{item} </th>;
                })}
                <th>Totals</th>
            </thead>
            <tbody>
                {props.data.map((store, idx) => {
                    const element = (
                        <>
                            <td className="px-2 border border-black">{store.location}</td>
                            {store.sales_per_hour.map((item) => {
                                return <td className="border border-black"> {item} </td>;
                            })}
                            <td className="border border-black">{store.total}</td>
                        </>
                    );
                    if (idx % 2 == 0) {
                        return <tr className="bg-green-400">{element}</tr>;
                    } else {
                        return <tr className="bg-green-300">{element}</tr>;
                    }
                })}
            </tbody>

            <tfoot className="bg-green-500">

                <td className="px-2  border border-black" >Totals</td>
                {totals.map((ele, index) => {
                    return (<td className=" border border-black" key={index}>{ele}</td>)
                })}

            </tfoot>
        </table>
    )
}
