import { shortenText } from '../utils/functions'
import { wordCount, attachUserName } from '../../server/utils'
import { shortText, longText, posts, users } from './__data__/testData'


test('Will not shorten text under 100characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})


test('Will shorten text over 100 characters and add 3 periods onto the end', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('WordCount should count the words in a sentence correctly', () => {
    expect(wordCount(posts)).toBe(233)
})

test('Will accurately attach a username to a post', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('Will remove any posts without a matching user', () => {
    const newPosts = attachUserName(users, posts)
    const deletePost = posts[5]
    expect(newPosts).not.toContainEqual(deletePost)
})