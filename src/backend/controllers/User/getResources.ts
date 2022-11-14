import axios, { AxiosError } from "axios";

import { Connections } from "../../enums";
import { GetUserTokenFromStorage } from "../../utils";
import { GetResourcesProps } from "./types";

export async function GetResources() {
    const token = GetUserTokenFromStorage();

    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    try {
        const response = await axios.get<GetResourcesProps[]>(Connections.GATEKEEPER + "/Resource", config);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        if (err.response) {
            if (err.response.status === 401) {
                throw new Error("Token inválido");
            } else {
                throw new Error("Erro ao retornar dados");
            }
        }
    }
}
