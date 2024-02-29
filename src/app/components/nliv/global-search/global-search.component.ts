import { Component } from '@angular/core';
import { SearchResults } from '../../../interfaces/search-results';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrl: './global-search.component.scss'
})
export class GlobalSearchComponent {

  searchResults: SearchResults[] = [
    {
      title: 'Title 1',
      icon: 'https://picsum.photos/200',
      url: 'url1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
      type: 'Type 1',
      date: 'Date 1',
      tags: ['tag1', 'tag2'],
      image: 'https://picsum.photos/200'
    },
    {
      title: 'Title 2',
      icon: 'https://picsum.photos/200',
      url: 'url2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
      type: 'Type 2',
      date: 'Date 2',
      tags: ['tag3', 'tag4'],
      image: 'https://picsum.photos/200'
    },
    {
      title: 'Title 3',
      icon: 'https://picsum.photos/200',
      url: 'url3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim urna non dui. Nullam sit amet lectus augue. Donec et ligula.',
      type: 'Type 3',
      date: 'Date 3',
      tags: ['tag5', 'tag6'],
      image: 'https://picsum.photos/200'
    }
  ];

  constructor() { }

  getTagClasses(tags: string[]) {
    return {
      'tag1': tags.includes('tag1'),
      'tag2': tags.includes('tag2'),
      'tag3': tags.includes('tag3'),
      'tag4': tags.includes('tag4'),
      'tag5': tags.includes('tag5'),
      'tag6': tags.includes('tag6')
    };
  }

}
