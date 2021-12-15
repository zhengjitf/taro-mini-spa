import { FC, useEffect } from 'react'
import { View } from '@tarojs/components'
import { useLocation, useNavigate } from 'react-router'
import cn from 'classnames'
import styles from './index.module.scss'
import { Route, routes } from '../../routes'
console.log('styles', styles)

const tabs = routes.filter(route => route.tabbar)

const Tabbar: FC<{}> = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleTabClick = (tab: Route) => {
    navigate(tab.pathname)
  }

  useEffect(() => {
    console.log('Tabbar: mount')
  }, [])

  return (
    <View className={styles.tabbar}>
      {
        tabs.map(tab => {
          return (
            <View
              key={tab.pathname}
              className={cn(styles.tabItem, location.pathname === tab.pathname && styles.active)}
              onClick={handleTabClick.bind(null, tab)}
            >
              {tab.name}
            </View>
          )
        })
      }
    </View>
  )
}

export default Tabbar
