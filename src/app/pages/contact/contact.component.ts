import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Contactez LEOSS pour une étude gratuite de votre projet solaire en Haute-Garonne, Tarn ou Tarn-et-Garonne.'
    });
  }

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSending = false;
  sendSuccess = false;
  sendError = false;

  private readonly SERVICE_ID = 'service_cszosaj';
  private readonly TEMPLATE_ID = 'template_nalu4kp';
  private readonly PUBLIC_KEY = 'EKuUDEpMSx-DY-60s';

  onSubmit(form: any): void {
    if (form.invalid) return;

    this.isSending = true;
    this.sendSuccess = false;
    this.sendError = false;

    emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      {
        from_name: this.formData.name,
        from_email: this.formData.email,
        phone: this.formData.phone,
        message: this.formData.message
      },
      this.PUBLIC_KEY
    )
    .then(() => {
      this.sendSuccess = true;
      this.formData = { name: '', email: '', phone: '', message: '' };
      form.resetForm();
    })
    .catch((error) => {
      console.error('Erreur EmailJS:', error);
      this.sendError = true;
    })
    .finally(() => {
      this.isSending = false;
    });
  }
}