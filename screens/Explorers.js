import React, { useRef, useEffect } from "react";
import { Animated, Image, StyleSheet, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function Explorers() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
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
      <Text style={[styles.text, styles.textTitle]}>Explorers</Text>
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
        <Text style={[styles.text, styles.heading]}>Logistician (ISTJ)</Text>
        <Image style={styles.image} source={require('../assets/images/book-istj.png')} />
        <Text style={styles.text}>
          Logisticians are practical, fact-minded, responsible organizers that are driven to create and enforce order.
        </Text>

        <Text style={[styles.text, styles.heading]}>Defender (ISFJ)</Text>
        <Image style={styles.image} source={require('../assets/images/shield-isfj.png')} />
        <Text style={styles.text}>
          Defenders are very dedicated and industrious protectors that are loyal to traditions and organizations. They are practical, compassionate, and caring. Defenders are motivated to provide for others and protect their loved ones.
        </Text>

        <Text style={[styles.text, styles.heading]}>Executive (ESTJ)</Text>
        <Image style={styles.image} source={require('../assets/images/ruler-estj.png')} />
        <Text style={styles.text}>
          Executives are excellent admins that are unsurpassed when managing things or people. They are hardworking traditionalists that are eager to take charge in organizing projects and people. They get things done ine  asystematic methodical way.
        </Text>

        <Text style={[styles.text, styles.heading]}>Consul (ESFJ)</Text>
        <Image style={styles.image} source={require('../assets/images/cake-esfj.png')} />
        <Text style={styles.text}>
          Consuls are extraordinarily caring and socially popular that are always eager to help. They are sensitive to other's needs and also energetically dedicated to their own responsibilities. Consuls are highly aware of their emotional environment, and they are attentive to the feelings of others and how others see them.
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
