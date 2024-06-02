import { Slot } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "@rneui/themed";
export default function RootLayout() {
  return (
    <>
      <NativeBaseProvider>
        <ThemeProvider>
          <Slot />
        </ThemeProvider>
      </NativeBaseProvider>
    </>
  );
}
