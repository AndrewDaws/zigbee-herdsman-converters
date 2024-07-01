import {light} from '../lib/modernExtend';
import {Definition} from '../lib/types';

const definitions: Definition[] = [
    {
        zigbeeModel: ['ZBT-RGBWLight-A0000'],
        model: 'ZBT-RGBWLight-A0000',
        vendor: 'LDS',
        description: 'Ynoa smart LED E27',
        extend: [light({colorTemp: {range: [153, 555]}, color: true})],
    },
];

export default definitions;
module.exports = definitions;
