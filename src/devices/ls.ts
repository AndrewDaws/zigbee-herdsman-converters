import * as exposes from "../lib/exposes";
import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";
import * as utils from "../lib/utils";

const e = exposes.presets;

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["Emotion"],
        model: "A319463",
        vendor: "LS Deutschland GmbH",
        description: "Home base",
        fromZigbee: m.light({colorTemp: {range: [153, 454]}, color: true}).fromZigbee,
        toZigbee: m.light({colorTemp: {range: [153, 454]}, color: true}).toZigbee,
        configure: m.light({colorTemp: {range: [153, 454]}, color: true}).configure[0],
        exposes: (device, options) => {
            if (utils.isDummyDevice(device)) return [e.light_brightness_colortemp_colorxy([153, 454])];
            return [
                ...device.endpoints
                    .filter((ep) => ep.ID !== 242)
                    .map((ep) => {
                        return e.light_brightness_colortemp_colorxy([153, 454]).withEndpoint(`l${ep.ID}`);
                    }),
            ];
        },
        meta: {multiEndpoint: true},
        endpoint: (device) => {
            return Object.fromEntries(device.endpoints.filter((ep) => ep.ID !== 242).map((ep) => [`l${ep.ID}`, ep.ID]));
        },
    },
];
