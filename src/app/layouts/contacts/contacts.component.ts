import { Component, inject, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { CONTACTS_DEPS } from "./contacts.dependencies";
import { ContactsForm } from "./interfaces/contacts-form.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
  standalone: true,
  imports: [CONTACTS_DEPS, CommonModule]
})
export class ContactsComponent implements OnInit {
  public form!: FormGroup<ContactsForm>;
  private submitAttempt = false;

  contactInfo = {
    title: 'Get in touch',
    description: `Need a developer for your next big idea? I specialize in .NET, Angular, and SQL Server, 
    building fast, secure, and scalable applications tailored to business needs. Whether you’re looking for 
    a skilled developer to join your team or need expertise for a project, I’d love to connect. 
    Let’s discuss how we can work together—message me anytime!`,
    contacts: [
      { icon: 'fa-location-dot', text: 'Pune, Maharashtra', type: 'text' },
      { icon: 'fa-envelope', text: 'mkanawade84@gmail.com', type: 'email', link: 'mailto:mkanawade84@gmail.com' },
      { icon: 'fa-phone', text: '+91 7507456876', type: 'phone', link: 'tel:+917507456876' }
    ]
  };

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', { nonNullable: true, validators: Validators.required }),
      email: new FormControl('', { nonNullable: true, validators: this.customEmailValidator }),
      message: new FormControl('', { nonNullable: true, validators: Validators.required })
    })
  }

  private customEmailValidator(control: AbstractControl): { [key: string]: any } | null {
    const emailError = Validators.email(control);
    if (control.value && emailError) {
      return { 'email': {} };
    } else if (!control.value) {
      return { 'email': {} };
    }
    return null;
  }

  public isFieldValid(field: string): boolean {
    return (!this.form.get(field)!.valid && this.form.get(field)!.touched) ||
      (this.form.get(field)!.untouched && this.submitAttempt);
  }

  public onSubmit(): void {
    this.submitAttempt = true;

    if (this.form.valid) {

      this.submitGoogleForm()

      this.form.reset();
      this.submitAttempt = false;
    }
  }

  submitGoogleForm() {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://docs.google.com/forms/d/e/1FAIpQLSeDn2g578AM4xniQnmNQaMtORrr4ChmeM8r5pSQkUrVPl7RFg/formResponse';
    form.style.display = 'none';
    form.target = 'hiddenIframe';

    const nameInput = document.createElement('input');
    nameInput.type = 'hidden';
    nameInput.name = 'entry.656063737';
    nameInput.value = this.form.value.name || '';
    form.appendChild(nameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'entry.1001761708';
    emailInput.value = this.form.value.email || '';
    form.appendChild(emailInput);

    const messageInput = document.createElement('input');
    messageInput.type = 'hidden';
    messageInput.name = 'entry.1369688528';
    messageInput.value = this.form.value.message || '';
    form.appendChild(messageInput);

    document.body.appendChild(form);

    // Created a hidden iframe to prevent redirection
    let iframe = document.getElementById('hiddenIframe') as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hiddenIframe';
      iframe.id = 'hiddenIframe';
      document.body.appendChild(iframe);
    }

    form.submit();

    alert('Form submitted successfully!');
  }



}
