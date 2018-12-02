import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { SECRET_SHARED_CODE, withData } from "shared";

const App = ({ apiState, data, refetchData, errors = {} }) => {
  const canRetry = apiState.isSuccess() || apiState.isError();
  return (
    <View style={styles.container}>
      <Text style={styles.getStartedText}>Monorepo Demo</Text>
      <Text style={styles.getStartedText1}>This text is coming from shared component: <Text style={styles.sharedText}>{SECRET_SHARED_CODE}</Text></Text>
      <Button onPress={refetchData} title="Trigger shared alert" />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 25,
    padding: 10
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },

  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
    textAlign: "center"
  },
  boldText: {
    fontWeight: "800"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginTop: 10
  },
  getStartedText1: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  },
  sharedText: {
    color: "red"
  }
});

export default withData(App);
