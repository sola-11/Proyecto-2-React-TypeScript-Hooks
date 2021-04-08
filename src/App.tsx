
import { Counter } from "./component/Counter";
import { Usuario } from './component/Usuario';

import { TimerPadre } from './component/TimerPadre';
import { ContadorRef}  from './component/ContadorRef';
import { Formulario } from "./component/Formulario";
import { Formulario2 } from "./component/Formulario2";

function App() {
  return (  
    <>

     <h1> React + Typescript </h1>
     <hr/>

     <Counter />

     <Usuario />
  
    <h2>useEffect - userRef</h2>
    <hr/>

    <TimerPadre />
     
     <h2>useReducer</h2>
     <hr/>
     <ContadorRef/>

     <h2>customhooks</h2>
     <hr/>
     <Formulario/>
<br/>
<Formulario2/>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


    </> 
  );
}

export default App; 
 