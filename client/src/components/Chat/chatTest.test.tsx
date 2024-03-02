import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Chat from './Chat';

jest.mock('../../hooks/useChat', () => ({
  useChat: () => ({
    chatContainerRef: { current: null },
    dialogue: [],
    currentMessage: '',
    isLoading: false,
    handleSendMessage: jest.fn(),
    handleKeyPress: jest.fn(),
    setCurrentMessage: jest.fn(),
  }),
}));

describe('Chat component', () => {
  it('renders without crashing', () => {
    render(<Chat />);
  });


});