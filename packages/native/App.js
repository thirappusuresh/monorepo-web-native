import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { SECRET_SHARED_CODE, withData } from "shared";

const App = ({ apiState, data, refetchData, errors = {} }) => {
  const canRetry = apiState.isSuccess() || apiState.isError();
  return (
    <View style={styles.container}>
      <Text style={styles.getStartedText}>Data fetching example: {SECRET_SHARED_CODE}</Text>
      {apiState.isIdle() && <Text>This will never be idle</Text>}
      {apiState.isPending() && (
        <Text style={styles.codeHighlightText}>
          Please wait, <Text>fetching data</Text>!
        </Text>
      )}
      {apiState.isSuccess() &&
        data.map(user => (
          <Text key={user.name} style={styles.codeHighlightText}>
            {user.name} works at{" "}
            <Text style={styles.boldText}>{user.company.name}</Text>
          </Text>
        ))}
      {apiState.isError() && (
        <Text>
          Argh, encountered an error!
          {Object.values(errors)}
        </Text>
      )}
      {<Button onPress={refetchData} title="Click to refetch" />}
    </View>
  );
};

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 25
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
    textAlign: "center"
  }
});

export default withData(App);
