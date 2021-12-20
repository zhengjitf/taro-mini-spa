export default {
  pages: [
    'pages/index/index',
    'pages/second/index'
  ],
  "subpackages": [
    {
      "root": "sub-pkg",
      "pages": [
        "pages/cat/index",
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
