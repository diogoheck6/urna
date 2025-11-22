export default function Rodape() {
	return (
		<footer className="flex h-20 bg-zinc-900">
			<div className="flex justify-end container">
				<p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
			</div>
		</footer>
	)
}
