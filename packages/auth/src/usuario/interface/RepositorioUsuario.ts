import Usuario from "../model/Usuario"

export default interface RepositorioUsuario {
	buscarPorId(id: number): Promise<Usuario | null>
	buscarPorEmail(email: string): Promise<Usuario | null>
	salvar(usuario: Usuario): Promise<void>
}
