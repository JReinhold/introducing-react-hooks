import React, { useState } from 'react';
import { useSomeBehavior, useAnotherBehavior } from './my-hooks';

export function SmileyList() {
  useSomeBehavior();
  useAnotherBehavior();

  return <div>I love smilies! 😎 🤔 😇</div>;
}
