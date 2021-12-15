import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { FC, ComponentType, ReactElement, useRef, useCallback, useEffect } from 'react'
import { MemoryRouter, Routes, Route, useLocation } from 'react-router'
import Tabbar from '../../components/tabbar'
import { routes } from '../../routes'
import styles from './index.module.scss'

const App: FC = () => {
  const location = useLocation()
  const cacheRef = useRef({} as Record<string, ReactElement>)

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: routes.find(route => route.pathname === location.pathname)!.name
    })
  }, [location.pathname])

  const CachedElement: FC<{
    activePath: string;
    cacheKey: string;
    component: ComponentType
  }> = useCallback(({ activePath, cacheKey, component: Component }) => {
    if (!cacheRef.current[cacheKey]) {
      cacheRef.current[cacheKey] = <Component />
    }

    return (
      <>
        {
          Object.keys(cacheRef.current).sort().map((key) => (
            <View
              key={key}
              data-cache-key={key}
              hidden={key !== activePath}
              className={key !== activePath && styles.hidden}
            >
              {cacheRef.current[key]}
            </View>
          ))
        }
      </>
    )
  }, [])

  const routeElements = routes.map(route => (
    <Route
      key={route.pathname}
      path={route.pathname}
      element={
        <CachedElement
          activePath={location.pathname}
          cacheKey={route.pathname}
          component={route.component}
        />
      }
    />
  ))

  return (
    <Routes>
      {routeElements}
    </Routes>
  )
}

const Index: FC = () => {
  const { params } = Taro.useRouter()

  return (
    <>
      <MemoryRouter
        initialEntries={[params.pathname ? decodeURIComponent(params.pathname) : '/a']}
        initialIndex={0}
        >
        <App/>
        <Tabbar />
      </MemoryRouter>
    </>
  )
}

export default Index
