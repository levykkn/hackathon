import React from 'react';
import { render } from '@testing-library/react';
import UserMessage from './UserMessage';
import { Message } from '../../types';

describe('UserMessage component', () => {
  const message: Message = {
      content: 'Test content',
      isUser: true,
      displayContent: ''
  };

  it('renders without crashing', () => {
    render(<UserMessage message={message} />);
  });
  it('displays user message', () => {
    const { getByText } = render(<UserMessage message={message} />);
    expect(getByText('Test content')).toBeInTheDocument;
  });
});