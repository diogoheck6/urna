"use client"
import ContextoAutenticacao from "@/data/contexts/ContextoAutenticacao"
import { useContext } from "react"

export default function TelaLogin() {
	const { usuario } = useContext(ContextoAutenticacao)
	return (
		<div className="flex flex-col justify-center items-center gap-6 h-screen">
			<h1 className="text-3xl font-bold">Seja Bem Vindo(a)</h1>
			<div className="flex flex-col gap-6 bg-zinc-900 rounded-lg w-96 p-7">
				<div className="flex flex-col gap-1">
					<span>E-mail</span>
					<input
						type="text"
						value={usuario.email ?? ""}
						className="input"
						onChange={(e) => {}}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<span>Senha</span>
					<input
						type="password"
						value={usuario.senha ?? ""}
						className="input"
						onChange={(e) => {}}
					/>
				</div>
				<button className="botao azul">Entrar</button>
			</div>
		</div>
	)
}
