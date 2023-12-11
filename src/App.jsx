import {useState} from 'react';
import './App.css'
import CustomList from './CustomList';

function App() {

  const allLists = [
    {
      title: 'Lettere',
      type: 'ul',
      list: [
        "a","b","c"
      ]
    }
  ]

  const list = [
    "a",
    "b",
    "c"
  ]

  return (<>
    <CustomList
      type={"ul"}
      list={list}
      />
  </>)
}


export default App