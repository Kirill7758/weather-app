import {config} from "../../config/config";
const {PREV, NEXT, interval} = config;

export const slide = (className, childLength, position, setPosition, count = 2) => {
    if (childLength >= 3) {
        switch (className) {
            case PREV:
                if (position !== 0) {
                    setPosition(position + interval)
                }
                break;
            case NEXT:
                if (position !== (childLength - count) * -interval) {
                    setPosition(position - interval)
                }
                break;
        }
    }
}
