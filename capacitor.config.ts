import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'co.sigess.app',
  appName: 'Sigess',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      'android-minSdkVersion': '24',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '0',
      iosPersistentFileLocation: 'Compatibility',
      WKWebViewOnly: 'true',
      iosExtraFilesystems: 'library,library-nosync,documents,documents-nosync,cache,bundle,root'
    }
  }
};

export default config;
