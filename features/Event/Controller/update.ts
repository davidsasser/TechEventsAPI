import { Handler } from "huncwot";
import { OK } from "huncwot/response";
import EventRepository from "../Repository";

const update: Handler = ({ params }) => {
    const event = EventRepository.update(params.id, params.name);
    return OK(event);
}

export = update;