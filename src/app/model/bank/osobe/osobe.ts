import { BaseRequestDTO } from "../../DTO/base-request-DTO";
import { BaseResponseDTO } from "../../DTO/base-response-DTO";

export class OsobaDTO {
    public id: number;
    public oib: string;
    public ime: string;
    public prezime: string;
    public adresa: string;
    public pbr: number;
}

export class OsobaRequestDTO extends BaseRequestDTO {
    public data: OsobaDTO;
}

export class OsobaResponseDTO extends BaseResponseDTO {
    public item?: OsobaDTO;
}

export class OsobaListResponseDTO extends BaseResponseDTO {
    public items?: OsobaDTO[]
}