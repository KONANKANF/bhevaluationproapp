import { Departement } from "./departement";
import { Fonction } from "./fonction";

export interface Direction {
    id: string;
    libelleDirection:string;
    codeDirection: string;
    departementDto: Departement[];
    fonctionDto: Fonction[];
}
