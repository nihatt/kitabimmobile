import * as Font from "expo-font";
 
export default useFontsx = async () =>
  await Font.loadAsync({
    'Rubik-Dirt': require('../assets/fonts/RubikDirt-Regular.ttf'),
    'Anton-Regular':require('../assets/fonts/Anton-Regular.ttf'),
    'IndieFlower':require('../assets/fonts/IndieFlower-Regular.ttf'),
    'Pacifico-Regular':require('../assets/fonts/Pacifico-Regular.ttf'),
    'ShadowsIntoLight-Regular':require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
  });