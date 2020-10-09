import React from "react";
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//switch case to display different info based on which button is clicked
const onButtonPress = (num) => {
  switch (num) {
    case 1:
      return (Alert.alert(`Strengths: \n
      Insightful, Logical, Decisive, Determined, Independent, Versatile\n
      Weaknesses:\n
      Arrogant, Ignores Emotions, Critical, Romantically Clueless`));

    case 2:
      return (Alert.alert(`Strengths:\n
      Imaginative, Creative, Open-Minded, Honest, Analytical, Logical\n
      Weaknesses:\n
      Socially Withdrawn, Absent-Minded, Condescending, Questions Everything`));

    case 3:
      return (Alert.alert(`Strengths:\n
      Efficient, Energetic, Self-Confident Strong-Willed, Strategic, Charismatic, Inspiring, Decisive\n
      Weaknesses:\n
      Stubborn, Dominant, Impatient, Arrogant, Bad Emotional Skills`));

    case 4:
      return (Alert.alert(`Strengths:\n
      Knowledgeable, Quick-Thinkers, Inventive, Brainstorming, Charismatic, Energetic, Theoretical\n
      Weaknesses:\n
      Argumentative, Insensitive, Intolerant, Unfocused`));

    case 5:
      return (Alert.alert(`Strengths:\n
      Creative, Insightful, Principled, Passionate, Selfless\n
      Weaknesses:\n
      Sensitive, Reserved, Perfectionist, Easy Burnouts`));

    case 6:
      return (Alert.alert(`Strengths:\n
      Thoughtful, Generous, Open-Minded, Creative, Loyal to Values, Compassionate\n
      Weaknesses:\n
      Overly Idealistic, Self-Critical, Impractical, Emotionally Driven, Reserved`));

    case 7:
      return (Alert.alert(`Strengths:\n
      Tolerant, Reliable, Charismatic, Selfless, Natural Leaders, Sociable, Expressive\n
      Weaknesses:\n
      Overly Idealistic, Too Selfless, Sensitive, Fluctuating Self-Esteem`));

    case 8:
      return (Alert.alert(`Strengths:\n
      Curious, Observant, Energetic, Enthusiastic, Strong Communication Skills, Playful, Popular, Friendly, Optimistic\n
      Weaknesses:\n
      Poor Practical Skills, Unfocused, Overthinks, Easily Stressed, Highly Emotional, Independent to Fault`));

    case 9:
      return (Alert.alert(`Strengths:\n
      Honest, Direct, Strong-Willed, Responsible, Calm, Practical, Organized, Jack-of-all-Trades\n
      Weaknesses:\n
      Stubborn, Insensitive, Rule-Abider, Judgemental, Unreasonably Self-Blame`));

    case 10:
      return (Alert.alert(`Strengths:\n
      Supportive, Dependable, Patient, Imaginative, Observant, Caring, Loyal, Hard-Working, Good Practical Skills, Organized\n
      Weaknesses:\n
      Humbly Shy, Takes Things Personally, Internalize Feelings, Overload, Hard to Change, Too Selfless`));

    case 11:
      return (Alert.alert(`Strengths:\n
      Dedicated, Strong-Willed, Direct, Honest, Loyal, Patient, Reliable, Organized, Analytical\n
      Weaknesses:\n
      Inflexible, Stubborn, Judgemental, Focused on Social Status, Can't Let Loose, Bad Emotional Skills`));

    case 12:
      return (Alert.alert(`Strengths:\n
      Practical, Responsible, Loyal, Sensitive, Warm, Sociable\n
      Weaknesses:\n
      Worried on Social Status, Inflexible, Too Needy, Too Selfless, Unwilling to Step Out of Comfort Zone`));

    case 13:
      return (Alert.alert(`Strengths:\n
      Optimistic, Troubleshooter, Energetic, Creative, Practical, Spontaneous, Rational, Relaxed, Knows Priorities\n
      Weaknesses:\n
      Stubborn, Insensitive, Reserved, Easily Bored, Dislikes Commitment, Live on the Edge`));

    case 14:
      return (Alert.alert(`Strengths:\n
      Charming, Compassionate, Loyal, Sensitive, Imaginative, Passionate, Curious, Selfless, \n
      Weaknesses:\n
      Unpredictable, Easily Stressed, Overly Competitive, Fluctuating Self-Esteem`));

    case 15:
      return (Alert.alert(`Strengths:\n
      Bold, Rational, Practical, Easy-Going, Creative, Perceptive, Direct, Sociable\n
      Weaknesses:\n
      Insensitive, Impatient, Takes Risks, Unstructured, Living in the Moment, Defiant`));

    case 16:
      return (Alert.alert(`Strengths:\n
      Friendly, Bold, Creative, Aesthetic, Practical, Expressive, Observant, Sociable, Excellent People Skills, Fun-loving\n
      Weaknesses:\n
      Sensitive, Ignores Conflicts, Easily Bored, No Detailed Future Plan, Unfocused`));

    default:
      return (Alert.alert("Error: Invalid Input"));
  }
}

