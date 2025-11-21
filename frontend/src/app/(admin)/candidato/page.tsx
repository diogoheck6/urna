"use client"
import { useState } from "react"
import candidatosIniciais from "@/data/constants/candidatos"
import ListaCandidatos from "@/components/candidato/ListaCandidatos"
import Candidato from "@/data/model/Candidato"
import FormularioCandidato from "@/components/candidato/FormularioCandidato"

export default function PaginaCandidato() {
	const [candidatoSelecionado, setCandidatoSelecionado] = useState<Partial<Candidato> | null>(
		null
	)
	const [candidatos, setCandidatos] = useState(candidatosIniciais)

	function excluirCandidato(candidato: Candidato) {
		setCandidatos(candidatos.filter((c) => c.id !== candidato.id))
	}

	function salvarCandidato(candidato: Partial<Candidato>) {
		if (candidato.id) {
			setCandidatos(
				candidatos.map((c) => (c.id === candidato.id ? (candidato as Candidato) : c))
			)
		} else {
			const id = Math.random()
			setCandidatos([...candidatos, { ...candidato, id } as Candidato])
		}
		setCandidatoSelecionado(null)
	}

	return (
		<div>
			{candidatoSelecionado ? (
				<FormularioCandidato
					candidato={candidatoSelecionado}
					salvarCandidato={salvarCandidato}
					cancelar={() => setCandidatoSelecionado(null)}
				/>
			) : (
				<div className="flex flex-col gap-5">
					<button
						className="botao azul self-end"
						onClick={() => setCandidatoSelecionado({})}
					>
						Novo Candidato
					</button>
					<ListaCandidatos
						candidatos={candidatos}
						selecionarCandidato={setCandidatoSelecionado}
						excluirCandidato={excluirCandidato}
					/>
				</div>
			)}
		</div>
	)
}
