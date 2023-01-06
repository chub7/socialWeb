import {addPostAc, deletePostAc, postsDataType, profileReducer} from "./profileReducer";
import {v1} from "uuid";

it('test profile reducer', () => {
    let state = {
        message: ``,
        postsData: [
            {id: v1(), message: "Hi, how is your Day?", likesCount: 0},
            {id: v1(), message: "It's my first post", likesCount: 23},
        ] as Array<postsDataType>,
        profile: null,
        status: ``,

    };
    let action = addPostAc('test')
    let newstate = profileReducer(state,action)

    expect(newstate.postsData.length).toBe(3)
    console.log(newstate)
})
it('post should be added', () => {
    let state = {
        message: ``,
        postsData: [
            {id: v1(), message: "Hi, how is your Day?", likesCount: 0},
            {id: v1(), message: "It's my first post", likesCount: 23},
        ] as Array<postsDataType>,
        profile: null,
        status: ``,

    };
    let action = addPostAc('test')
    let newstate = profileReducer(state,action)

    expect(newstate.postsData[2].message).toBe('test')

})
it('post should be deleted', () => {
    let state = {
        message: ``,
        postsData: [
            {id: v1(), message: "Hi, how is your Day?", likesCount: 0},
            {id: v1(), message: "It's my first post", likesCount: 23},
            {id: v1(), message: "test", likesCount: 23}
        ] as Array<postsDataType>,
        profile: null,
        status: ``,

    };

    let action = deletePostAc(state.postsData[2].id)
    let newstate = profileReducer(state,action)
    console.log(newstate)
    expect(newstate.postsData.length).toBe(2)

})