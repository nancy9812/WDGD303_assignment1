import React, { useRef, useEffect } from "react";
import { Animated, Button, Image, StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

function Analysts() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const isFocused = useIsFocused();

  // Fade animation that last 1.5 seconds
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    return () => fadeAnim.setValue(0);
  }, [fadeAnim, isFocused]);

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.text, styles.textTitle]}>Analysts</Text>
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
        <Text style={[styles.text, styles.heading]}>Architect (INTJ)</Text>
        <Image style={styles.image} source={require('../assets/images/chess-intj.png')}/>
        <Text style={styles.text}>
          Architects are imaginative and strategic thinkers that always have a plan for everything. They are always eager to solve problems analytically to improve systems with their innovative ideas. Architects have a talent for seeing possibilities for improvement.
        </Text>

        <Text style={[styles.text, styles.heading]}>Logician (INTP)</Text>
        <Image style={styles.image} source={require('../assets/images/tube-intp.png')}/>
        <Text style={styles.text}>
          Logicians are innovative inventors that always want to gain more knowledge, and they are fascinated by logical analysis, systems, and designs. They want to know the theory and law behind everything.
        </Text>

        <Text style={[styles.text, styles.heading]}>Commander (ENTJ)</Text>
        <Image style={styles.image} source={require('../assets/images/podium-entj.png')}/>
        <Text style={styles.text}>
          Commanders are bold, strong-willed, strategic leaders that are motivated to organize change. They are quick to see inefficiency and think of new solutions that may include a long-range plan. Commanders will find a way to follow through with their plans or they will make a way.
        </Text>

        <Text style={[styles.text, styles.heading]}>Debater (ENTP)</Text>
        <Image style={styles.image} source={require('../assets/images/lightbulb-entp.png')}/>
        <Text style={styles.text}>
          Debaters are smart, curious thinkers that are motivated to find new solutions to intellectually challenging problems. They seek to understand the people, systems, and principles that surround them.
        </Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#222222",
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

export default Analysts;
