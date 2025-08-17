import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Update the import path and extension if the file exists with a different name or extension, e.g.:
// Update the import path and extension if the file exists with a different name or extension, e.g.:
import { Navbar } from "./pages/navbar/navbar";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
}) //to create a tag name, which is mentionedq in the index.html page
export class App {
  protected readonly title = signal('Hello!!!');
}