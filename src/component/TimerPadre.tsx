  import { Timer } from './Timer';
  import { useState } from 'react'

  export const TimerPadre = () => {
      const [milisegundos, setmilisegundos] = useState(1000);
      return(
          <>
          <span>Milisegundos{ 1000 } </span>
          
          <button className= "btn btn-outline-success"
              onClick= { () => setmilisegundos(1000) }>
             1000
          </button>

          <button className= "btn btn-outline-success"
          onClick= { () => setmilisegundos(2000) }>
             2000
          </button>

          <Timer milisegundos= {milisegundos} />

          </>
      )

  }