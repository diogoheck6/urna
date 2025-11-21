import Candidato from "@/data/model/Candidato"

export interface ListaCandidatosProps {
	candidatos: Candidato[]
	selecionarCandidato?: (candidato: Candidato) => void
	excluirCandidato?: (candidato: Candidato) => void
}

export default function ListaCandidatos(props: ListaCandidatosProps) {
	return (
		<div className="flex flex-col gap-5">
			{props.candidatos.map((candidato) => (
				<div key={candidato.id} className="bg-zinc-800 p-5 rounded-lg">
					<h2>
						{candidato.nome} ({candidato.partido})
					</h2>
					<p>{candidato.descricao}</p>
					<div className="flex py-5 gap-2">
						<button
							className="botao azul"
							onClick={() => props.selecionarCandidato?.(candidato)}
						>
							Selecionar
						</button>
						<button
							className="botao vermelho"
							onClick={() => props.excluirCandidato?.(candidato)}
						>
							Excluir
						</button>
					</div>
				</div>
			))}
		</div>
	)
}
