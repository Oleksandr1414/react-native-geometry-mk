import React from "react";
import Rectangle from "../models/rectangle";
import Rhomb from "../models/rhomb";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "../styles/global";

export default function Form2D() {
  const [isRhombSelected, setIsRhombSelected] = React.useState<boolean>(false);

  const [a, setA] = React.useState<number>(0);
  const [b, setB] = React.useState<number>(0);
  const [h, setH] = React.useState<number>(0);
  const [d1, setD1] = React.useState<number>(0);
  const [d2, setD2] = React.useState<number>(0);

  const viewResult = (p: number, area: number, r: number, R: number) => {
    return (
      <View style={styles.result}>
        <Text style={{ fontSize: 17 }}>Perimeter: {p}</Text>
        <Text style={{ fontSize: 17 }}>Area: {area}</Text>
        <Text style={{ fontSize: 17 }}>Inscribed Radius: {r}</Text>
        <Text style={{ fontSize: 17 }}>Circumscribed Radius: {R}</Text>
      </View>
    );
  };

  const shape = React.useMemo(() => {
    if (isRhombSelected) {
      if (!a || !h || !d1 || !d2) {
        return (
          <Text style={{ fontSize: 24 }}>
            <i>Input parametrs..</i>
          </Text>
        );
      }
      const shapeObj: Rhomb = new Rhomb(a, h, d1, d2);
      return viewResult(
        shapeObj.getPerimeter(),
        shapeObj.getArea(),
        shapeObj.getInscribedRadius(),
        shapeObj.getCircumscribedRadius()
      );
    } else {
      if (!a || !b) {
        return (
          <Text style={{ fontSize: 24 }}>
            <i>Input parametrs..</i>
          </Text>
        );
      }

      const shapeObj: Rectangle = new Rectangle(a, b);
      return viewResult(
        shapeObj.getPerimeter(),
        shapeObj.getArea(),
        shapeObj.getInscribedRadius(),
        shapeObj.getCircumscribedRadius()
      );
    }
  }, [a, b, h, d1, d2]);

  return (
    <View>
      <Text style={{ fontSize: 40, textAlign: "center", padding: 5 }}>
        2D Shapes
      </Text>
      <View style={styles.navigation}>
        <Button title="Rhomb" onPress={() => setIsRhombSelected(true)} />
        <Button title="Rectangle" onPress={() => setIsRhombSelected(false)} />
      </View>
      <Text style={styles.selectedFigure}>
        {isRhombSelected ? "Rhomb" : "Rectangle"}
      </Text>
      <View style={styles.container}>
        <Text style={styles.label}>a:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder={a.toString()}
          onChangeText={(v) => setA(+v)}
        />
        {isRhombSelected ? (
          <>
            <Text style={styles.label}>h:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder={h.toString()}
              onChangeText={(v) => setH(+v)}
            />
            <Text style={styles.label}>d1:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder={d1.toString()}
              onChangeText={(v) => setD1(+v)}
            />
            <Text style={styles.label}>d2:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder={d2.toString()}
              onChangeText={(v) => setD2(+v)}
            />
          </>
        ) : (
          <>
            <Text style={styles.label}>b:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder={b.toString()}
              onChangeText={(v) => setB(+v)}
            />
          </>
        )}
        {shape}
      </View>
    </View>
  );
}
