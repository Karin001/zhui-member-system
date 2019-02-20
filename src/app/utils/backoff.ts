import { pipe, range, timer, zip, } from 'rxjs';
import { retryWhen, map, mergeMap, } from 'rxjs/operators';

export function backoff(maxTries, ms) {
  return pipe(
    retryWhen(attempts => zip(range(1, maxTries + 1), attempts)
      .pipe(
        map(([i,err]) => {
          if(i === maxTries+1) {
            console.log(i)
            throw err; 
          }
          return i * i
        }),
        mergeMap(i => {

          return timer(i * ms)
        })
      )
    )
  );
}