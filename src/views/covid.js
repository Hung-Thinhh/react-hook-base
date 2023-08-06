import { useEffect, useState } from "react";
import useFetch from '../customize/fetch.js';

const Covid = () => {


    const { data:dataCovid, loading, isError } = useFetch('https://api.covidtracking.com/v1/us/daily.json')

    function parseDate(dateString) {
        // Kiểm tra độ dài chuỗi phải là 8 và là số
        if (dateString.length !== 8 || isNaN(dateString)) {
            throw new Error('Chuỗi ngày không hợp lệ');
        }

        // Chia chuỗi thành các thành phần ngày, tháng và năm
        const year = dateString.slice(0, 4);
        const month = dateString.slice(4, 6);
        const day = dateString.slice(6, 8);

        // Tạo đối tượng Date từ các thành phần đã chia
        const formattedDate = `${day}-${month}-${year}`;

        return formattedDate;
    }

    // const [dataCovid, setDataCovid] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [isError, setIsError] = useState(false)
    console.log(dataCovid)

    return (
        <>
            <h3>Covid 19 Data</h3>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Death</th>
                        <th>Hospitalized</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && loading === false && dataCovid && dataCovid.length > 0 && dataCovid.map(item => {

                       if(item.hospitalized !== null){

                        return (
                            <tr key={item.hash}>
                                <td>{parseDate(String(item.date))}</td>
                                <td>{item.death}</td>
                                <td>{item.hospitalized}</td>
                            </tr>
                        )
                       }
                    //    else{
                    //     return (
                    //         <tr key={item.hash}>
                    //             <td>haha</td>
                    //             <td>ok</td>
                    //             <td>er</td>
                    //         </tr>
                    //     )
                    //    }

                    })}
                    {loading === true &&
                        <tr>
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>Loading....</td>
                        </tr>
                    }
                    {isError === true &&
                        <tr>
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>Something wrong...</td>
                        </tr>
                    }


                </tbody>
            </table>
        </>
    )
}
export default Covid;