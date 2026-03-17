import { Medico } from "./Medico";
import { Paciente } from "../types/Paciente";
import { StatusConsulta } from "../types/StatusConsulta";
export interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  data: Date;
  valor: number;
  status: StatusConsulta;
  observacoes?: string;
}