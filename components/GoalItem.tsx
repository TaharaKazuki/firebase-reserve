import {
  StyleSheet,
  View,
  Text,
  Pressable,
  PressableStateCallbackType,
} from 'react-native'

type Props = {
  text: string
  id: string
  onDeleteItem: (id: string) => void
}

const GoalItem = ({ text, id, onDeleteItem }: Props) => {
  return (
    <Pressable
      android_ripple={{ color: '#210644' }}
      onPress={() => onDeleteItem(id)}
      style={({ pressed }: PressableStateCallbackType) =>
        pressed && styles.pressedItem
      }
    >
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
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
  },
})
