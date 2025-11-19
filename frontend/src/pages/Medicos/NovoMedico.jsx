import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { veterinaryAPI, clinicAPI } from "../../api/api";

const NovaMedico = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [crmv, setCrmv] = useState("");
  const [email, setEmail] = useState("");
  const [clinicId, setClinicId] = useState("");
  const [clinics, setClinics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loadingClinics, setLoadingClinics] = useState(true);

  useEffect(() => {
    fetchClinics();
  }, []);

  const fetchClinics = async () => {
    try {
      const response = await clinicAPI.getAll();
      const clinicsData = Array.isArray(response.data) ? response.data : [];
      setClinics(clinicsData);
      if (clinicsData.length > 0) {
        setClinicId(clinicsData[0].id.toString());
      }
    } catch (err) {
      console.error("Erro ao carregar clínicas:", err);
      setError("Erro ao carregar clínicas. Verifique a configuração do banco de dados.");
    } finally {
      setLoadingClinics(false);
    }
  };

  const validarCRMV = (valor) => {
    const limpo = valor.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    if (limpo.length <= 7) setCrmv(limpo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await veterinaryAPI.create({
        name: nome,
        email: email,
        crmv: crmv,
        clinicId: parseInt(clinicId),
      });
      navigate("/medicos");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Erro ao cadastrar médico. Tente novamente.";
      setError(errorMessage);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loadingClinics) {
    return (
      <div className="container mt-4 mb-5">
        <h2 className="text-center mb-4">Cadastrar Médico / Veterinário</h2>
        <p>Carregando clínicas...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-center mb-4">Cadastrar Médico / Veterinário</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="p-4 rounded shadow"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="mb-3">
          <label className="form-label">Nome do Médico</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">CRMV</label>
          <input
            type="text"
            className="form-control"
            value={crmv}
            onChange={(e) => validarCRMV(e.target.value)}
            placeholder="Ex: SP12345"
            required
            disabled={loading}
          />
          {crmv && crmv.length < 7 && (
            <span style={{ color: "red", fontSize: "0.9rem" }}>
              Formato inválido. Exemplo: SP12345
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Clínica</label>
          <select
            className="form-select"
            value={clinicId}
            onChange={(e) => setClinicId(e.target.value)}
            required
            disabled={loading || clinics.length === 0}
          >
            {clinics.length === 0 ? (
              <option value="">Nenhuma clínica disponível</option>
            ) : (
              <>
                <option value="">Selecione uma clínica...</option>
                {clinics.map((clinic) => (
                  <option key={clinic.id} value={clinic.id}>
                    {clinic.name}
                  </option>
                ))}
              </>
            )}
          </select>
          {clinics.length === 0 && (
            <small className="text-danger">
              É necessário cadastrar uma clínica primeiro.
            </small>
          )}
        </div>

        <button className="btn btn-primary w-100 mt-3" type="submit" disabled={loading || clinics.length === 0}>
          {loading ? "Salvando..." : "Salvar Médico"}
        </button>
      </form>
    </div>
  );
};

export default NovaMedico;
