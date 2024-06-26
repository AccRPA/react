import {cleanup, fireEvent, render} from '@testing-library/react';
import Login from './Login';

afterEach(cleanup);

describe(Login, () => {
    it("login render correct", () => {
        const {getAllByLabelText} = render(<Login></Login>);

        const name = getAllByLabelText("player_name");
        const avatars = getAllByLabelText("player_avatar");
        const submit = getAllByLabelText("submit");

        expect(name).toBeTruthy();
        expect(avatars).toBeTruthy();
        expect(submit).toBeTruthy();

    });
});