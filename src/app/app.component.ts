import { Component } from '@angular/core';

@Component({
  selector: 'plrs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    complexToolbar = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']
    ];

    simpleToolbar: any[] = ['bold', 'italic', 'underline', 'strike'];

    toolbarOpts: any[] = this.simpleToolbar;

    changeToolbar() {
        let button = this.simpleToolbar.shift();
        this.simpleToolbar.push(button);

        this.toolbarOpts = this.complexToolbar;
        console.dir(this.toolbarOpts);
    }

    wysiwygText = "<b>Hello</b> world";
}
