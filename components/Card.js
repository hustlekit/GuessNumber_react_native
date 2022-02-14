import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from "../constants/colors";

const Card = props => {
	return (
		<View style={ { ...styles.card, ...props.style } }>
			{props.children}
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		backgroundColor: 'white',
		elevation: 7,
		padding: 20,
		borderRadius: 10
	}
});

export default Card;
