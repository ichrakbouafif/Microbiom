import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private data:any={
    name: 'John Doe',
    id: '123456',
    dateOfBirth: 'January 1, 1990',
    gender: 'Male',
    contactInfo: {
      email: 'john.doe@example.com',
      phone: '(123) 456-7890',
      address: '123 Main St, Anytown, USA'
    },
    medicalInfo: {
      bloodType: 'O+',
      allergies: 'None',
      medications: 'None'
    },
    recentVisits: [
      { date: 'June 20, 2024', description: 'Analysis completed' },
      { date: 'June 15, 2024', description: 'Sample given' },
      { date: 'June 10, 2024', description: 'Kit delivered' }
    ],
    upcomingAppointments: [
      { description: 'No appointments scheduled' }
    ],
    imageUrl: 'assets/Images/Patients/John.png'
  };

  constructor() { }

  setData(data: any) {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }
}
