import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface PasswordOptions {
  length: number;
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeNum: boolean;
  includeSym: boolean;
}

@Component({
  selector: 'app-day-thirty-one',
  templateUrl: './day-thirty-one.component.html',
  styleUrls: ['./day-thirty-one.component.scss'],
})
export class DayThirtyOneComponent implements OnInit {
  passwordOptions: PasswordOptions = {
    length: 20,
    includeUpperCase: true,
    includeLowerCase: true,
    includeNum: true,
    includeSym: true,
  };

  genePass = '';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 31');
  }

  generatePassword() {
    let generatedPassword = '';

    // If no options are checked, return empty generated password
    const typesArr = [
      this.passwordOptions.includeLowerCase ? this.getRandomLower : null,
      this.passwordOptions.includeUpperCase ? this.getRandomUpper : null,
      this.passwordOptions.includeNum ? this.getRandomNum : null,
      this.passwordOptions.includeSym ? this.getRandomSym : null,
    ];

    const filteredNullOpts = typesArr.filter((val) => val !== null);
    const numOfTypes = filteredNullOpts.length;
    if (numOfTypes < 1) {
      this.genePass = generatedPassword;
      return generatedPassword;
    }

    for (let i = 0; i <= this.passwordOptions.length; i++) {
      generatedPassword +=
        filteredNullOpts[
          Math.floor(Math.random() * filteredNullOpts.length)
        ]!();
    }

    this.genePass = generatedPassword;

    return generatedPassword;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.genePass).then(
      () => {
        console.log('Successfully copied to clipboard');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  private getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  private getRandomSym() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';

    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  private getRandomNum() {
    return Math.floor(Math.random() * 10).toString();
  }
}
