"use client"

import { useContext, useEffect } from "react"
import { useRouter } from "next/navigation"
import ContextoAutenticacao from "@/data/contexts/ContextoAutenticacao"

export default function ForcarUsuarioLogado({ children }: any) {
	const { usuario } = useContext(ContextoAutenticacao)
	const router = useRouter()

	useEffect(() => {
		if (usuario === null) {
			return router.push("/auth")
		}
	}, [usuario, router])

	return usuario ? children : null
}
