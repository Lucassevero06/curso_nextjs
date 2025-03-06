import { redirect } from 'next/navigation';
import React from 'react'

const ProfilePage = () => {

    // Simulação de autenticação
    // buscar no banco de dados e verificar autenticação
    const user = false;

    if(!user) {
        redirect("/")
    }

    return (
        <div>
            <h1>Bem vindo ao seu perfil!</h1>
        </div>
    )
}

export default ProfilePage
