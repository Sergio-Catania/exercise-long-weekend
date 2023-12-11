import {useState} from 'react';
import './App.css'
import CustomList from './CustomList';

function App() {

  const [allLists, setAllLists] = useState([
    {
      title: 'Lettere',
      type: 'ul',
      list: ["a","b","c"]
    },
    {
      title: 'Numeri',
      type: 'ol',
      list: ["1","2","3"]
    },
  ]);

  return (<>
    <div>
      {allLists.map( ({title, type, list}, i) => {

        const  [inputValue, setInputValue] = useState('');

        return (
          <div key={title}>
            <h3>{title}</h3>
            <div>
              <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              />
              <button onClick={() => {
                if(!inputValue){return}
                const newAllLists = structuredClone(allLists);
                newAllLists[i].list.push(inputValue);
                setAllLists(newAllLists);
                setInputValue('');
              }}>Aggiungi</button>
            </div>
            <CustomList
              type={type}
              list={list}
              buttons={["Elimina", "Modifica"]}
              onDelete={index => {
                const newAllLists = structuredClone(allLists);
                newAllLists[i].list.splice(index, 1);
                setAllLists(newAllLists);
              }}
              onEdit={index =>{
                const newAllLists = structuredClone(allLists);
                newAllLists[i].list[index] = inputValue;
                setAllLists(newAllLists);

              }

        }
            />
          </div>
        )

            })}
    </div>
  </>)
  }


export default App