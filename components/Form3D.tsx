import ListPentagonalPyramids from "../models/lists/list_pentagonal_pyramid";
import ListRectanglePrisms from "../models/lists/list_rectangle_prism";
import PentagonalPyramid from "../models/pentagonal_pyramid";
import React from "react";
import RectanglePrism from "../models/rectangle_prism";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "../styles/global";

const listPentagonalPyramids: ListPentagonalPyramids =
  new ListPentagonalPyramids();
const listRectanglePrisms: ListRectanglePrisms = new ListRectanglePrisms();

export default function Form3D() {
  const [isRectanglePrism, setIsRectanglePrism] =
    React.useState<boolean>(false);
  const [isUpdate, setIsUpdate] = React.useState<boolean>(false);

  const [a, setA] = React.useState<number>(0);
  const [b, setB] = React.useState<number>(0);
  const [h, seth] = React.useState<number>(0);
  const [H, setH] = React.useState<number>(0);

  const resultBox = (volume: number, area: number) => {
    return (
      <View style={styles.result} key={Math.random() * 1000}>
        <Text style={{ fontSize: 20 }}>Volume: {volume}</Text>
        <Text style={{ fontSize: 20 }}>Total Area: {area}</Text>
      </View>
    );
  };

  const calculate = () => {
    if (isRectanglePrism) {
      if (!a || !h || !b) {
        alert("Input parametrs..");
        return;
      }
      listRectanglePrisms.addItem(new RectanglePrism(a, b, h));
    } else {
      if (!a || !h || !H) {
        alert("Input parametrs..");
        return;
      }
      listPentagonalPyramids.addItem(new PentagonalPyramid(a, h, H));
    }
  };

  const viewList = (arr: any) => {
    const list: any = [];
    for (let i = 0; i < arr.getSize(); i++) {
      const shapeObj = arr.getItem(i);
      list.push(resultBox(shapeObj.getVolume(), shapeObj.getTotalArea()));
    }
    return list;
  };

  const result = React.useMemo(() => {
    return [
      <Text
        style={{ fontSize: 16, fontWeight: "bold", padding: "5px 0" }}
        key={"text1"}
      >
        Rectangle Prisms -----------------------------
      </Text>,
      ...viewList(listRectanglePrisms),
      <Text
        style={{ fontSize: 16, fontWeight: "bold", padding: "5px 0" }}
        key={"text2"}
      >
        Pentagonal Pyramids -------------------------
      </Text>,
      ...viewList(listPentagonalPyramids),
    ];
  }, [isUpdate]);

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
