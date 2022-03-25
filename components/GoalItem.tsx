import { StyleSheet, View, Text, Pressable } from 'react-native'

type Props = {
  text: string
  id: string
  onDeleteItem: (id: string) => void
}

const GoalItem = ({ text, id, onDeleteItem }: Props) => {
  return (
    <Pressable onPress={() => onDeleteItem(id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#530acc',
  },
  goalText: {
    color: 'white',
  },
})
