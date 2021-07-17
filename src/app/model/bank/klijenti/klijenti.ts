import { BaseRequestDTO } from "../../DTO/base-request-DTO";
import { BaseResponseDTO } from "../../DTO/base-response-DTO";

export class KlijentDTO {
    public id: number;
    public id_osoba: number;
    public datum_rod: Date;
}

export class KlijentRequestDTO extends BaseRequestDTO {
    public data: KlijentDTO;
}

export class KlijentResponseDTO extends BaseResponseDTO {
    public item?: KlijentDTO;
}

export class KlijentListResponseDTO extends BaseResponseDTO {
    public items?: KlijentDTO[];
}

export class KlijentiHelper {
    public static routeName: "klijenti";
}