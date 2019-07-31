// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlBase: 'https://vive.axity.com:3000/api',
  urlClient: 'http://10.11.10.128:4200',
  // social login configuration
  fbAppId: '2192915390823251',
  fbVersion: 'v3.3',
  fbUrlSDK: 'https://connect.facebook.net/en_US/sdk.js',
  fbJSSDK: 'facebook-jssdk',
  // endpoints
  sendNotification: 'https://fcm.googleapis.com/fcm/send',
  subscriptionToTopicPart1: 'https://iid.googleapis.com/iid/v1/',
  subscriptionToTopicPart2: '/rel/topics/axity',
  users: '/users',
  login: '/login',
  register: '/addClient',
  findClient: '/findClient',
  getAllLogins: '/meraky/users',
  ar: '/getAr',
  checkAlias: '/checkAlias',
  // otros
  userRegisterMethod: {
    email: 'EMAIL',
    fb: 'FB',
    gmail: 'GMAIL',
    in: 'LINKEDIN'
  },
  meraki: {
    baseGrantUrl: 'base_grant_url',
    userContinueUrl: 'http://10.11.10.128:4200/arrender',
    continueUrl: '?continue_url='
  },
  firebase: {
    apiKey: 'AIzaSyBB6PgAgEI8EMKRCULnxuJ9BuxAS0eCRmA',
    authDomain: 'spider-8861e.firebaseapp.com',
    databaseURL: 'https://spider-8861e.firebaseio.com',
    projectId: 'spider-8861e',
    storageBucket: 'spider-8861e.appspot.com',
    messagingSenderId: '798857087226',
    appId: '1:798857087226:web:d110548c55a76ca4'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
