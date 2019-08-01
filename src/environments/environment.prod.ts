export const environment = {
  production: true,
  urlBase: 'https://vive.axity.com:3000/api',
  urlClient: 'https://vive.axity.com',
  //social login configuration
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
  recover: '/recover',
  findClient: '/findClient',
  getAllLogins: '/meraky/users',
  ar: '/getAr',
  checkAlias: '/checkAlias',
  //otros
  userRegisterMethod: {
    email: 'EMAIL',
    fb: 'FB',
    gmail: 'GMAIL',
    in: 'LINKEDIN'
  },
  meraki: {
    baseGrantUrl: 'base_grant_url',
    userContinueUrl: 'https://vive.axity.com/arrender',
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
