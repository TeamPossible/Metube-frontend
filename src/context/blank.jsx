import { createContext, useReducer, useState } from 'react';

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
      return state.map((currMessage) => {
        if (currVideo.id === action.payload.video.id) {
          const { video } = action.payload.video;
          return { ...currVideo, video };
        }
        return currVideo;
      });
    case 'ADDCOMMENT':
      const addNewReply = [...state.replies, action.payload.reply];
      return { ...state, replies: addNewReply };

    default:
      break;
  }
};

export const DataProvider = ({ children }) => {
  const [videos, dispatch] = useReducer(mediaReducer);

  const handleReset = (videos) => {
    dispatch({ type: 'RESET', payload: { videos } });
  };

  const handleAdd = (videos) => {
    dispatch({ type: 'ADD', payload: { videos } });
  };

  const handleEdit = (videos) => {
    dispatch({ type: 'EDIT', payload: { videos } });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  const handleAddReply = (comment) => {
    dispatch({ type: 'ADDComment', payload: { comment } });
  };

  return (
    <ChatContext.Provider
      value={{
        videos,
        handleReset,
        handleAdd,
        handleEdit,
        handleDelete,
        handleAddReply,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
