import React, { useRef, useEffect } from "react";
import { Animated, Button, Image, StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

function Sentinels() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const isFocused = useIsFocused();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    return () => fadeAnim.setValue(0);
  }, [fadeAnim, isFocused]);

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.text, styles.textTitle]}>Sentinels</Text>
      <Animated.View
        style={{
          paddingBottom: 30,
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <Text style={[styles.text, styles.heading]}>Virtuoso (ISTP)</Text>
        <Image style={styles.image} source={require('../assets/images/hammer-istp.png')}/>
        <Text style={styles.text}>
          Virtuosos are bold and observant artisans with the understanding of mechanics, and they are the master of all types of tools. They approach their environments with flexible logic and look for practical solutions. Virtuosos have an interest in troubleshooting.
        </Text>

        <Text style={[styles.text, styles.heading]}>Adventurer (ISFP)</Text>
        <Image style={styles.image} source={require('../assets/images/paint-isfp.png')}/>
        <Text style={styles.text}>
          Adventurers are flexible and charming artists that are always ready to explore new things. They tend to live in the present memory and enjoy their surroundings in a cheerful way. The go with the flow kind of people.
        </Text>

        <Text style={[styles.text, styles.heading]}>Entrepreneur (ESTP)</Text>
        <Image style={styles.image} source={require('../assets/images/lightning-estp.png')}/>
        <Text style={styles.text}>
          Entrepreneurs are smart energetic perceptive thrill-seekers who enjoy living on the edge. They bring dynamic energy to all their interactions.
        </Text>

        <Text style={[styles.text, styles.heading]}>Entertainer (ESFP)</Text>
        <Image style={styles.image} source={require('../assets/images/mic-esfp.png')}/>
        <Text style={styles.text}>
          Entertainers are spontaneous, energetic, lively performers who charm and engage those around them. They love to take pleasure in things around them; life is never boring when being with an entertainer.
        </Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#222",
  },
  
  text: {
    color: "#ffffff",
    textAlign: "center",
    margin: 10,
    fontSize: 17,
  },

  textTitle: {
    color: "#ea5252",
    paddingTop: 25,
    fontSize: 30,
    fontWeight: "700",
  },

  heading: {
    color: "#ac97b4",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  image: {
    width: "40%",
    height: undefined,
    aspectRatio: 1,
    alignSelf: "center",
    resizeMode: "contain",
  },
});

export default Sentinels;
