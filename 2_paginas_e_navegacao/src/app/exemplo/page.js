'use client'
import React from 'react';
import {useSearchParams} from "next/navigation";

const ExemploPage = () => {

    const searchParams = useSearchParams();

    const valorParam = searchParams.get('parametro');

    const presencaParam = searchParams.has("parametro")

    return (
        <div>
            {presencaParam ? "Tem parametro, ele é: " + `${valorParam}` : "Nao tem parametro"}
        </div>
    )
}

export default ExemploPage
