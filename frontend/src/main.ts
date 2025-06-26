import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),   // ✅ fornece HttpClient moderno
    provideRouter(routes)  // ✅ fornece as rotas no estilo standalone
  ]
});
