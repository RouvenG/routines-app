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
/**
 * 
 * @export
 * @interface FlowModificationRequestParameters
 */
export interface FlowModificationRequestParameters {
    /**
     * 
     * @type {string}
     * @memberof FlowModificationRequestParameters
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowModificationRequestParameters
     */
    expectedResult?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowModificationRequestParameters
     */
    actualResult?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowModificationRequestParameters
     */
    providedInput?: string;
}

/**
 * Check if a given object implements the FlowModificationRequestParameters interface.
 */
export function instanceOfFlowModificationRequestParameters(value: object): boolean {
    return true;
}

export function FlowModificationRequestParametersFromJSON(json: any): FlowModificationRequestParameters {
    return FlowModificationRequestParametersFromJSONTyped(json, false);
}

export function FlowModificationRequestParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlowModificationRequestParameters {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'expectedResult': json['expected_result'] == null ? undefined : json['expected_result'],
        'actualResult': json['actual_result'] == null ? undefined : json['actual_result'],
        'providedInput': json['provided_input'] == null ? undefined : json['provided_input'],
    };
}

export function FlowModificationRequestParametersToJSON(value?: FlowModificationRequestParameters | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'expected_result': value['expectedResult'],
        'actual_result': value['actualResult'],
        'provided_input': value['providedInput'],
    };
}
