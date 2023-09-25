import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  const facts = [
    {
      fact: "I enjoy fishing",
      image: require("./assets/fishing.gif")
    },
    {
      fact: "I mostly play FPS games in my spare time",
      image: require("./assets/bomb.jpg")
    },
    {
      fact: "My favourite course so far is COMP6080",
      image: require("./assets/lingscar.png")
    }, {
      fact: "I once slipped on a banana peel",
      image: require("./assets/banana.gif")
    }, {
      fact: "My favourite food is ramen",
      image: require("./assets/ramen.jpg")
    }
  ]

  const [displayImage, useDisplayImage] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <ImageBackground style={[styles.bannerImage, (displayImage ? {} : { opacity: 0 })]} resizeMode='cover' source={require("./assets/bg.jpg")} />
      </View>
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          {displayImage && <Image alt='Photo of Weichen Tie' style={styles.image} source={require("./assets/peng.png")} />}
        </View>
        <Text style={styles.h1}>Weichen Tie</Text>
        <Text style={styles.p}>B. Computer Science/Mechatronics Engineering</Text>
        <ScrollView
          style={styles.list}>
          {facts.map((item, index) => {
            return <View style={styles.fact} key={index}>
              <View style={styles.factText}>
                <Text style={styles.h2}>Fun Fact #{index + 1}</Text>
                <Text style={styles.p}>{item.fact}</Text>
              </View>
              {displayImage && <Image alt={item.fact} style={styles.factImage} source={item.image} />}
            </View>
          })}
        </ScrollView>
        <TouchableOpacity
          onPress={() => useDisplayImage((displayImage) => !displayImage)}
          title="Toggle Images"
          style={styles.button}
        >
          <Text style={styles.p}>Toggle Image Visiblility</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    backgroundColor: '#111827',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  banner: {
    width: '100%',
    height: 170,
    borderBottomWidth: 4,
    borderBottomColor: "#BF125D"
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 128,
    height: 128,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#BF125D",
    overflow: "hidden",
    marginTop: -128 * 10 / 12
  },

  fact: {
    padding: 8,
    height: 84,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "#34344A",
    borderRadius: 8,
    marginBottom: 8,
    gap: 8,
  },
  factText: {
    flex: 1,
  },
  factImage: {
    backgroundColor: "white",
    borderRadius: 4,
    height: "100%",
    width: "auto",
    aspectRatio: 1,
  },

  main: {
    flex: 1,
    width: "100%",
    padding: 16,
  },

  list: {
    flexDirection: "column",
    gap: 8,
    marginTop: 16
  },

  h1: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: "#F9FAFB"
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#D1D5DB"
  },
  p: {
    fontSize: 16,
    color: "#D1D5DB",
  },
  button: {
    marginVertical: 8,
    alignItems: 'center',
    backgroundColor: '#BF125D',
    padding: 12,
    borderRadius: 8,
  },
});
