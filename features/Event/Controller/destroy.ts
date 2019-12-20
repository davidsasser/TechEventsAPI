import { OK } from "huncwot/response";
import { Handler } from "huncwot";
import EventRepository from "../Repository";

const destroy: Handler = ({ params }) => {
    EventRepository.destroy(params.id);
    return OK('')
}

export = destroy;