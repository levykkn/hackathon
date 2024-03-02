import React from 'react';
import { render, waitFor } from '@testing-library/react';
import BotMessage from './BotMessage';
import { Message } from '../../types';

describe('BotMessage component', () => {
  const message: Message = {
    displayContent: 'Test display content',
    content: 'Test content',
    isUser: false,
  };

  it('renders without crashing', () => {
    render(<BotMessage message={message} />);
  });
});