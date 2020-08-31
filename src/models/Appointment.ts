import { uuid } from 'uuidv4';

interface ApopointmentConstructor {
    provider: string;
    date: Date;
}

class Apopointment {
    id: string;
    provider: string;
    date: Date;

    constructor({provider, date}: Omit<Apopointment, 'id'>){
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
}

export default Apopointment;