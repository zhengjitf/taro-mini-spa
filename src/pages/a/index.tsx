import { FC, useState } from "react";
import { View, Button, ScrollView } from "@tarojs/components";
import styles from './index.module.scss'


const PageA: FC<{}> = () => {
  const [count, setCount] = useState(0)

  return (
    <View className={styles.wrapper}>
      <View className={styles.title}>
        PageA
      </View>
      <View className={styles.counter}>
        {count}
        <Button size="mini" className={styles.btn} onClick={() => setCount(n => n + 1)}>+</Button>
      </View>
      <View className={styles.title}>滚动容器：</View>
      <ScrollView
        scrollY
        className={styles.scrollContainer}
      >
        {
          Array.from({ length: 50 }, (_, index) => <View>{index}</View>)
        }
      </ScrollView>
    </View>
  )
}

export default PageA
