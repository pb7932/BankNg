import { BaseRequestDTO } from "../../DTO/base-request-DTO";
import { BaseResponseDTO } from "../../DTO/base-response-DTO";

export class TransakcijaDTO {
    public id: number;
    public id_klijent: number;
    public vrsta: number;
    public iznos: number;
}

export class TransakcijaRequestDTO extends BaseRequestDTO {
    public data: TransakcijaDTO;
}

export class TransakcijaResponseDTO extends BaseResponseDTO {
    public item?: TransakcijaDTO;
}

export class TransakcijaListResponseDTO extends BaseResponseDTO {
    public items?: TransakcijaDTO[];
}