import Vuex from 'vuex'

const createStore = () =>{
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => {
          return post.id === editedPost.id
        })
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      // runs on server exactly once if we load the page for the first time
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get('/posts.json')
          .then(data => {
            const postArray = []
            for (const key in data) {
              postArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', postArray)
          })
          .catch(e => context.error(e))
      },
      addPost(vuexContext, postData) {
        const createdPost = {...postData, updatedDate: new Date()}
        return this.$axios.$post('/posts.json', createdPost)
          .then(data => {
            vuexContext.commit('addPost', { ...createdPost, id: data.name })
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios.$put('/posts/' + editedPost.id+ '.json', editedPost)
          .then(data => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
