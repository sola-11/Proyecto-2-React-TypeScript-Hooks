import { useForm } from '../hooks/useForm';

interface FormData {
    email: string,
    nombre: string,
    edad: number
}


export const Formulario = () => {
    
const  {  formulario, handleChange } = useForm<FormData>({
    email: 'Solanny@gmail.com',
    nombre: 'Solanny Batista',
    edad: 35
});

const { email, nombre, edad } = formulario;


//   const [formulario, setformulario] = useState({
//   email:'',
//   name:''
//   });

//   const handleChange = ( {target}: ChangeEvent<HTMLInputElement> ) => {
//       const { name, value } = target;
//
//   setformulario( {
//        ...formulario,          [ name ]: value
//   });
//   }
    
    return(
        <form autoComplete="off">

            <div className = "mb-3">
                <label className= "form-label">E-mail:</label>
               <input type= "email"
               className= "form-control"
               name="email"
               value= { formulario.email }
               onChange={ handleChange }
               />
            </div>

            <div className = "mb-3">
                <label className= "form-label">Nombre:</label>
               <input type= "text"
               className= "form-control"
               name="nombre"
               value={ formulario.nombre }
               onChange= { handleChange }
               />
            </div>
            <div className = "mb-3">
                <label className= "form-label">Nombre:</label>
               <input type= "text"
               className= "form-control"
               name="edad"
               value={ formulario.edad }
               onChange= { handleChange }
               />
            </div>


            <pre> { JSON.stringify(formulario) } </pre>


        </form>

        
    )
}