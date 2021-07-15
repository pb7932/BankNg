import { BaseRequestDTO } from "../../DTO/base-request-DTO";
import { BaseResponseDTO } from "../../DTO/base-response-DTO";

export class ZZDTO {
    public id: number;
    public id_zaposlenik: number;
    public id_zadatak: number;
}

export class ZZRequestDTO extends BaseRequestDTO {
    public data: ZZDTO;
}

export class ZZResponseDTO extends BaseResponseDTO {
    public item?: ZZDTO;
}

export class ZZListResponseDTO extends BaseResponseDTO {
    public items?: ZZDTO[];
}