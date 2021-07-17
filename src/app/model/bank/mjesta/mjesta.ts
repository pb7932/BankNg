import { BaseRequestDTO } from "../../DTO/base-request-DTO";
import { BaseResponseDTO } from "../../DTO/base-response-DTO";

export class MjestoDTO {
    public pbr: number;
    public naziv: string;
}

export class MjestoRequestDTO extends BaseRequestDTO {
    public data: MjestoDTO;
}

export class MjestoResponseDTO extends BaseResponseDTO {
    public item?: MjestoDTO;
}

export class MjestoListResponseDTO extends BaseResponseDTO {
    public items?: MjestoDTO[];
}

export class MjestaHelper {
    public static routeName = 'mjesta'
}