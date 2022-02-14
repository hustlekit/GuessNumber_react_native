import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from "../constants/colors";

const NumberContainer = props => {
	return (
		<View style={ styles.root }>
			<Text style={ styles.number }>{ props.children }</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		borderWidth: 2,
		borderColor: Colors.secondary,
		padding: 10,
		borderRadius: 10,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	number: {
		color: Colors.secondary,
		fontSize: 22
	}
});

export default NumberContainer;
