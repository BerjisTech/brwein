import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchSuggestions } from '../../../interfaces/search-suggestions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) { }

  // hasSuggestions
  hasSuggestions: boolean = false;
  suggestedStrings: string[] = [];
  suggestion :string = '';

  onSearch(term: HTMLInputElement) {
    console.log(term.value);
  }

  searchSuggestionHandler(data: SearchSuggestions[]) {
    this.hasSuggestions = data.length > 0;
    this.suggestedStrings = data.map(suggestion => suggestion.title);
  }

  // Handle #searchInput change to update suggestedStrings. Add random strings and make he #searchInput value as the first item in array
  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.suggestedStrings = [target.value, 'random1', 'random2', 'random3'];
    this.suggestion = target.value;
  }

  // onSuggestionClick(suggestion) redirects to /s/suggestion
  onSuggestionClick(suggestion: string) {
    this.router.navigate(['/s', suggestion]);
  }
}
