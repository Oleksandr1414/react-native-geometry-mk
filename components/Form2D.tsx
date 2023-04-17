import ListRectangles from "../models/lists/list_rectangles";
import ListRhombs from "../models/lists/list_rhombs";
import React from "react";
import Rectangle from "../models/rectangle";
import Rhomb from "../models/rhomb";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "../styles/global";

const listRhombs: ListRhombs = new ListRhombs();
const listRectangles: ListRectangles = new ListRectangles();

export default function Form2D() {
  const [isRhombSelected, setIsRhombSelected] = React.useState<boolean>(false);
  const [isUpdate, setIsUpdate] = React.useState<boolean>(false);

  const [a, setA] = React.useState<number>(0);
  const [b, setB] = React.useState<number>(0);
  const [h, setH] = React.useState<number>(0);
  const [d1, setD1] = React.useState<number>(0);
  const [d2, setD2] = React.useState<number>(0);

  const resultBox = (p: number, area: number, r: number, R: number) => {
    return (
      <View style={styles.result} key={Math.random() * 1000}>
        <Text style={{ fontSize: 17 }}>Perimeter: {p}</Text>
        <Text style={{ fontSize: 17 }}>Area: {area}</Text>
        <Text style={{ fontSize: 17 }}>Inscribed Radius: {r}</Text>
        <Text style={{ fontSize: 17 }}>Circumscribed Radius: {R}</Text>
      </View>
    );
  };

  const calculate = () => {
    if (isRhombSelected) {
      if (!a || !h || !d1 || !d2) {
        alert("Input parametrs..");
        return;
      }
      listRhombs.addItem(new Rhomb(a, h, d1, d2));
    } else {
      if (!a || !b) {
        alert("Input parametrs..");
        return;
      }
      listRectangles.addItem(new Rectangle(a, b));
    }
  };

  const viewList = (arr: any) => {
    const list: any = [];
    for (let i = 0; i < arr.getSize(); i++) {
      const shapeObj = arr.getItem(i);
      list.push(
        resultBox(
          shapeObj.getPerimeter(),
          shapeObj.getArea(),
          shapeObj.getInscribedRadius(),
          shapeObj.getCircumscribedRadius()
        )
      );
    }
    return list;
  };

  const result = React.useMemo(() => {
    return [
      <Text
        style={{ fontSize: 16, fontWeight: "bold", padding: "5px 0" }}
        key={"text1"}
      >
        Rhombs ----------------------------
      </Text>,
      ...viewList(listRhombs),
      <Text
        style={{ fontSize: 16, fontWeight: "bold", padding: "5px 0" }}
        key={"text2"}
      >
        Rectangles -------------------------
      </Text>,
      ...viewList(listRectangles),
    ];
  }, [isUpdate]);

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
        <View style={styles.inputContainer}>
          <Text style={styles.label}>a:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder={a.toString()}
            onChangeText={(v) => setA(+v)}
          />
        </View>
        {isRhombSelected ? (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>h:</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder={h.toString()}
                onChangeText={(v) => setH(+v)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>d1:</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder={d1.toString()}
                onChangeText={(v) => setD1(+v)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>d2:</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder={d2.toString()}
                onChangeText={(v) => setD2(+v)}
              />
            </View>
          </>
        ) : (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>b:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder={b.toString()}
              onChangeText={(v) => setB(+v)}
            />
          </View>
        )}
        <Button
          title="Calc"
          onPress={() => {
            setIsUpdate(!isUpdate);
            calculate();
          }}
        />
        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
          History
        </Text>
        <View style={styles.resultBox}>{result}</View>
      </View>
    </View>
  );
}
