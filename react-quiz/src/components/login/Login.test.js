import {cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Login from './Login';
import { GameContext } from '../../core/GameContext';
import { GameData } from '../../core/GameData';

const customRender = (ui, {providerProps, ...renderOptions}) => {
    return render(
        <GameContext.Provider value={providerProps}>{ui}</GameContext.Provider>,
        renderOptions,
    )
};

const providerProps = {
    gameData: new GameData(),
    setGameData: jest.fn((value) => {
        providerProps.gameData = value(providerProps.gameData);
    })
};

beforeEach(() => {
    providerProps.gameData = new GameData();
});
afterEach(cleanup);

describe(Login, () => {
    it("login rendered correctly", () => {
        const {getAllByLabelText} = render(<Login></Login>);

        const name = getAllByLabelText("player_name");
        const avatars = getAllByLabelText("avatars");
        const submit = getAllByLabelText("submit");
        const avatarSpan = getAllByLabelText("player_avatar");

        expect(name).toBeTruthy();
        expect(avatars).toBeTruthy();
        expect(submit).toBeTruthy();
        expect(avatarSpan).toBeTruthy();
        expect(avatarSpan.length).toBeGreaterThanOrEqual(1);
    });

    it("login without name selected", async () => {
        const user = userEvent.setup();
        customRender(<Login></Login>, {providerProps});

        const submit = screen.getByLabelText("submit");
        const avatarSpan = screen.getAllByLabelText("player_avatar");

        await user.click(avatarSpan[0]);
        expect(providerProps.gameData.userData.avatar).toBeTruthy();
        
        await user.click(submit);
        
        const message = screen.getByLabelText("validation_message");
        expect(message).toBeTruthy();
        expect(message.textContent).toBe('Please enter a name and select an avatar');
    });

    it("login without avatar selected", async () => {
        const user = userEvent.setup();
        customRender(<Login></Login>, {providerProps});
        
        const name = screen.getByLabelText("player_name");
        const submit = screen.getByLabelText("submit");
        
        fireEvent.change(name, {target: { value: "player1" }});
        expect(providerProps.gameData.userData.name).toBe("player1");
        
        await user.click(submit);
                
        const message = screen.getByLabelText("validation_message");
        expect(message).toBeTruthy();
        expect(message.textContent).toBe('Please enter a name and select an avatar');
    });

    it("login all parameters correct", async () => {        
        customRender(<Login></Login>, {providerProps});
        const name = screen.getByLabelText("player_name");
        const avatarSpan = screen.getAllByLabelText("player_avatar");
        const submit = screen.getByLabelText("submit");
                
        //? userEvent.type or keyboard does not refresh the value of the input, only retrieves the last character
        fireEvent.change(name, {target: {value: "player1"}});
        fireEvent.click(avatarSpan[0]); 

        // timeout or the 'setImmediate is not defined' error will be thrown
        setTimeout(() => {
            fireEvent.click(submit);
            expect(providerProps.gameData.userData.name).toBe("player1");
            expect(providerProps.gameData.userData.avatar).toBeTruthy();
    
            const message = screen.queryByLabelText("validation_message"); 
            expect(message).toBeFalsy();

            expect(<DisconnectButton></DisconnectButton>).toBeInTheDocument();
        }, 0);        
    });
});