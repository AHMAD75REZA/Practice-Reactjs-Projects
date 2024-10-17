import { useState } from 'react'
import Profile from './profile'

import './App.css'
import MyApp from './MyApp'
import FormHandling from './FormHandling'
import Components from './Components'
import Props from './Card'
import Card from './Card'
import Example from './Example'

function App() {
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

  // users.forEach(function (element) {
  //   console.log(element.name);

  // })

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

      

    </>
  )
}

export default App
