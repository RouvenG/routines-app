export class FlowRunViewModel {
    flowId?: string;
    flowVersion?: string;
    name?: string;
    predictionKeys?: Array<string>;
    flowMetadata?: object;

    constructor({ flowId, flowVersion, name, predictionKeys, flowMetadata }: { flowId?: string; flowVersion?: string; name?: string; predictionKeys?: Array<string>; flowMetadata?: object } = {}) {
        this.flowId = flowId;
        this.flowVersion = flowVersion;
        this.name = name;
        this.predictionKeys = predictionKeys;
        this.flowMetadata = flowMetadata;
    }
}