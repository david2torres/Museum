/* eslint-disable @typescript-eslint/no-explicit-any */

import { Observable } from 'rxjs';

export abstract class AbstractsGeneralUseCases {
  abstract getTimeOut(): Observable<number>;
}
