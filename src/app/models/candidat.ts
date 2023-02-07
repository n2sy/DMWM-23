export class Candidat {
  // _id : number;
  // nom : string;
  // prenom : string;

  constructor(
    public _id: number,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {
    // this._id = _id;
    // this.nom = nom ;
    // this.prenom = prenom
  }
}
