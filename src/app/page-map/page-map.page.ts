import { Component, OnInit } from '@angular/core';
// import {  } from "../../assets/img/parking_images";
@Component({
  selector: 'app-page-map',
  templateUrl: './page-map.page.html',
  styleUrls: ['./page-map.page.scss'],
})
export class PageMapPage implements OnInit {
  mergedImageDataURL: string;

  async mergeImages(imageSources: string[]) {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error('2D rendering context not obtained');
      }

      const images = imageSources.map(src => {
        const image = new Image();
        image.src = src;
        return image;
      });

      await Promise.all(images.map(image => new Promise((resolve, reject) => image.onload = resolve)));

      canvas.width = images[0].width;
      canvas.height = images[0].height;

      for (const image of images) {
        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
      }

      this.mergedImageDataURL = canvas.toDataURL();
    } catch (error) {
      console.error(error);
    }
  }

  constructor() {
    this.mergedImageDataURL = '';
   }

  async ngOnInit() {
    this.mergeImages([
      '../../assets/img/parking_images/img_1-removebg-preview.png',
      '../../assets/img/parking_images/img_2-removebg-preview.png'
    ]);
    }
  }

