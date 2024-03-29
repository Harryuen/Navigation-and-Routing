import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DocumentationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        1. System requirements: Document specifications of the system being used for React Native development. This includes the CPU, RAM size, and Windows version.
      </Text>
      <Text>
        2. Installation instructions: Include step-by-step instructions for installing the necessary tools and dependencies required for the framework, such as Node.js, and the React Native CLI.
      </Text>
      <Text>
        3. Configuration steps: Detail any necessary configuration steps required to set up the framework, such as setting environment variables or configuring project settings.
      </Text>
      <Text>
        4. Project creation: Outline the steps involved in creating a new project using the framework, including any necessary setup or configuration.
      </Text>
      <Text>
        5. Running the project: Detail how to run the project in an Android Device Simulator.
      </Text>
      <Text>
        6. Troubleshooting: Include information on how to troubleshoot common issues that may arise during setup or development, such as debugging and error messages. This may need to be updated in the future.
      </Text>
      <Text>
        7. Resources: Provide links to additional resources and documentation that can be used for reference and further learning, such as official documentation, tutorials, and Stack Overflow answers.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default DocumentationScreen;
