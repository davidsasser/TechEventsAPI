import { OK, NotFound } from "huncwot/response";
import EventRepository from "../Repository";
import { Handler } from "huncwot";

const fetch: Handler = ({ params }) => {
    const event = EventRepository.fetch(params.id)
    return event ? OK(event) : NotFound();
}

export = fetch;