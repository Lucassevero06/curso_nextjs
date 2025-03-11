"use client";
import { signOutAction } from '@/actions';

const FormSignOut = () => {
  return (
      <form action={async () => {
         await signOutAction();
      }}>
         <button className='bg-red-500 hover:bg-red-700 py-2 px-4 rounded'>Sair</button>
      </form>
  )
}

export default FormSignOut
