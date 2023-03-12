import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    const { signup , error , isLoading } = useSignup();
    
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(email,password);
        await signup(email,password)
    }
    return(
        <form className='signup' onClick={handleSubmit}>
        <h3>Sign up</h3>
        <label>Email:</label>
        <input type="email" onChange={ (e) => setEmail(e.target.value)} value = {email}/>
        <label>Password:</label>
        <input type="password" onChange={ (e) => setPassword(e.target.value)} value = {password}/>

        <button disabled = {isLoading}>Sign up</button>
        {error && <div className='error'>{error}</div>}
    </form>
    );
    
}

export default Signup;
