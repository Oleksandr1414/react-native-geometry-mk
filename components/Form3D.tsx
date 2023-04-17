import PentagonalPyramid from "../models/pentagonal_pyramid";
import React from "react";
import RectanglePrism from "../models/rectangle_prism";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "../styles/global";

export default function Form3D() {
  const [isRectanglePrism, setIsRectanglePrism] =
    React.useState<boolean>(false);

  const [a, setA] = React.useState<number>(0);
  const [b, setB] = React.useState<number>(0);
  const [h, seth] = React.useState<number>(0);
  const [H, setH] = React.useState<number>(0);

  const viewResult = (volume: number, area: number) => {
    return (
      <View style={styles.result}>
        <Text style={{ fontSize: 20 }}>Volume: {volume}</Text>
        <Text style={{ fontSize: 20 }}>Total Area: {area}</Text>
      </View>
    );
  };

  const shape = React.useMemo(() => {
    if (isRectanglePrism) {
      if (!a || !h || !b) {
        return (
          <Text style={{ fontSize: 24 }}>
            <i>Input parametrs..</i>
          </Text>
        );
      }

      const shapeObj: RectanglePrism = new RectanglePrism(a, b, h);
      return viewResult(shapeObj.getVolume(), shapeObj.getTotalArea());
    } else {
      if (!a || !h || !H) {
        return (
          <Text style={{ fontSize: 24 }}>
            <i>Input parametrs..</i>
          </Text>
        );
      }
      const shapeObj: PentagonalPyramid = new PentagonalPyramid(a, h, H);
      return viewResult(shapeObj.getVolume(), shapeObj.getTotalArea());
    }
  }, [a, b, h, H]);

  return (
    <View>
      <Text style={{ fontSize: 40, textAlign: "center", padding: 5 }}>
        3D Shapes
      </Text>
      <View style={styles.navigation}>
        <Button
          title="Rectangle Prism"
          onPress={() => setIsRectanglePrism(true)}
        />
        <Button
          title="Pentagonal Pyramid"
          onPress={() => setIsRectanglePrism(false)}
        />
      </View>
      <Text style={styles.selectedFigure}>
        {isRectanglePrism ? "Rectanlge Prism" : "Pentagonal Pyramid"}
      </Text>
      <View style={styles.container}>
        <Text style={styles.label}>a:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder={a.toString()}
          onChangeText={(v) => setA(+v)}
        />
        <Text style={styles.label}>h:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder={h.toString()}
          onChangeText={(v) => seth(+v)}
        />
        {isRectanglePrism ? (
          <>
            <Text style={styles.label}>b:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder={b.toString()}
              onChangeText={(v) => setB(+v)}
            />
          </>
        ) : (
          <>
            <Text style={styles.label}>H:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder={H.toString()}
              onChangeText={(v) => setH(+v)}
            />
          </>
        )}
        {shape}
      </View>
    </View>
  );
}
