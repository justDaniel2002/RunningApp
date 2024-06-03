import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { CheckIcon, Select } from "native-base";
  import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
  } from "react-native-chart-kit";
  import { habitsData } from "@/constants/data";
  import { SafeAreaView } from "react-native";
  import { Link } from "expo-router";
  
  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(120, 0, 208, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  
  const smallConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(1, 234, 121,${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  
  export default function ProgressDetail({navigation}:any) {
  
    return (
      <ScrollView className="px-5 py-10 bg-white">
        <View className="flex items-center flex-row justify-between mb-10">
          <Text className="font-bold text-lg">Your Goals</Text>
          <Select
            shadow={2}
            minWidth="150"
            accessibilityLabel="All"
            placeholder="All"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
          >
            <Select.Item shadow={2} label="UX Research" value="ux" />
            <Select.Item shadow={2} label="Web Development" value="web" />
            <Select.Item
              shadow={2}
              label="Cross Platform Development"
              value="cross"
            />
            <Select.Item shadow={2} label="UI Designing" value="ui" />
            <Select.Item shadow={2} label="Backend Development" value="backend" />
          </Select>
        </View>
  
  
        
  
        <View className="mb-5">
          {habitsData.map((item: any) => (
            <TouchableOpacity onPress={() => navigation.navigate("Schedule")}
              key={item.name}
              className="flex flex-row justify-between items-center mb-5"
            >
              <ProgressChart
                data={{ data: [item.completedPercent / 100] }}
                width={57}
                height={57}
                strokeWidth={8}
                radius={16}
                chartConfig={smallConfig}
                hideLegend={true}
              />
              <View>
                <Text className="font-bold">{item.name}</Text>
                <Text>{item.detail}</Text>
              </View>
              <View
                className={`px-3 py-1 rounded-3xl ${
                  item.status == "Achieved" ? "bg-green-100" : ""
                }`}
              >
                <Text
                  className={
                    item.status == "Achieved"
                      ? "text-green-500"
                      : "text-neutral-500"
                  }
                >
                  {item.status}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
  
        
       
      </ScrollView>
    );
  }
  