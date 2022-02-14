import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Colors from "./constants/colors";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

export default function App() {
	const [ userNumber, setUserNumber ] = useState();
	const [ roundsNumber, setRoundsNumber ] = useState(0);
	const [ dataLoaded, setDataLoaded ] = useState(false);
	
	if ( !dataLoaded ) {
		return (
			<AppLoading
				startAsync={ fetchFonts }
				onFinish={ () => setDataLoaded(true) }
				onError={ (err) => console.error(err) }
			/>
		)
	}
	
	const configureNewGameHandler = () => {
		setUserNumber(null);
		setRoundsNumber(0);
	};
	
	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
		setRoundsNumber(0);
	};
	
	const gameOverHandler = numOfRounds => {
		setRoundsNumber(numOfRounds);
	};
	
	let content = <StartGameScreen onStartGame={ startGameHandler }/>;
	
	if ( userNumber && roundsNumber <= 0 ) {
		content = (
			<GameScreen userChoice={ userNumber } onGameOver={ gameOverHandler }/>
		);
	} else if ( roundsNumber > 0 ) {
		content = (
			<GameOverScreen roundsNumber={ roundsNumber } userNumber={ userNumber }
			                onRestart={ configureNewGameHandler }/>
		);
	}
	
	return (
		<SafeAreaView style={ styles.root }>
			<Header title={ 'Guess a Number' }/>
			{ content }
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	}
});
