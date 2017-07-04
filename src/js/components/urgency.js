import {Enum} from 'enumify';

export default class Urgency extends Enum {}
Urgency.initEnum([
    'UNKNOWN',
    'LOW',
    'MEDIUM',
    'HIGH'
]);