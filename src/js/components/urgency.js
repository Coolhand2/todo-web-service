import {Enum} from 'enumify';

class Urgency extends Enum {}
Urgency.initEnum([
    'UNKNOWN',
    'LOW',
    'MEDIUM',
    'HIGH'
]);