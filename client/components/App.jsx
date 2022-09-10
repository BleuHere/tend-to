import React, { useState, useEffect } from 'react'

// import Plot from './Plot'
import Email from './Email'
import Garden from './Garden'
import Home from './Home'
// import { Tools } from './Tools'

import { getEmailById } from '../apis/emails'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// import { fetchFruits } from '../actions'

const App = () => {
  const dispatch = useDispatch()

  // const gardenBed = []

  // plot state
  const [soilStates, setSoilStates] = useState(
    Array.from({ length: 20 }, (_, id) => ({
      id,
      name: 'weed',
      image: 1,
    }))
  )

  // component visibility
  const [visible, setVisibility] = useState(true)

  // email state
  const [content, setContent] = useState({})

  // home username state
  const [name, setName] = useState('')

  // garden func
  // function chopWeeds(id) {
  //   setSoilStates(
  //     soilStates.map((soilState) => {
  //       if (soilState.id !== id) {
  //         return soilState
  //       }
  //       return {
  //         // new thing
  //         ...soilState,
  //         name: 'soil',
  //         image: 4,
  //       }
  //     })
  //   )
  // }
  // garden func
  function fertilise(id) {
    setSoilStates(
      soilStates.map((soilState) => {
        if (soilState.id === id && soilState.name === 'soil') {
          return {
            ...soilState,
            name: 'soil',
            image: 5,
          }
        } else {
          return soilState
        }
      })
    )
  }

  // email
  // useEffect(() => {
  //   let id = 1
  //   getEmailById(id)
  //     .then((res) => {
  //       setContent(res.body)
  //     })
  //     .catch((err) => console.error(err))
  // }, [])

  // useEffect(() => {
  //   let id = 1
  //   // dispatch(getEmailById(id))
  // }, [])

  // for (let i = 0; i < 20; i++) {
  //   gardenBed.push(
  //     <Plot
  //       id={i}
  //       key={i}
  //       state={soilStates[i]}
  //       // chopWeeds={chopWeeds}
  //       fertilise={fertilise}
  //     />
  //   )
  // }

  return (
    <>
      <h1>Tend Gardening Game</h1>
      <Routes>
        <Route path="/" element={<Home saveName={setName} />} />
        <Route
          path="/note-from-a-friend"
          element={<Email sendNextGuide={content} userName={name} />}
        />
        <Route path="/garden" element={<Garden />} />
      </Routes>
    </>
  )
}

export default App
