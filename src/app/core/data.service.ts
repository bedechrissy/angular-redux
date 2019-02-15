import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/** The base Data Service. */
export abstract class DataService<T> {

    constructor(protected http: HttpClient, protected baseUrl: string, protected actionUrl: string) {}
    
    /**
     * @example
     * getAll()
     *
     * @returns A list of data of type<T>
     */
    getAll(): Observable<T[]> {
        return this.http
            .get(this.baseUrl + this.actionUrl)
            .pipe(map(resp => resp as T[]));
    }

    /**
     * @example
     * getOne()
     *
     * @returns A data item of type<T>
     */
    getOne(id: string): Observable<T> {
        return this.http
            .get(this.baseUrl + this.actionUrl + `${this.actionUrl}${id}`)
            .pipe(map(resp => resp as T));
      }

    /**
     * @example
     * postOne()
     *
     * @returns A response from the post.
     */
    postOne(item: T) {
        return this.http.post(this.baseUrl + this.actionUrl, item,)
            .pipe(map((resp => resp)));

    }
}