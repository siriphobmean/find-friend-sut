import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static forbiddenWords(forbiddenWords: string[]): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const hasForbiddenWord = forbiddenWords.some(word => control.value.includes(word));
      return hasForbiddenWord ? { forbiddenWords: true } : null;
    };
  }

  static maxLength(max: number): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value.length > max ? { maxLength: true } : null;
    };
  }

  static notPastDate(control: AbstractControl): ValidationErrors | null {
    const inputDate = new Date(control.value);
    const today = new Date();
    return inputDate < today ? { pastDate: true } : null;
  }

  static imageFile(control: AbstractControl): ValidationErrors | null {
    const file = control.value;
    if (!file) return null; // If no file is selected, no error

    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const fileExtension = file.split('.').pop()?.toLowerCase();

    return allowedExtensions.includes(fileExtension) ? null : { invalidFileType: true };
  }
}