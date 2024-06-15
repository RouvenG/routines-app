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
 * @interface FlowParameters
 */
export interface FlowParameters {
    /**
     * 
     * @type {string}
     * @memberof FlowParameters
     */
    flowId?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowParameters
     */
    flowVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof FlowParameters
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FlowParameters
     */
    predictionKeys?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof FlowParameters
     */
    flowMetadata?: object;
}

/**
 * Check if a given object implements the FlowParameters interface.
 */
export function instanceOfFlowParameters(value: object): boolean {
    return true;
}

export function FlowParametersFromJSON(json: any): FlowParameters {
    return FlowParametersFromJSONTyped(json, false);
}

export function FlowParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlowParameters {
    if (json == null) {
        return json;
    }
    return {
        
        'flowId': json['flow_id'] == null ? undefined : json['flow_id'],
        'flowVersion': json['flow_version'] == null ? undefined : json['flow_version'],
        'name': json['name'] == null ? undefined : json['name'],
        'predictionKeys': json['prediction_keys'] == null ? undefined : json['prediction_keys'],
        'flowMetadata': json['flow_metadata'] == null ? undefined : json['flow_metadata'],
    };
}

export function FlowParametersToJSON(value?: FlowParameters | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'flow_id': value['flowId'],
        'flow_version': value['flowVersion'],
        'name': value['name'],
        'prediction_keys': value['predictionKeys'],
        'flow_metadata': value['flowMetadata'],
    };
}

