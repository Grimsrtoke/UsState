import React from "react"
import './App.css'

import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [text, setText] = useState('')
  const [img, setImg] = useState(false)
  const [open, setOpen] = useState('Открыть')

  const change = () => {
    setImg(!img)
    setOpen(img ? 'Открыть' : 'Закрыть')
    
  }




  console.log(num);
  










  return (
    <>


    <div className="box">
      <button onClick={change}>{open} фото</button>
      {img && <img src="https://pixlr.com/images/generator/text-to-image.webp" alt="UFO" />}

    </div>
    
    <div className="box">
      <h4>{text}</h4>
      <input placeholder = 'UFO' type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>

    
    <div className="box">
      <h4>{num}</h4>
      <button onClick={() => setNum(num + 1)}>Добавить число</button>
      <button onClick={() => setNum(num - 1)}>Убавить число</button>
      <button onClick={() => setNum(num * 2)}>Удвоить число</button>
      <button onClick={() => setNum(num / 2)}>Разделить число</button>
      <button onClick={() => setNum(num * 0)}>Обнулить число</button>
    </div>


    
    
    
    




    
    </>
  )


}

export default App