import { Router } from 'express';
import { uuid } from 'uuidv4'; // função para criar ids dentro do projeto

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const appointment = {
    id: uuid(),
    provider,
    date,
  };

  //Adicionar appointments dentro da listagem
  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;