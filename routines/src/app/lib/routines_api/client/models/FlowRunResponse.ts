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
import type { Flow } from './Flow';
import {
    FlowFromJSON,
    FlowFromJSONTyped,
    FlowToJSON,
} from './Flow';
import type { FlowRunResponseResponse } from './FlowRunResponseResponse';
import {
    FlowRunResponseResponseFromJSON,
    FlowRunResponseResponseFromJSONTyped,
    FlowRunResponseResponseToJSON,
} from './FlowRunResponseResponse';

/**
 * 
 * @export
 * @interface FlowRunResponse
 */
export interface FlowRunResponse {
    /**
     * 
     * @type {Flow}
     * @memberof FlowRunResponse
     */
    flow?: Flow;
    /**
     * 
     * @type {object}
     * @memberof FlowRunResponse
     */
    metadata: object;
    /**
     * 
     * @type {FlowRunResponseResponse}
     * @memberof FlowRunResponse
     */
    response: FlowRunResponseResponse;
}

/**
 * Check if a given object implements the FlowRunResponse interface.
 */
export function instanceOfFlowRunResponse(value: object): boolean {
    if (!('metadata' in value)) return false;
    if (!('response' in value)) return false;
    return true;
}

export function FlowRunResponseFromJSON(json: any): FlowRunResponse {
    return FlowRunResponseFromJSONTyped(json, false);
}

export function FlowRunResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlowRunResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'flow': json['flow'] == null ? undefined : FlowFromJSON(json['flow']),
        'metadata': json['metadata'],
        'response': FlowRunResponseResponseFromJSON(json['response']),
    };
}

export function FlowRunResponseToJSON(value?: FlowRunResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'flow': FlowToJSON(value['flow']),
        'metadata': value['metadata'],
        'response': FlowRunResponseResponseToJSON(value['response']),
    };
}
