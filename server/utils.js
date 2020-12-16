module.exports = {
  wordCount(posts) {
    return posts.reduce(
      (accum, post) => (accum += post.text.split(' ').length),
      0,
    );
  },
  attachUserName(users, posts) {
    let userDict = users.reduce((accum, user) => {
      accum[user.id] = user;
      return accum;
    }, {});
    return posts.filter(post => userDict[post.userId]).map(post => {
      post.displayName = `${userDict[post.userId].first}${userDict[post.userId].last}`
      return post
    });
  },
};
