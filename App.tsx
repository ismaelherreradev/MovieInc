import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navitagion from '@navigation';

function App() {
  return (
    <SafeAreaProvider>
      <Navitagion />
    </SafeAreaProvider>
  );
}

export default App;
