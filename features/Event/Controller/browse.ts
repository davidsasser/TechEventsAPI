import { OK } from "huncwot/response";
import { Handler } from "huncwot";
import EventRepository from "../Repository";

const browse: Handler = () => {
    const collection = EventRepository.browse()
    return OK(collection)
}

export = browse;