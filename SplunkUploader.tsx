
//Jonathan 
const UploadUri = "http://76.146.114.222:8088/services/collector";
const SplunkToken = "72e64eef-38f1-45a4-8bf7-e037046a1b0b";

import { HttpClient } from "./HttpClient";

//MINE
//const UploadUri = "http://192.168.254.68:8088/services/collector";
//const SplunkToken = "2976eac9-de88-429c-91f1-e8203b4966e4";

class SplunkUploaderImpl {
    private nextRequestId = 1;
    private nextEventId = 1;
    public async upload(source: string, data: any): Promise<void> {  
        if (data == undefined || data.length == undefined || data.length == 0) {
            return;
        }
        
        var requestId = this.nextRequestId++;
        console.log(`SplunkUploader: Starting http request ${requestId}`);

        var payload = [];
        for (var dataItem of data) {

            var e: any = {
                time: Date.now(),
                host: "ios",
                source: source,
                sourcetype: `${source}Type`,
                index: "health",
                event: {
                }
            };

            for (var field in dataItem) {
                e.event[field] = dataItem[field];
            }

            payload.push(e);
        }

        var headers = new Object() as any;
        headers["Authorization"] = `Splunk ${SplunkToken}`;
        headers["Content-type"] = 'application/json';
  
        try {
            var json = JSON.stringify(payload);
            await HttpClient.send(UploadUri, "POST", json, headers);
            console.log(`SplunkUploader: request ${requestId} completed`);
        } 
        catch (ex) {
            console.log(`SplunkUploader: Exception for request ${requestId}, ${JSON.stringify(ex)}`);
        }
    }

}

export const SplunkUploader = new SplunkUploaderImpl();
