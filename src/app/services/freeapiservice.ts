import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../classes/post';

@Injectable()

export class freeApiService {

    constructor(private http: HttpClient) { }

    getComments(): Observable<any> {
        return this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    }

    getPostsByParams(): Observable<any> {
        let params1 = new HttpParams().set("userId", "1");
        return this.http.get("https://jsonplaceholder.typicode.com/posts?userId=1", { params: params1 });
    }
    post(opost: Posts): Observable<any> {
        return this.http.post("https://jsonplaceholder.typicode.com/posts?userId=1", opost);
    }

    put(opost): Observable<any> {
        return this.http.put("https://jsonplaceholder.typicode.com/posts/1", opost);
    }

    patch(opost): Observable<any> {
        return this.http.patch("https://jsonplaceholder.typicode.com/posts/1", opost);
    }
    delete(): Observable<any> {
        return this.http.delete("https://jsonplaceholder.typicode.com/posts/1");
    }


    getAlbums(): Observable<any> {
        return this.http.get("http://jsonplaceholder.typicode.com/albums");
    }

    getPhotosForSelectedAlbumByParameter(selectedAlbumId: string): Observable<any> {
        let params1 = new HttpParams().set("albumId", selectedAlbumId);
        return this.http.get("http://jsonplaceholder.typicode.com/photos", { params: params1 });
    }
}