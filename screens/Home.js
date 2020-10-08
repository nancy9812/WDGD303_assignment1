// References: 
// https://www.truity.com/page/16-personality-types-myers-briggs
// https://www.16personalities.com/articles/our-theory

import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.text, styles.textTitle]}>Personality Types</Text>
      <Text style={styles.text}>
        Read about the different types of personalities from taking the personality test. Click below to read about the personality types and their meanings.
      </Text>

      <Text style={[styles.text, styles.heading]}>First Letter (I or E)</Text>

      <Text style={[styles.text, styles.subHeading]}>(I)ntroverts</Text>
      <Text style={styles.text}>
        Introverts are energized when spending quiet time alone or in small groups. They tend to be more reserved and thoughtful.
      </Text>

      <Text style={[styles.text, styles.subHeading]}>(E)xtroverts</Text>
      <Text style={styles.text}>
        Extroverts are energized when spending time with people in active surroundings. They tend to be more expressive and outspoken.
      </Text>

      <Text style={[styles.text, styles.heading]}>Second Letter (S or N)</Text>

      <Text style={[styles.text, styles.subHeading]}>(S)ensing</Text>
      <Text style={styles.text}>
        Sensors tend to use their five senses, and are more hands-on learners. They are described as "practical".
      </Text>

      <Text style={[styles.text, styles.subHeading]}>I(N)tuition</Text>
      <Text style={styles.text}>
        Intuitives tend to have a more abstract level of thinking, and they have more interest in theory, patterns, and explanations. They are more concerned about the future rather than the present. Intuitives are described as "creative".
      </Text>

      <Text style={[styles.text, styles.heading]}>Third Letter (T or F)</Text>

      <Text style={[styles.text, styles.subHeading]}>(T)hinking</Text>
      <Text style={styles.text}>
        Thinkers tend to make decisions with their heads, and they are more interested in finding the most logical and reasonable choices.
      </Text>

      <Text style={[styles.text, styles.subHeading]}>(F)eeling</Text>
      <Text style={styles.text}>
        Feelers tend to make decisions with their hearts, and they are more interested in how the decisions they make will affect other people and if it fits their value.
      </Text>

      <Text style={[styles.text, styles.heading]}>Fourth Letter (J or P)</Text>

      <Text style={[styles.text, styles.subHeading]}>(J)udging</Text>
      <Text style={styles.text}>
        Judgers tend to appreciate structure and order. They like to have everything planned out, and they dislike to have last minute changes.
      </Text>

      <Text style={[styles.text, styles.subHeading]}>(P)erception</Text>
      <Text style={styles.text}>
        Perceivers tend to appreciate flexibility and spontaneity, and they like to keep everything open to a change of mind.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 17,
    backgroundColor: "#222222",
  },

  text: {
    color: "#ffffff",
    fontSize: 17,
    textAlign: "center",
    paddingBottom: 17,
  },

  textTitle: {
    color: "#ea5252",
    paddingTop: 50,
    fontSize: 30,
    fontWeight: "700",
  },

  heading: {
    color: "#ac97b4",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  subHeading: {
    fontSize: 18,
  },
});