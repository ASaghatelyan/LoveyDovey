import { View, Animated } from 'react-native'
import React, { useEffect } from 'react'
import Modal from 'react-native-modal'
import { styles } from './style'
import logo from 'app/assets/img/logo.png'

export function LoadingModal(props) {

    let animatedValue = new Animated.Value(0);
    let currentValue = 0;


    animatedValue.addListener(({ value }) => {
        currentValue = value;
    });


    const flipAnimation = () => {
        if (currentValue >= 90) {
            Animated.spring(animatedValue, {
                toValue: 0,
                tension: 10,
                friction: 8,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.spring(animatedValue, {
                toValue: 180,
                tension: 10,
                friction: 8,
                useNativeDriver: false,
            }).start();
        }
    };

    const setInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
    });

    const rotateYAnimatedStyle = {
        transform: [{ rotateY: setInterpolate }],
    };


    let timer = setInterval(() => {
        flipAnimation()
    }, 500);

    useEffect(() => {
        return clearInterval(timer)
    }, [])


    return (
        <Modal
            isVisible={props.isVisible}>
            <View style={styles.modal}>
                <Animated.Image
                    style={[styles.img, rotateYAnimatedStyle]}
                    source={logo} />
            </View>
        </Modal>
    )
}