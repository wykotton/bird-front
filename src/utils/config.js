const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

export default  {
  name: 'bird-front',
  prefix: 'bird',
  footerText: 'bird admin  © 2017 liuxx',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: ['http://localhost:8080'],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,

    menus: `${APIV1}/menus`,
    getDic:`${APIV1}/getdic?key=`,
    upload:`/file/upload`,
    permissions:`${APIV1}/permissions`
  },
}
