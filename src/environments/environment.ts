// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url:{
    identity:'identity'
  },
  permission:{
    admin:[
      {
        name:'项目管理',
        children:[
          {
            name:'查看所有项目',
            url:'/project/all',
            icon:'folder'
          },
          {
            name:'新增一个项目',
            url:'/project/new',
            icon:'add'
          }
        ]
      },
      {
        name:'人员管理',
        children:[
          {
            name:'查看所有人员',
            icon:'face',
            url:'/people/all'
          }
        ]  
      }
    ],
    member:[
      {
        name:'项目管理',
        children:[
          {
            name:'查看所有项目',
            url:'/project/all',
            icon:'folder'
          },
          {
            name:'新增一个项目',
            url:'/project/new',
            icon:'add'
          }
        ]
      },
      {
        name:'人员管理',
        children:[
          {
            name:'查看所有人员',
            icon:'face',
            url:'/people/all'
          }
        ]  
      }
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
