import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleIncrease = (team) => {
    if (team === 'A') {
      if (scoreA + 1 === 10) {
        Alert.alert('Pemenang', 'Tim A menang!');
      }
      setScoreA(scoreA + 1);
    } else {
      if (scoreB + 1 === 10) {
        Alert.alert('Pemenang', 'Tim B menang!');
      }
      setScoreB(scoreB + 1);
    }
  };

  const handleDecrease = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Pengaturan Skor Futsal ⚽</Text>

      <View style={styles.teamContainer}>
        {/* Team A */}
        <View style={styles.team}>
          <Text style={styles.teamName}>Tim A</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleIncrease('A')}>
            <Text style={styles.buttonText}>+ Tambah</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.decreaseButton]} onPress={() => handleDecrease('A')}>
            <Text style={styles.buttonText}>- Kurangi</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Team B */}
        <View style={styles.team}>
          <Text style={styles.teamName}>Tim B</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleIncrease('B')}>
            <Text style={styles.buttonText}>+ Tambah</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.decreaseButton]} onPress={() => handleDecrease('B')}>
            <Text style={styles.buttonText}>- Kurangi</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Reset Button */}
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>🔄 Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginBottom: 30,
    textAlign: 'center',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  team: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    elevation: 5, // For shadow effect
    width: '40%',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1e90ff',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  decreaseButton: {
    backgroundColor: '#ff6347',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    width: 2,
    height: '100%',
    backgroundColor: '#ddd',
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: '#32cd32',
    padding: 15,
    borderRadius: 10,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
