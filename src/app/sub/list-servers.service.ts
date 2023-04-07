import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListServersService {
  tabServers = [
    {
      id: 1,
      nom: 'Serveur de Amen',
      statut: 'offline',
    },
    {
      id: 2,
      nom: 'Serveur de Eya',
      statut: 'online',
    },
    {
      id: 3,
      nom: 'Serveur de Ibrahima',
      statut: 'offline',
    },
  ];

  getServerById(id) {
    return this.tabServers.find((serv) => serv.id == id);
  }

  constructor() {}
}
