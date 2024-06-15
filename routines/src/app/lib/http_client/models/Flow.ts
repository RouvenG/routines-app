/* tslint:disable */
/* eslint-disable */
/**
 * Cloud Endpoints + GCF
 * Jural Backend for Cloud Endpoints
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FlowParameters } from './FlowParameters';
import {
    FlowParametersFromJSON,
    FlowParametersFromJSONTyped,
    FlowParametersToJSON,
} from './FlowParameters';

/**
 * 
 * @export
 * @interface Flow
 */
export interface Flow {
    /**
     * 
     * @type {FlowParameters}
     * @memberof Flow
     */
    parameters?: FlowParameters;
}

/**
 * Check if a given object implements the Flow interface.
 */
export function instanceOfFlow(value: object): boolean {
    return true;
}

export function FlowFromJSON(json: any): Flow {
    return FlowFromJSONTyped(json, false);
}

export function FlowFromJSONTyped(json: any, ignoreDiscriminator: boolean): Flow {
    if (json == null) {
        return json;
    }
    return {
        
        'parameters': json['parameters'] == null ? undefined : FlowParametersFromJSON(json['parameters']),
    };
}

export function FlowToJSON(value?: Flow | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'parameters': FlowParametersToJSON(value['parameters']),
    };
}

