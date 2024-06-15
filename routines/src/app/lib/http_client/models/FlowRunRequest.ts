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
import type { FlowRunRequestParameters } from './FlowRunRequestParameters';
import {
    FlowRunRequestParametersFromJSON,
    FlowRunRequestParametersFromJSONTyped,
    FlowRunRequestParametersToJSON,
} from './FlowRunRequestParameters';

/**
 * 
 * @export
 * @interface FlowRunRequest
 */
export interface FlowRunRequest {
    /**
     * 
     * @type {FlowRunRequestParameters}
     * @memberof FlowRunRequest
     */
    parameters: FlowRunRequestParameters;
}

/**
 * Check if a given object implements the FlowRunRequest interface.
 */
export function instanceOfFlowRunRequest(value: object): boolean {
    if (!('parameters' in value)) return false;
    return true;
}

export function FlowRunRequestFromJSON(json: any): FlowRunRequest {
    return FlowRunRequestFromJSONTyped(json, false);
}

export function FlowRunRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlowRunRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'parameters': FlowRunRequestParametersFromJSON(json['parameters']),
    };
}

export function FlowRunRequestToJSON(value?: FlowRunRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'parameters': FlowRunRequestParametersToJSON(value['parameters']),
    };
}
