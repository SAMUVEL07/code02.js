import React from 'react';
import {Text, View} from 'react-native';

type CatProps = {
  name: string;
  location: string; // Add location here
};

const Cat = (props: CatProps) => {
  return (
    <View>
      <Text>Hello, I am {props.name}, I'm from {props.location}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="atarah" location="london" />
      <Cat name="lune" location="new york" />
      <Cat name="nevaeh" location="paris" />
    </View>
  );
};

export default Cafe;
