

import { DefaultApi } from '@/app/lib/routines_api/client';
import getRoutinesAPI from '@/app/lib/routines_api/get_routines_api';
import { expect, test, jest } from '@jest/globals';
import { User } from 'firebase/auth';


const mockUser: Partial<User> = {
    getIdToken: jest.fn(() => Promise.resolve("mocked_token"))
};

test('get_routines_api | User Mocked | API is subclass of DefaultAPI', () => {

    const user = mockUser as User;
    const api = getRoutinesAPI(user)
    expect(api).toBeInstanceOf(DefaultApi);

});


test('c', () => {

    const user = mockUser as User;
    const api = getRoutinesAPI(user)
    api.listWorkflows().then((response) => { console.log(response) });

});