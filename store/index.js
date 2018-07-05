import Vuex from 'vuex'

const createStore = () =>{
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      // runs on server exactly once if we load the page for the first time
      nuxtServerInit(vuexContext, context) {
        if(!process.client) {
          console.log(context.req)
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
                {
                  id: '1',
                  thumbnail: "https://thumbs.dreamstime.com/b/woman-wearing-yellow-floral-top-116695890.jpg",
                  title: "Old People Work Hard",
                  previewText: "At least I believe they do"
                },
                {
                  id: '2',
                  thumbnail: "https://thumbs.dreamstime.com/b/green-white-red-abstract-painting-116695780.jpg",
                  title: "Crawling Over Sand",
                  previewText: "ricks to crawl correctly!"
                },
                {
                  id: '3',
                  thumbnail: "https://thumbs.dreamstime.com/b/woman-wearing-yellow-floral-top-116695890.jpg",
                  title: "Apples Are Real",
                  previewText: "Apples are born from apples"
                }
              ]
            )
            resolve()
          }, 1500)
        })
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
