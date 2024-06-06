import { HttpInterceptorFn } from '@angular/common/http';
import { extractUserAccount } from '../utils';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const user = extractUserAccount();
  if (user) {
    return next(req.clone({
      setHeaders: {
        Authorization: `Bearer ${user.token}`,
      },
    }));
  }

  return next(req);
};
