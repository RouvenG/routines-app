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
 * @interface Flow
 */
export interface Flow {
    /**
     * 
     * @type {string}
     * @memberof Flow
     */
    flowId?: string;
    /**
     * 
     * @type {string}
     * @memberof Flow
     */
    flowVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof Flow
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Flow
     */
    predictionKeys?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof Flow
     */
    flowMetadata?: object;
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
        
        'flowId': json['flow_id'] == null ? undefined : json['flow_id'],
        'flowVersion': json['flow_version'] == null ? undefined : json['flow_version'],
        'name': json['name'] == null ? undefined : json['name'],
        'predictionKeys': json['prediction_keys'] == null ? undefined : json['prediction_keys'],
        'flowMetadata': json['flow_metadata'] == null ? undefined : json['flow_metadata'],
    };
}

export function FlowToJSON(value?: Flow | null): any {
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

