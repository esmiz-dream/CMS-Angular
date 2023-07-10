import { Component } from '@angular/core';
import {
  faLinkedin,
  faYoutube,
  faFacebook,
  faGoogle,
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGithub = faGithub;
}
