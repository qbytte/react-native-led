import React, { useState, useEffect } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native-web";

const Bulb = () => {
  const [isLit, setIsLit] = useState(false);

  const fetchData = () => {
    return fetch(
      "https://arduino-led-48439-default-rtdb.firebaseio.com/led.json"
    )
      .then((response) => response.json())
      .then((json) => json.status)
      .catch((error) => console.error(error));
  };

  const handlePress = async () => {
    await fetch(
      "https://arduino-led-48439-default-rtdb.firebaseio.com/led/.json",
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: !isLit,
        }),
      }
    );
    const led = await fetchData();
    setIsLit(led);
  };

  useEffect(async () => {
    const led = await fetchData();
    setIsLit(led);
    console.log(led);
  }, []);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image
        style={styles.img}
        source={isLit ? require("../img/On.png") : require("../img/Off.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 244,
    height: 400,
  },
  img: {
    height: "100%",
  },
});

export { Bulb };
