import { BaseRequestDTO } from "../../DTO/base-request-DTO";
import { BaseResponseDTO } from "../../DTO/base-response-DTO";

export class ZavodDTO {
    public id: number;
    public naziv: string;
    public sif_zavod: string;
}

export class ZavodRequestDTO extends BaseRequestDTO {
    public data: ZavodDTO;
}

export class ZavodResponseDTO extends BaseResponseDTO {
    public item?: ZavodDTO;
}

export class ZavodListResponseDTO extends BaseResponseDTO {
    public items?: ZavodDTO[];
}

export class ZavodiHelper {
    public static routeName = 'zavodi';
}