"use client"
import { createContext, useState } from "react"
import { Usuario } from "@urna/auth"

export interface ContextoAutenticacaoProps {
	usuario: Partial<Usuario>
	alterarUsuario: (usuario: Partial<Usuario>) => void
}

const ContextoAutenticacao = createContext<ContextoAutenticacaoProps>({} as any)

export function ProvedoraAutenticacao(props: any) {
	const [usuario, setUsuario] = useState<Partial<Usuario>>({} as any)
	return (
		<ContextoAutenticacao.Provider
			value={{
				usuario,
				alterarUsuario: setUsuario,
			}}
		>
			{props.children}
		</ContextoAutenticacao.Provider>
	)
}

export default ContextoAutenticacao
