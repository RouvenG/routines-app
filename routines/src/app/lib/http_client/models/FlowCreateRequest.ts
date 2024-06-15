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
import type { FlowCreateRequestParameters } from './FlowCreateRequestParameters';
import {
    FlowCreateRequestParametersFromJSON,
    FlowCreateRequestParametersFromJSONTyped,
    FlowCreateRequestParametersToJSON,
} from './FlowCreateRequestParameters';

/**
 * 
 * @export
 * @interface FlowCreateRequest
 */
export interface FlowCreateRequest {
    /**
     * 
     * @type {FlowCreateRequestParameters}
     * @memberof FlowCreateRequest
     */
    parameters?: FlowCreateRequestParameters;
}

/**
 * Check if a given object implements the FlowCreateRequest interface.
 */
export function instanceOfFlowCreateRequest(value: object): boolean {
    return true;
}

export function FlowCreateRequestFromJSON(json: any): FlowCreateRequest {
    return FlowCreateRequestFromJSONTyped(json, false);
}

export function FlowCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlowCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'parameters': json['parameters'] == null ? undefined : FlowCreateRequestParametersFromJSON(json['parameters']),
    };
}

export function FlowCreateRequestToJSON(value?: FlowCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'parameters': FlowCreateRequestParametersToJSON(value['parameters']),
    };
}

