import { Component } from 'react';

export function Statistics({ good, neutral, bad }) {
  return (
    <ul>
      <li>
        <p>Good:{good}</p>
      </li>
      <li>
        <p>Neutral:{neutral}</p>
      </li>
      <li>
        <p>Bad:{bad}</p>
      </li>
    </ul>
  );
}