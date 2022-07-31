import { View } from "react-native";
import { NativeRouter } from "react-router-native";
import { ThemeProvider } from "styled-components";
import { global } from "./src/globalStyles";
import Routes from "./src/Routes";
import { ResultProvider } from "./src/providers/ResultProvider";

export default function App() {
  return (
    <ResultProvider>
      <NativeRouter>
        <ThemeProvider theme={global}>
          <Routes />
        </ThemeProvider>
      </NativeRouter>
    </ResultProvider>
  );
}
