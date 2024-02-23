
class HttpClientImpl {
    private nextRequestId: number = 1;

    public send(uri: string, method: string, payload: string | undefined = undefined, headers: any = undefined) : Promise<string> {

        var requestId = this.nextRequestId++;

        var resultP: Promise<string> = new Promise<string>((resolver, reject) => {
            var request: XMLHttpRequest = new XMLHttpRequest();

            request.onreadystatechange = () => {
                if (request.readyState == request.DONE) {
                    console.log(`HttpClient [${requestId}:Completed]: Uri=${uri}, Status=${request.status}`);

                    if (request.status != 200) {
                        reject({
                            uri: uri,
                            statusCode: request.status,
                            responseContent: request.responseText
                        });
                    }
                    else {
                        resolver(request.responseText);
                    }
                }
            };

            console.log(`HttpClient [${requestId}:Starting]: Uri=${uri}, Method=${method}, Headers=${JSON.stringify(headers)}`);
            request.open(method, uri, true);

            if (headers != undefined) {
                for (var header in headers) {
                    request.setRequestHeader(header, headers[header]);
                }
            }

            if (payload != null) {
                console.log("Sending Content: " + payload.length);
                //console.log("Content: " + payload);
                request.setRequestHeader("Content-Type", "text/json");
                request.send(payload);
            } 
            else {
                request.send();
            }
        });

        return resultP;
    }

    public post(uri: string, payload: string): Promise<string> {
        return this.send(uri, "POST", payload);
    }

    public get(uri: string): Promise<string> {
        return this.send(uri, "GET");
    }
}

export const HttpClient = new HttpClientImpl();