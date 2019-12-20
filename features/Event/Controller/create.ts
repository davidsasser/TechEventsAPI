import { Created } from "huncwot/response";
import EventRepository from "../Repository";
import { Handler } from "huncwot";

const create: Handler = ({ params }) => {
    const { name, location } = params;
    const event = EventRepository.create(name, location);

    return Created(event);
}

export = create;