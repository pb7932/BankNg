import { BaseRequestDTO } from "../../DTO/base-request-DTO";
import { BaseResponseDTO } from "../../DTO/base-response-DTO";

export class ZaposlenikDTO {
    public id_osoba: number;
    public id_zavod: number;
}

export class ZaposlenikRequestDTO extends BaseRequestDTO {
    public data: ZaposlenikDTO;
}

export class ZaposlenikResponseDTO extends BaseResponseDTO {
    public item?: ZaposlenikDTO;
}

export class ZaposlenikListResponseDTO extends BaseResponseDTO {
    public items?: ZaposlenikDTO[];
}