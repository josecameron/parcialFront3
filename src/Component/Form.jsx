import React, { useState } from 'react'
import Card from './Card';
import FormStyles from '../Styles/Form.module.css'

const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        bandaPreferida:''
    })
    console.log(user);

    const [show, setShow] = useState(false)
    const [err, setError] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(user.nombre.length>3 && !user.nombre.startsWith(' ') && user.bandaPreferida.length> 6 ){
            setShow(true)
            setError(false)
        }else{
            setError(true)
            setShow(false)
        }
        

    }


  return (
    <>
    <form onSubmit={handleSubmit} className={FormStyles.formContainer}>
        <label style={{fontWeight:"bold"}}>Usuario</label>
        <input type="text" className={FormStyles.imputContainer} onChange={({target})=> setUser({...user, nombre: target.value})}/>
        <label style={{fontWeight:"bold"}}>Banda Preferida</label>
        <input type="text" className={FormStyles.imputContainer} onChange={({target})=> setUser({...user, bandaPreferida: target.value})}/>  
        <button className={FormStyles.botonContainer}>Enviar</button>

        {err && <h2>Coloque la informacion correcta</h2>}

       
    </form>
    {show && <Card nombre = {user.nombre} banda = {user.bandaPreferida} />}
        
        
    
    

        
    </>
  )
}

export default Form