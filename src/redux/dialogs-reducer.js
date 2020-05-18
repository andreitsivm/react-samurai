
const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState = {
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Misha"},
        {id: 3, name: "Ruby"},
        {id: 4, name: "Diana"},
        {id: 5, name: "Sasha"}],
    messages: [
        {id: 1, message: "Have a nice day"},
        {id: 2, message: "Hi, what sup"},
        {id: 3, message: "hello friend"},
        {id: 4, message: "Love u"},
        {id: 5, message: "what new?"}]
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
           return {
                ...state,
                messages: [...state.messages, {id: state.messages.length, message: body}]
            };

        default:
            return state;
    }
};
export const sendMessageActionCreator = (newMessageBody) => {
    return {
        type: 'SEND_MESSAGE',
        newMessageBody
    }
};


export default dialogsReducer;