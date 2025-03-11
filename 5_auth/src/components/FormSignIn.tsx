"use client"
import { signInAction } from '@/actions';

const FormSignIn = () => {
  return (
      <form action={async () => {
         await signInAction();
      }}>
         <button className='bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded'>Entrar</button>
      </form>
  )
}

export default FormSignIn
