import { createContext, useReducer, useEffect, useState } from 'react';
import { getAllMedia } from '../utils/fetch-utils';

export const ChatContext = createContext(null);

const mediaReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload.video, ...state];
    case 'DELETE':
      return state.filter((item) => item.id != action.payload.id);
    case 'RESET':
      return action.payload.videos;
    case 'EDIT':
      return state.map((currVideo) => {
        if (currVideo.id === action.payload.video.id) {
          const { video } = action.payload.video;
          return { ...currVideo, video };
        }
        return currVideo;
      });
    case 'ADDCOMMENT':
      // const addNewReply = [...state.replies, action.payload.reply];

      return state.map((currVideo) => {
        if (currVideo.video_id === action.payload.video.video_id) {
          const { comment } = action.payload.comment;

          return { ...currVideo, comments: action.payload.comment };
        }
        return currVideo;
      });

    // return { ...state, replies: addNewReply };

    default:
      break;
  }
};

export const DataProvider = ({ children }) => {
  const [videos, dispatch] = useReducer(mediaReducer);

  useEffect(() => {
    getAllMedia().then((files) => handleReset(files));
  }, []);

  const handleReset = (videos) => {
    dispatch({ type: 'RESET', payload: { videos } });
  };

  const handleAdd = (video) => {
    dispatch({ type: 'ADD', payload: { video } });
  };

  const handleEdit = (videos) => {
    dispatch({ type: 'EDIT', payload: { videos } });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  const handleAddComment = (video, comment) => {
    dispatch({ type: 'ADDCOMMENT', payload: { video, comment } });
  };

  return (
    <ChatContext.Provider
      value={{
        videos,
        handleReset,
        handleAdd,
        handleEdit,
        handleDelete,
        handleAddComment,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
