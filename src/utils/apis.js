import axios from 'axios';
import { USERS_API_URL } from './constants';

// const getStory = async (id) => {
//   try {
//     const story = await axios.get(`${USERS_API_URL}/item/${id}.json`);
//     return story;
//   } catch (error) {
//     console.log('Error while getting a story.');
//   }
// };

export const getUsers = async (type) => {
  try {
    const { data: userList } = await axios.get(
      `${USERS_API_URL}`
    );
    // const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return userList;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};