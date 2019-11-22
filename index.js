'use strict';
import React, { PropTypes, Component } from 'react';
import {
    DeviceEventEmitter,
    NativeModules,
    Platform,
    NativeAppEventEmitter,
    AppState
} from 'react-native'

var clearCacheModuleObj = NativeModules.ClearCacheModule;

class clear {
  constructor () {
  }

  setAppToken(callBack) {
    global.warn('aaa',NativeModules)
  }

  clearAppCache(callBack) {
      clearCacheModuleObj.clearAppCache(callBack);
  }
}
export default new clear();
