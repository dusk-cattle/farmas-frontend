import axios, { AxiosError } from "axios";
import { Connections } from "../../enums";
import { GiveRoleProps } from "./types";

export async function GiveRole(giveRoleProps: GiveRoleProps) {
  const item = localStorage.getItem("user");
  if (!item) {
    throw new Error("Something went wrong while retrieving data");
  }

  const token = JSON.parse(item)["token"];

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    await axios.post(Connections.GATEKEEPER + "/Role", config);
  } catch (error) {
    handleGiveRoleError(error as AxiosError);
  }
}

function handleGiveRoleError(error: AxiosError) {
  const status = error?.response?.status;

  let message = "";
  switch (status) {
    case 401:
      message = "User is not authenticated on, or does not owns the resource";
      break;

    case 403:
      message =
        "The user who's role is being assigned to does not exist or the user has already a role in it";
      break;

    default:
      message = "Generic error occurred";
      break;
  }

  throw new Error(message);
}
