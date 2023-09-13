import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
  const [pageState , setPageState]= useState('loading')
  const [karbarHa , setKarbarHa] = useState([])
  const [btn , setBtn] = useState(1)
  const [optionSelect , setOptionSelect] = useState(4)
  useEffect(()=>{
    axios.get(`https://www.melivecode.com/api/users?page=${btn}&per_page=${optionSelect}`)
    .then(apidata => {
      setKarbarHa(apidata.data)
      setPageState('loaded')
    })
    .catch(()=>{
      setPageState('error')
    })
  } , [btn , optionSelect])
  return (
    <main>
      { pageState === 'loading' && <> page is loading </>}
      { pageState === 'error' && <> user not found </>}
      { pageState === 'loaded' && 
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
                <div>
                  <button onClick={()=>setBtn(1)}>1</button>
                  <button onClick={()=>setBtn(2)}>2</button>
                </div>
                <div>
                  <select name="" id="" onChange={(e)=> setOptionSelect(e.target.value)}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                  </select>
                </div>
            </div>
          </div>
          <div className="row">
            {
              karbarHa.map(karbar => {
                return(
                  <div className="col-3 gy-3">
                    <div className="box bg-white">
                      <div>
                        <img className='w-100' src={karbar.avatar} alt="" />
                      </div>
                      <div className='text-center'>
                        <Link to={`/users/${karbar.id}`}>
                          {karbar.fname}{karbar.lname}
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      }
    </main>
  )
}
