import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaView className="bg-neutral-100 pt-20 px-10 min-h-screen">
      <Slot />
    </SafeAreaView>
  );
}
