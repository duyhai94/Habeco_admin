import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/shared/services/swal.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { LoginService } from '../../services/login.service';
@Component({
    selector: 'app-login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginFormComponent {
    model: any = {};
    @HostListener('window:keydown.enter', ['$event'])
    @HostListener('window:keydown.enter', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        this.login();
    }

    constructor(
        private loginService: LoginService,
        private router: Router,
        private loaderService: LoaderService,
        private swal: SwalService
    ) { }

    login = () => {
        localStorage.clear();
        this.loaderService.show();
        this.loginService.login(this.model).subscribe(
            (res) => {
                localStorage.setItem('access_token', JSON.stringify(res));
                localStorage.setItem('token', res.access_token);
                this.router.navigateByUrl('/pages/home');
            },
            (err) => {
                this.swal.error('Đăng nhập thất bại!')
            },
            () => {
                this.loaderService.hide();
            }
        );
    };
}
