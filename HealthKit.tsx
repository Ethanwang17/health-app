import AppleHealthKit, { HealthValue, HealthKitPermissions } from 'react-native-health'
import { SplunkUploader } from './SplunkUploader';

export default class HealthKit {

    //The underlying API for initializing the HealthKit provides the results via callback. This function converts the callbacks to Promises.

    //beofre healthkit can be used, we need to make sure it is avaibable on the users device and if that 
    //callback is true, then we can move onto initializing the healthkit 
    public async initialize(): Promise<void> {
        console.log("InitializeHealthKit: isAvailable");
        var isAvailableP = new Promise<void>((resolver, reject) => {
            AppleHealthKit.isAvailable((err: Object, available: boolean) => {
                if (err) {
                    console.log('error initializing Healthkit (isAvailable): ', err);
                    reject(err);
                }
                else {
                    resolver();
                }});
            });

        await isAvailableP;
        //gives us permissions to read and write the users health data 
        const permissions = {
        permissions: {
            read: [AppleHealthKit.Constants.Permissions.HeartRate, 
                AppleHealthKit.Constants.Permissions.HeartRateVariability, 
                AppleHealthKit.Constants.Permissions.RestingHeartRate,
                AppleHealthKit.Constants.Permissions.OxygenSaturation,
                AppleHealthKit.Constants.Permissions.BodyTemperature,
                AppleHealthKit.Constants.Permissions.RespiratoryRate,
                AppleHealthKit.Constants.Permissions.SleepAnalysis,],
                
            write: [AppleHealthKit.Constants.Permissions.HeartRate, 
                AppleHealthKit.Constants.Permissions.HeartRateVariability, 
                AppleHealthKit.Constants.Permissions.RestingHeartRate,
                AppleHealthKit.Constants.Permissions.OxygenSaturation,
                AppleHealthKit.Constants.Permissions.RespiratoryRate,]
        },
        };
    
        console.log("InitializeHealthKit: initHealthKit");
        var resultP = new Promise<void>((resolver, reject) => {
            AppleHealthKit.initHealthKit(permissions, (error: string) => {
                if (error) {
                    console.log('[ERROR] Cannot grant permissions!')
                    reject(error);
                }
                else {
                    resolver();
                }});
            });
    
        await resultP;
        console.log("HealthKit initialized");
    }

    //get heart rate data  
    public getHeartRate() {
        const options = {
            startDate: new Date(2020, 1, 1).toISOString(),
        }
    
        console.log("Getting heart rate samples");
        AppleHealthKit.getHeartRateSamples(
            options,
            (error: string, results: HealthValue[]) => {
                console.log("heart rate callback");
                if (error != undefined) {
                    console.error(`Error reading heart rate data: ${JSON.stringify(error)}`);
                }
                else {
                    SplunkUploader.upload("HeartRate", results);
                    console.log(results);
                }
            },
        );
    }

    //get heart rate variability data  
    public getHearRateVariability() {
        const options = {
            startDate: new Date(2020, 1, 1,).toISOString(),
        }

        console.log('Getting Heart Rate Variability Samples');
        AppleHealthKit.getHeartRateVariabilitySamples(
            options, 
            (error:string, results: HealthValue[]) => {
                console.log('heart rate variability callback');
                if(error != undefined){
                    console.error(`Error reading heart rate variability data: ${JSON.stringify(error)}`);
                }
                else {
                    SplunkUploader.upload("HeartRateVariability", results);
                    console.log(results);
                }
            },
        );
    }

    //get resting heart rate data 
    public getRestingHeartRate() {
        const options = {
            startDate: new Date(2020, 1, 1).toISOString(),
        }

        console.log("Getting Resting Heart Rate Data");

        AppleHealthKit.getRestingHeartRateSamples(
            options, 
            (error: string, results: HealthValue[]) => {
                console.log('Resting heart rate callback');
                if(error != undefined){
                    console.error(`Error reading resting heart rate data: ${JSON.stringify(error)}`);
                }
                else {
                    SplunkUploader.upload("RestingHeartRate", results);
                    console.log(results);
                }
            },
        );
    }

    //get oxygen saturation 
    public getOxygenSaturation() {
        const options = {
            startDate: new Date(2020, 1, 1).toISOString(),
        }

        console.log("Getting Oxygen Saturation Data"); 

        AppleHealthKit.getOxygenSaturationSamples(
            options, 
            (error: string, results: HealthValue[]) => {
                console.log("Oxygen Saturation Callback");
                if(error != undefined){
                    console.error(`Error reading oxygen saturation data: ${JSON.stringify(error)}`);
                }
                SplunkUploader.upload("OxygenSaturation", results);
                console.log(results);
            }
        )
    }

    //get respiratory rate 
    public getRespiratoryRate(){
        const options = {
            startDate: new Date(2020, 1, 1).toISOString(),
        }
        console.log("Getting Respiratory rate Data");
        AppleHealthKit.getRespiratoryRateSamples(
            options, 
            (error: string, results: HealthValue[]) => {
                console.log("Respiratory rate callback");
                if(error != undefined){
                    console.error(`Error reading respiratory rate data: ${JSON.stringify(error)}`);
                }
                SplunkUploader.upload("RespiratoryRate", results);
                console.log(results);
            }
        )
    }

    //get body temerature 
    public getBodyTemperature() {
        const options = {
            startDate: new Date(2020, 1, 1).toISOString(),
            //unit: 'fahrenheit',
        }

        console.log("Getting body temerature data");
        AppleHealthKit.getBodyTemperatureSamples(
            options, 
            (error: string, results: HealthValue[]) =>{
                console.log("Body temperature callback");
                if(error != undefined){
                    console.error(`Error reading respiratory rate data: ${JSON.stringify(error)}`);
                }
                SplunkUploader.upload("BodyTemperature", results);
                console.log(results);
            }
        )
    }

    public getSleepSamples() {
        const options = {
            startDate: new Date(2020, 1, 1).toISOString(),
        }

        console.log("Getting sleep data");
        AppleHealthKit.getBodyTemperatureSamples(
            options, 
            (error: string, results: HealthValue[]) =>{
                console.log("Sleep callback");
                if(error != undefined){
                    console.error(`Error reading sleep data: ${JSON.stringify(error)}`);
                }
                SplunkUploader.upload("Sleep", results);
                console.log(results);
            }
        )
    }
}

