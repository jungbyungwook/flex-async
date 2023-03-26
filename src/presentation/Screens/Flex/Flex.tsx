import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

interface Props {}

interface ItemProps {
  song: string;
  singer: string;
}

const DATA = [
  {
    song: 'Blinding Lights',
    singer: 'The Weeknd',
  },
  {
    song: 'Shape of You',
    singer: 'Ed Sheeran',
  },
  {
    song: 'Dance Monkey',
    singer: 'Tones And I',
  },
  {
    song: 'Someone You Loved',
    singer: 'Lewis Capaldi',
  },
  {
    song: 'rockstar',
    singer: 'Post Malone (feat. 21 Savage)',
  },
  {
    song: 'Sunflower',
    singer: 'Post Malone & Swae Lee',
  },
  {
    song: 'One Dance',
    singer: 'Drake (feat. Wizkid, Kyla)',
  },
  {
    song: 'Closer',
    singer: 'The Chainsmokers (feat. Halsey)',
  },
  {
    song: 'Señorita',
    singer: 'Shawn Mendes & Camila Cabello',
  },
  {
    song: 'STAY',
    singer: 'The Kid LAROI & Justin Bieber',
  },
  {
    song: 'Perfect',
    singer: 'Ed Sheeran',
  },
];

const styles = StyleSheet.create({
  master: {
    flexDirection: 'row',
  },
  box1Container: {
    width: 80,
    height: 80,
    padding: 10,
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
  },
  box2: {
    flex: 1,
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  box3Container: {
    width: 80,
    height: 80,
    padding: 10,
  },
  box3: {
    flex: 1,
    backgroundColor: 'gray',
  },
  textContainer: {},
});

const Item = ({singer, song}: ItemProps) => {
  return (
    <View style={styles.master}>
      <View style={styles.box1Container}>
        <TouchableOpacity style={styles.box1} />
      </View>
      <View style={styles.box2}>
        <View style={styles.textContainer}>
          <Text>{song}</Text>
          <Text>{singer}</Text>
        </View>
      </View>
      <View style={styles.box3Container}>
        <TouchableOpacity style={styles.box3} />
      </View>
    </View>
  );
};

const Flex: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item singer={item.singer} song={item.song} />}
        keyExtractor={(item, index) => `key-${index}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Flex;
