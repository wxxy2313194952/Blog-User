module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // plugins: [
  //   [
  //     "component",
  //     {
  //       "libraryName": "element-ui",
  //       "styleLibraryName": "theme-chalk"
  //     }
  //   ]
  // ]

  // plugins: [
  //   ["import", {
  //     libraryName: "muse-ui",
  //     libraryDirectory: "lib",
  //     camel2DashComponentName: false
  //   }]
  // ]
  "plugins": [
    // ["import", {
    //   "libraryName": "muse-ui",
    //   "libraryDirectory": "lib",
    //   "camel2DashComponentName": false
    // }],
    [
      'prismjs',
      {
        languages: ['javascript','json','java','bash','c','sql','css','html','python','nginx','ts','t4'],
      },
    ],
  ]

}