import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "fr";

export default function Schedule() {
  return (
    <SafeAreaView>
      <ScrollView className="pt-10 px-3 bg-white min-h-screen">
        <View className="pl-5 mb-5">
          <Text className="text-sm text-neutral-500">June 4 2022</Text>
        </View>
        <Text className="text-xl font-bold mb-5">
          Goal: Journaling everyday
        </Text>
        <Calendar
          className="border border-neutral-200 rounded-xl mb-5"
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            "2012-05-16": {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
            "2012-05-17": { marked: true },
            "2012-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
            "2012-05-19": { disabled: true, disableTouchEvent: true },
          }}
        />

        <View className="px-5 py-3 pb-10 border border-neutral-200 rounded-xl">
            <View className="flex flex-row justify-between mb-10 items-center">
                <Text className="font-bold text-lg">Jornaling everyday</Text>
                <Text className="text-green-500 px-3 py-2 bg-green-100 rounded-3xl">Achieved</Text>
            </View>

            <View className="flex flex-row justify-between mb-5 items-center">
                <Text className="font-bold">Habit Name:</Text>
                <Text className="font-bold">Journaling</Text>
            </View>

            <View className="flex flex-row justify-between mb-5 items-center">
                <Text className="font-bold text-neutral-500">Target:</Text>
                <Text className="font-bold text-neutral-500">7 From 7 days</Text>
            </View>

            <View className="flex flex-row justify-between mb-5 items-center">
                <Text className="font-bold text-neutral-500">Days completed:</Text>
                <Text className="font-bold text-neutral-500">7 From 7 days</Text>
            </View>

            <View className="flex flex-row justify-between mb-5 items-center">
                <Text className="font-bold text-neutral-500">Days failed:</Text>
                <Text className="font-bold text-neutral-500">0 day</Text>
            </View>

            <View className="flex flex-row justify-between mb-5 items-center">
                <Text className="font-bold text-neutral-500">Habit type:</Text>
                <Text className="font-bold text-neutral-500">Everyday</Text>
            </View>

            <View className="flex flex-row justify-between mb-5 items-center">
                <Text className="font-bold text-neutral-500">Created on:</Text>
                <Text className="font-bold text-neutral-500">June 4 2022</Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
