import { Component } from '@angular/core';
import { freeApiService } from './services/freeapiservice';
import { Posts } from './classes/post';
import { Albums } from './classes/album';
import { Photos } from './classes/photos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lstAlbums: Albums[];
  AlbumSelected: Number;
  lstPhotos: Photos[];


  lstComments: Comment[];
  lstPosts: Posts[];
  objPosts: Posts;
  objPuts: Posts;
  objPatchs: Posts;
  message: string;

  constructor(private freeapiservice: freeApiService) { }

  ngOnInit() {
    this.freeapiservice.getComments().subscribe(data => {
      this.lstComments = data
    });
    //params returns data
    this.freeapiservice.getPostsByParams().subscribe(data => { this.lstPosts = data });
    //post data method:selctes particular id
    var opost = new Posts();
    opost.body = "titlebody";
    opost.title = "titletitle";
    opost.userId = 5;
    this.freeapiservice.post(opost).subscribe(data => { this.objPosts = data });

    //put method: updates the resources and returns new copy
    var opost = new Posts();
    opost.title = 'title is updated';
    opost.body = 'updating body';
    opost.userId = 5;
    this.freeapiservice.put(opost).subscribe(data => { this.objPuts = data });


    //patch method:-existing copy
    var opost = new Posts();
    opost.title = "patched the title";
    this.freeapiservice.patch(opost).subscribe(data => { this.objPatchs = data });

    //delete():
    this.freeapiservice.delete().subscribe(data => {
      this.message = "Resources deleted successfully!";
    });


    //data filtering:
    this.freeapiservice.getAlbums().subscribe(data => { this.lstAlbums = data });
  }
  onAlbumSelected(selectedAlbumId: any): void {
    this.freeapiservice.getPhotosForSelectedAlbumByParameter(selectedAlbumId).subscribe(data => { this.lstPhotos = data });
  }
}
