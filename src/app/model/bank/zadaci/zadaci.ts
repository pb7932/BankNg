import { Time } from "@angular/common";
import { BaseRequestDTO } from "../../DTO/base-request-DTO";
import { BaseResponseDTO } from "../../DTO/base-response-DTO";


export class ZadatakDTO {
    public id: number;
    public naziv: string;
    public opis: string;
    public vrijeme_trajanja: Time;
}

export class ZadatakRequestDTO extends BaseRequestDTO {
    public data: ZadatakDTO;
}

export class ZadatakResponseDTO extends BaseResponseDTO {
    public item?: ZadatakDTO;
}

export class ZadatakListResponseDTO extends BaseResponseDTO {
    public items?: ZadatakDTO[];
}