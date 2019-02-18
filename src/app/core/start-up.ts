import {environment} from '../../environments/environment'
import {Injector, APP_INITIALIZER} from '@angular/core'
import { IdentityService } from './identity.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export const startUpProvider =
  { provide: APP_INITIALIZER,
    useFactory: StartUpFactory,
    multi: true,
    deps: [IdentityService,HttpClient]
  };
export function StartUpFactory(identityService:IdentityService,http:HttpClient,router:Router) {
  const data = {}
  return function(){
    return new Promise(resolve => {
      http.post(environment.url.identity,{}).subscribe(res=>{
        if(res['success']){
          
        } 
        resolve()
      },err=>{
        const identityInfo = {
          status:'admin',
          id:null
        }
        identityService.identityUpdate(identityInfo)
        //router.navigateByUrl('/passport')
        resolve()
      })
    })
   
  } 
  
}
