import $api from '../http';
import {AxiosResponse} from 'axios';
import {AuthRepsponse} from '../models/response/AuthRepsponse';

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthRepsponse>> {
        return $api.post<AuthRepsponse>('/login', {email, password});
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthRepsponse>> {
        return $api.post<AuthRepsponse>('/registration', {email, password});
    }

    static async logout(): Promise<void> {
        return $api.post('/logout');
    }
}