export default function Chart({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.text, styles.textTitle]}>Personality Chart</Text>
      <Text style={styles.text}>Click the buttons below to read about each personality type's strengths and weaknesses.</Text>

      {/* Two Buttons Beside */}
      <View style={styles.buttonRow}>
        {/* onpress button passes a value to see which info to show; show image beside text centered*/}
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(1)}>
          <Image style={styles.imageBtn} source={require("../assets/images/chess-intj.png")} />
          <Text style={styles.text}>INTJ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(2)}>
          <Image style={styles.imageBtn} source={require("../assets/images/tube-intp.png")} />
          <Text style={styles.text}>INTP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(3)}>
          <Image style={styles.imageBtn} source={require("../assets/images/podium-entj.png")} />
          <Text style={styles.text}>ENTJ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(4)}>
          <Image style={styles.imageBtn} source={require("../assets/images/lightbulb-entp.png")} />
          <Text style={styles.text}>ENTP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(5)}>
          <Image style={styles.imageBtn} source={require("../assets/images/wand-infj.png")} />
          <Text style={styles.text}>INFJ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(6)}>
          <Image style={styles.imageBtn} source={require("../assets/images/nature-infp.png")} />
          <Text style={styles.text}>INFP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(7)}>
          <Image style={styles.imageBtn} source={require("../assets/images/sword-enfj.png")} />
          <Text style={styles.text}>ENFJ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(8)}>
          <Image style={styles.imageBtn} source={require("../assets/images/backpack-enfp.png")} />
          <Text style={styles.text}>ENFP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(9)}>
          <Image style={styles.imageBtn} source={require("../assets/images/book-istj.png")} />
          <Text style={styles.text}>ISTJ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(10)}>
          <Image style={styles.imageBtn} source={require("../assets/images/shield-isfj.png")} />
          <Text style={styles.text}>ISFJ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(11)}>
          <Image style={styles.imageBtn} source={require("../assets/images/ruler-estj.png")} />
          <Text style={styles.text}>ESTJ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(12)}>
          <Image style={styles.imageBtn} source={require("../assets/images/cake-esfj.png")} />
          <Text style={styles.text}>ESFJ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(13)}>
          <Image style={styles.imageBtn} source={require("../assets/images/hammer-istp.png")} />
          <Text style={styles.text}>ISTP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(14)}>
          <Image style={styles.imageBtn} source={require("../assets/images/paint-isfp.png")} />
          <Text style={styles.text}>ISFP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(15)}>
          <Image style={styles.imageBtn} source={require("../assets/images/lightning-estp.png")} />
          <Text style={styles.text}>ESTP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => onButtonPress(16)}>
          <Image style={styles.imageBtn} source={require("../assets/images/mic-esfp.png")} />
          <Text style={styles.text}>ESFP</Text>
        </TouchableOpacity>
      </View>

      <Button color="#ea5252"
        title="Go Back Home"
        onPress={() =>
          navigation.navigate("Home", {
            itemId: 100,
          })
        }
      />
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
    flex: 1,
    color: "#ffffff",
    textAlign: "center",
    margin: 10,
    fontSize: 17,
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

  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
  },

  btn: {
    backgroundColor: "#ac97b4",
    flex: 1,
    margin: 7,
    padding: 17,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  imageBtn: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});