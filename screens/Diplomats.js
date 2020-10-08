import React, { useRef, useEffect } from "react";
import { Animated, Button, Image, StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

function Diplomats() {
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
      <Text style={[styles.text, styles.textTitle]}>Diplomats</Text>
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
        <Text style={[styles.text, styles.heading]}>Advocate (INFJ)</Text>
        <Image style={styles.image} source={require('../assets/images/wand-infj.png')}/>
        <Text style={styles.text}>
          Advocates are quiet and mystical creative nurturers that have a strong sense of personal integrity and drive to help others to realize their potential. They are very inspiring and dedicated to help others with original solutions to personal challenges.
        </Text>

        <Text style={[styles.text, styles.heading]}>Mediator (INFP)</Text>
        <Image style={styles.image} source={require('../assets/images/nature-infp.png')}/>
        <Text style={styles.text}>
          Mediators are imaginative idealists that are guided by their own core values and beliefs. They look at all the possibilities and plan for a better future.
        </Text>

        <Text style={[styles.text, styles.heading]}>Protagonist (ENFJ)</Text>
        <Image style={styles.image} source={require('../assets/images/sword-enfj.png')}/>
        <Text style={styles.text}>
          Protagonists are charismatic and inspiring organizers that are able to mesmerize their listeners. They want to implement their visions to do what's best for humanity.
        </Text>

        <Text style={[styles.text, styles.heading]}>Campaigner (ENFP)</Text>
        <Image style={styles.image} source={require('../assets/images/backpack-enfp.png')}/>
        <Text style={styles.text}>
          Campaigners are enthusiastic, creative, people-centered creators that can always find a way to smile. They love to help others to explore their creative potential.
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

export default Diplomats;
