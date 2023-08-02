import { useState, useEffect } from 'react';
import axios from 'axios';

const Covid = () => {
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

    const [dataCovid, setDataCovid] = useState([])
    useEffect(() => {
        async function getData() {
            try {
                // You can await here
                let res = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
                // Xử lý dữ liệu hoặc set state tại đây
                return res;
                
            } catch (error) {
                // Xử lý lỗi nếu có
            }

        }
        
        // let data = getData() && getData().data ? getData().data : [];
        let data = getData();
        data.then((data) => {
            console.log('Dữ liệu từ server:', data); // Đây là dữ liệu thực sự từ Promise
        console.log(data)
        console.log(parseDate('20210307'))
        setDataCovid(data.data)

          }).catch((error) => {
            console.error('Đã xảy ra lỗi:', error);
          });
    }, [])
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Death</th>
                    <th>Hospitalized</th>
                </tr>
            </thead>
            <tbody>
                {dataCovid && dataCovid.length > 0 && dataCovid.map(item => {
                    if(item.hospitalized !== null){
                        return (
                            <tr key={item.hash}>
                                <td>{parseDate(String(item.date))}</td>
                                <td>{item.death}</td>
                                <td>{item.hospitalized}</td>
                            </tr>
                        )
                    }
                })}

               
            </tbody>
        </table>
    )
}
export default Covid;