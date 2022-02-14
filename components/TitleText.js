import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TitleText = props => {
	return (
		<Text style={ { ...styles.root, ...props.style } }>{ props.children }</Text>
	);
};

const styles = StyleSheet.create({
	root: {
		color: 'black',
		fontSize: 18,
		fontFamily: 'open-sans-bold'
	}
});

export default TitleText;
