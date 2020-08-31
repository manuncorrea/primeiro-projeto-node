import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appoinment from '../models/Appointment';

const appointmentsRouter = Router();

const appointments: Appoinment[] = [];

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  // Validação de datas
  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find(appointment => 
    isEqual(parsedDate, appointment.date),
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This, appointment is already booked '});
  }

  const appointment = new Appoinment(provider, parsedDate);

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;