// import { Text, View, TouchableOpacity, Button, FlatList, ListRenderItemInfo, Alert } from 'react-native';
// import React from "react";
// import { BleManager, Device } from 'react-native-ble-plx'; //gives access to BLE API used to scan and connect to blutooth devices
// import HealthKit from '../HealthKit'; //gives access to HealthKit API
// import { HttpClient } from '../HttpClient';//used to send data to Splunk 
// import { createNativeStackNavigator } from '@react-navigation/native-stack'; //UI 
// import { SplunkUploader } from '../SplunkUploader';

// //will be used in the future for any properties that may be needed 
// interface BtDeviceScreenProps  {
// }

// interface BtDeviceScreenState {
//   devices: Device[];   //array which is used to store all found devices 
//   refreshId: number;   //used to refresh the UI so any new decices found are printed as they are being found 
//   isBLEReady: boolean; //used to initialize the BLE manager and ensure that it is powered on 
// }

// export default class BtDeviceScreen extends React.Component<BtDeviceScreenProps, BtDeviceScreenState> {
//     private bleManager = new BleManager(); //creating the BLE manager 
//     private healthKit = new HealthKit(); //creating the healthkit 

//     constructor(props: BtDeviceScreenProps) {
//         //whichever functions are created need to be binded so the program does not break 
//         super(props);
//         this.state = { devices: [], refreshId: 0, isBLEReady: false };
//         this.askToConnect = this.askToConnect.bind(this);
//         this.renderItem = this.renderItem.bind(this);
//         this.onStartScan = this.onStartScan.bind(this);
//         this.HealthSamples = this.HealthSamples.bind(this);
//     }

//     //1. Power on BLE and watch for any state changes. this will come in handy if a user decides they would 
//     //like to disconnect a connected device but that functionality has not yet been programmed. 
//     override componentDidMount(): void {
//       this.bleManager.onStateChange((newState) => {
//         console.log(`BLEManager: State Changed to ${newState}`);
//         if (newState == "PoweredOn") {
//           this.setState({ isBLEReady: true });
//           console.log("BLE Ready");
//         }
//       }, true);

//       this.healthKit.initialize();
//     }

//     //6. connect to a device 
//     async connect(device: Device) {
//       console.log(`Connecting to ${device.name}`);

//       try {
//         //simply call device,connect 
//         await device.connect();
//         console.log(`Connected to ${device.name}`);
//       }
//       catch (ex) {
//         console.error(`Error connecting to device: ${JSON.stringify(ex)}`)
//       } 
//     }

//     //5. Asks the user if they would like to connect to chosen device.  
//     askToConnect(device: Device): void {
//       //creating a alert 
//       Alert.alert(
//         "CONNECT",
//         "Connect Device and Send Data",
//         [
//           {
//             //if 'NO' then an error is printed to the console 
//             text: "NO",
//             onPress: () => console.log("Does not want to connect"),
//             style: "cancel"
//           },//if 'OK' then we call the connect() method to connect the device  
//           { text: "OK", onPress: () => this.connect(device) }
//         ]
//       );
//     }

//     //3. Start scanning for devices 
//     onStartScan(): void {
//       this.bleManager.startDeviceScan(null, null, (error, device) => {
//         if (error) {
//             console.log("Error reported by Device Scan: " + JSON.stringify(error));
//             return
//         }
//         //if the device exists and has and id and name ->
//         if (device != undefined && device.id != undefined && device.name != undefined) {
//           //checking to see if a device that has already been found has the same ID as another device 
//           //if the ID matched, that means its just the same device being scanned and we don't want to 
//           //display the same device multiple times in the UI 
//           var index = this.state.devices.findIndex(d => d.id == device.id);
//           //if its not then same device ->
//           if (index < 0) {
//             //print to the console which is just for testing purposes 
//             console.log(`Device found: Id=${device.id}, Name=${device.name}`);
//             //add the found device to the Device[] array 
//             var newDevices = [...this.state.devices, device];
//             //set the devices state (ex: powered on, connected, disconnected)
//             this.setState({ devices: newDevices });
//           }
//         }
//       });
//     }

//     //Heart rate helper 
//     HealthSamples(): void {
//       this.healthKit.getHeartRate();
//       this.healthKit.getRestingHeartRate();
//       this.healthKit.getHearRateVariability();
//       this.healthKit.getBodyTemperature();
//       this.healthKit.getOxygenSaturation();
//       this.healthKit.getRespiratoryRate();
//       this.healthKit.getSleepSamples();
//     }

//     //**************************** USER INTERFACE *******************************

//     //4. each device in the list is made touchable so it works as a button if a user clicks on a device, 
//     //a popup alert asks them if they want to connect to that device through the askToConnect() method  
//     renderItem(info:ListRenderItemInfo<Device>) {
//       return (
//         <View>
//           <TouchableOpacity onPress={() => this.askToConnect(info.item)}> 
//             <Text style={{ fontSize: 25, paddingVertical: 5, paddingHorizontal: 10 }}>
//               {info.item.name}
//             </Text>
//         </TouchableOpacity>
//       </View>);
//     }
//   //2. This is where the user starts out by pressing the 'Start Scan' button which takes us to the onStartScan method 
//     //have added the 'Get Heart Rate Samples' Button just for testing purposes
//   //   override render(): React.ReactNode {
//   //       return (
//   //           <View style={{ marginTop: 40, marginBottom: 40, flex: 1 }}>
//   //           <FlatList data={this.state.devices} renderItem={this.renderItem} //flatlist used to display deviced in the app 
//   //                     keyExtractor={i => i.id}
//   //                     //this is where the UI is refreshed 
//   //                     extraData={this.state.refreshId} style={{ flex: 1}} /> 
//   //           <Button title="Start Scan" onPress={this.onStartScan} /> 
//   //           <Button title="Send Data" onPress={this.HealthSamples} /> 
//   //         </View>);
//   // }
// }