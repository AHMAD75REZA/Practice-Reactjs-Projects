import { useEffect, useState } from 'react'
import Profile from './profile'
import axios from 'axios'

import './App.css'
import MyApp from './MyApp'
import FormHandling from './FormHandling'
import Components from './Components'
import Props from './Card'
import Card from './Card'
import Example from './Example'

import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'


function App() {


  const [data, setData] = useState([])

  const getData = async () => {
   const response = await axios.get('https://picsum.photos/v2/list')
    // console.log(response);

    // const data = response.data
    // console.log(data);

    setData(response.data)

    // console.log(data);
    // console.log(data[0].download_url);


  }
  // useEffect(() =>{      //fetching data without click button getting d
  //   getData()
  // },[])


  const users = [
    {
      "name": "John Doe",
      "city": "New York",
      "address": "123 Main St, Apt 4B",
      "work": "Tech Corp",
      "role": "Frontend Developer",
      "salary": 75000
    },
    {
      "name": "Jane Smith",
      "city": "San Francisco",
      "address": "456 Oak St, Suite 200",
      "work": "Creative Labs",
      "role": "UI/UX Designer",
      "salary": 80000
    },
    {
      "name": "Michael Johnson",
      "city": "Chicago",
      "address": "789 Pine St, Floor 3",
      "work": "Cloud Innovations",
      "role": "Backend Developer",
      "salary": 90000
    },
    {
      "name": "Emily Brown",
      "city": "Austin",
      "address": "101 Maple Ave, House 12",
      "work": "Startup Solutions",
      "role": "Product Manager",
      "salary": 95000
    },
    {
      "name": "David Wilson",
      "city": "Seattle",
      "address": "202 Birch Rd, Unit 5A",
      "work": "NextGen Tech",
      "role": "DevOps Engineer",
      "salary": 85000
    }
  ]
  return (
    <>

      <Profile />
      <MyApp />
      <FormHandling />
      <Components />

      <div className='p-10'>
        {users.map((list, i) => (
          <div key={i}>
            <Card name={list.name} city={list.city} address={list.address} work={list.work} role={list.role} salary={list.salary} />

          </div>
        ))}

      </div>
      <div>
        <Example name="Ahmad" />
      </div>

      <div className='p-10'>
         {/* <button onClick={getData} className='bg-teal-700 text-white font-semibold rounded border-2 active:scale-90'>Get Data</button>   */}
        <div className='p-5 mt-5 bg-gray-950'>
          {
            data.map(function (list, i) {
              return <div key={i} className='bg-gray-50 text-black flex itemx-center justify-between w-full px-7 py-6 rounded mb-3'>
                 <img className='h-80' src={list.download_url} alt="" srcset="" />
                <h1> {list.author} </h1> 
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
