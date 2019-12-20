interface Event {
    readonly id: number
    name: string
    location: string
}

interface EventById {
    [id: string]: Event
}

const byId = (stored: EventById, current: Event) => ({ ...stored, [current.id.toString()]: current});

let EventCollection: Event[] = [
    { id: 1, name: 'PolyConf 2020', location: 'Paris' },
    { id: 2, name: 'StrangeLoop', location: 'St. Louis' }
];

export default class EventRepository {
    static currentId = 3;
    static browse() {
        return EventCollection;
    }
    static fetch(id: string) {
        return EventCollection.reduce(byId, {})[id];
    }

    static create(name: string, location: string) {
        const event = { id: this.currentId++, name, location };
        EventCollection.push(event);

        return event;
    }

    static update(id: string, name: string) {
        const event = EventCollection.reduce(byId, {})[id];
        event.name = name;
        return event;
    }

    static destroy(id: string) {
        EventCollection = EventCollection.filter(element => element.id.toString() != id);
    }
}