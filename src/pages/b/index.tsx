import { FC, useState } from "react";
import { View, Button } from "@tarojs/components";
import styles from './index.module.scss'

const PageB: FC<{}> = () => {
  const [count, setCount] = useState(0)

  return (
    <View className={styles.wrapper}>
      <View className={styles.title}>
        PageB
      </View>
      <View className={styles.content}>
        {count}
        <Button size="mini" className={styles.btn} onClick={() => setCount(n => n + 1)}>+</Button>
      </View>
      <dog />
    </View>
  )
}

export default PageB
