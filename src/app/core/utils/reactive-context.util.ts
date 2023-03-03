import {Observable, Subject, Subscription} from "rxjs";
import {ChangeDetectorRef, inject, ViewRef} from "@angular/core";
import {takeUntil} from "rxjs/operators";

export function useReactiveContext<T>(_stream: Observable<T>) {
  const changeDetectorRef = inject(ChangeDetectorRef),
    _unsubscribe = new Subject<void>();

  (changeDetectorRef as ViewRef).onDestroy(() => {
    _unsubscribe.next();
    _unsubscribe.complete();
  })

  return {
    subscribe(
      next: (value: T) => void,
      error?: (e:any) => void,
      complete?: () => void
    ): Subscription {
      return _stream.pipe(takeUntil(_unsubscribe))
        .subscribe(next, error, complete);
    }
  }
}
