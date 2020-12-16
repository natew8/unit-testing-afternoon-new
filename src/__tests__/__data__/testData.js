export const users = [
    {
        id: 1,
        first: 'Test',
        last: 'User',
    },
    {
        id: 2,
        first: 'Hello',
        last: 'World',
    },
];

export const posts = [
    {
        id: 1,
        userId: 2,
        title: 'This is a long post',
        text:
            'This is a longer string that will be used to test whether or not the shortenText function correctly shortens the text correctly or not.',
    },
    {
        id: 2,
        userId: 2,
        title: 'This is a short post',
        text: 'hello world',
    },
    {
        id: 3,
        userId: 1,
        title: 'This is a long post',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 4,
        userId: 1,
        title: 'This is a long post',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 5,
        userId: 3,
        title: 'This is a long post',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];
export const shortText = 'This is a very short sentence';

export const longText =
    'This is a longer string that will be used to test whether or not the shortenText function correctly shortens the text correctly or not.';