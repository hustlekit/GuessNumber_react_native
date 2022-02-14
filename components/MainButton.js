import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from "../constants/colors";

const MainButton = props => {
	let ButtonComponent = TouchableOpacity;
	
	if ( Platform.OS === 'android' && Platform.Version >= 21 ) {
		ButtonComponent = TouchableNativeFeedback;
	}
	
	return (
		<View style={ styles.container }>
			<ButtonComponent onPress={ props.onPress }>
				<View style={ { ...styles.root, ...props.style, ...props.color } }>
					<Text style={ styles.text }>{ props.children }</Text>
				</View>
			</ButtonComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 25,
		overflow: 'hidden'
	},
	root: {
		backgroundColor: Colors.primary,
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 15
	},
	text: {
		color: 'white',
		fontFamily: 'open-sans',
		fontSize: 18
	}
});

export default MainButton;
