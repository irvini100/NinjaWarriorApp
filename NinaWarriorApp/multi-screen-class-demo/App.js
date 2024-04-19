//First section
//list import libraries.
//This will be used to work with multi-pages.
import 'react-native-gesture-handler';
//This will allow ust to place a status bar at the top of the page
import {StatusBar} from 'expo-status-bar';
//This will add our use state for us to our app.
import React, {useState} from 'react';
//Add in all the HTML like tags that we will use in this app.
import { Text, View, Pressable, ImageBackground, Image, TextInput, Button } from 'react-native';
//SCREEN not MAP navigation
import {NavigationContainer} from '@react-navigation/native';
//This library import the specific type of Navigation we will use
//In this case we are using stack nav.  Again this is screen not map related.
import {createStackNavigator} from '@react-navigation/stack';
//This will add audio to the lib.
import {Audio} from 'expo-av';

//Add the sound function to the app.
function playWindSound() {
  (async () => {
    try{
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/Wind.mp3'));
      await sound.setIsLoopingAsync(true);
      await sound.setVolumeAsync(1);
      await sound.playAsync(true);

    }catch{
      console.error(error);
    }
  })();
}

player_name = 'Ninja';
function Alerts() {
  alert('Hello!');
}
 
 
//Lets make our intro, landing, and first screen.  This is not a splash screen.
//This is more for intro and directions.
//For this app this will be our WELCOME SCREEN.
function IntroScreen({navigation}){
  return(
    <View>
    <ImageBackground source={require('./FinalStage.jpg')} style={{ width:  '100%', height:  '100%'}}>
    <Text style={{color:  'red', alignSelf:  'center', fontSize:  25}}>This is the fan site for:</Text>
      <Image source={require('./American_Ninja_Warrior_Logo.jpg')} style={{ width:  '30%', height:  '20%', alignSelf:  'center'}}>
    </Image>
    <Text style={{color:  'red', fontsize:  18}}>{'\n\n\n'}American Ninja Warrior is an American sports entertainment reality show based on the Japanese television reality show Sasuke. It features thousands of competitors attempting to complete series of obstacle courses of increasing difficulty in various cities across the United States, in hopes of advancing to the national finals on the Las Vegas Strip and becoming the season's "AMERICAN NINJA WARRIOR."</Text>
     <Pressable onPress={() => navigation.navigate("ANW Fan Club")}>
    <Text style={{color:  'red', fontSize:  20}}>{'\n\n\n'}Click here to join the fan club of American Ninja Warrior.</Text>
    </Pressable>
    </ImageBackground>
    </View>
  );
}
//Lets make our Main App screen, not our first screen.
//This screen is the one our user will probabaly be in the most
//FOR THIS APP this will boe our HISTORY PART 1.
function MainScreen({navigation}){
  const [password, setuserpassword, user, setuser] = useState("");
  return(
    <View>
    <ImageBackground source={require('./NinjaBackground.jpg')} style={{ width:  '100%', height:  '100%'}}>
    <Image source={require('./American_Ninja_Warrior_Logo.jpg')} style={{width:  '60%', height:  '30%', alignSelf:  'center'}}>
    </Image>
    <Text style={{fontSize:  30, color:  'yellow', alignSelf:  'center'}}>{'\n'}Fan Club</Text>
    <Button onPress={playWindSound} title="Play Wind Sound" color="red"/>
    <Text>Sign in:</Text>
    <TextInput style={{
      width:  200,
      backgroundColor:   'yellow',
      height:  50,
      padding:  10,
      margin:  10
    }}
    value={password}
    onChangeText={(password) => setuserpassword(password)}
    placeholder={'Type password here'} />
    <Pressable
         onPress={() => navigation.navigate('ANW Fan Club Confirmed')}>
        <Text style={{color:  'red'}}>Click to join!</Text>
      </Pressable>
      </ImageBackground>
    </View>
  );
}
function EndScreen({navigation}){
  Alerts();
  return (
    <View>
    <Text style={{fontSize:  25, color:  'green'}}>{'\n\n\n'}Thank you!</Text>
    <Text>Thanks {player_name} for joining American Ninja Warrior Fan Club</Text>
    <Pressable onPress={() => navigation.navigate('Welcome')}>
    <Text style={{color:  'green'}}>Go back to the Welcome Screen!</Text>
    </Pressable>
     <Image source={require('./assets/cartoon-ninja.jpg')} style={{width:  '70%', height:  '50%', alignSelf:  'center'}}>
    </Image>
    </View>
  );
}
//Create our stack navigator here, that we will use below in our routing function.
const Stack = createStackNavigator();
//This is Not a screen, this is the firs function our app will run
//We will put the routing to all screen logic in this function.
//Each time we add a new function for a new screen, we must add code here also.
function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator intialRouteName="Welcome">
<Stack.Screen name="Welcome" component={IntroScreen} />
<Stack.Screen name="ANW Fan Club" component={MainScreen} />
<Stack.Screen name="ANW Fan Club Confirmed" component={EndScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
//This is what starts our app.
//Think of this like our main function but it is called app.
export default App

