import RestService from '../RestService';
import ISignInReq from './types';
import Time from './../../Time';

class SessionService {
  public static async signIn({ login, password }: ISignInReq) {
    // const response = await RestService.makeRequest({
    //   url: '/profile/login',
    //   method: 'get',
    //   data: { login, password }
    // });
    await Time.sleep(6000);
    console.log('api');
    const response = {
      name: 'Jora',
      token: '1231241251251525'
    };

    return { response };
  }

  public static async getProfile(reqData: ISignInReq) {
    const response = await RestService.makeRequest({
      url: '/profile',
      method: 'get',
      data: reqData
    });

    return response;
  }
}

export default SessionService;
