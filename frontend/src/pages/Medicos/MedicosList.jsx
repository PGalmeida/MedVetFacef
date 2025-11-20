import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Medicos.css"
import { veterinaryAPI } from "../../api/api"

function MedicosList() {
  const [medicos, setMedicos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchMedicos()
  }, [])

  const fetchMedicos = async () => {
    try {
      setLoading(true)
      const response = await veterinaryAPI.getAll()
      const vets = Array.isArray(response.data) ? response.data : []
      setMedicos(vets)
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message
      if (errorMessage.includes("DATABASE_URL") || errorMessage.includes("PostgreSQL")) {
        setError("Serviço de veterinários não disponível. Verifique a configuração do banco de dados.")
      } else {
        setError("Erro ao carregar médicos. Tente novamente.")
      }
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="page-container">
        <h1>Médicos Cadastrados</h1>
        <p>Carregando...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="page-container">
        <h1>Médicos Cadastrados</h1>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    )
  }

  return (
    <div className="page-container">
      <h1>Médicos Cadastrados</h1>

      <div className="top-actions">
        <Link to="/medicos/novo" className="btn-primary">
          Cadastrar Médico
        </Link>
      </div>

      <div className="list-container">
        {medicos.length === 0 ? (
          <p>Nenhum médico cadastrado.</p>
        ) : (
          <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>CRMV</th>
                <th>Clínica</th>
              </tr>
            </thead>
            <tbody>
              {medicos.map((m) => (
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.crmv}</td>
                  <td>{m.clinic?.name || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default MedicosList
