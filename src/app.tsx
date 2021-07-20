import Taro from '@tarojs/taro'
import { Component } from 'react'
import { Provider } from 'react-redux'

import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {
  inst = Taro.getCurrentInstance()

  componentDidMount () {
    console.log("componentDidMount=", this.inst)
    console.log("this.inst.router?.path=" , this.inst.router?.path)
  }

  componentDidShow () {
    console.log("componentDidShow", this.inst)
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
