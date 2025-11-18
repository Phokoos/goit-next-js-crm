'use client';

import React from 'react';
import clsx from 'clsx';

export default function Button({ disabled, ...rest }) {
  return (
    <button
      {...rest}
      className={clsx(
        'px-2.5 py-5 text-zinc-50 bg-gray-900 text-base text-center font-medium rounded',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100 ',
      )}
    />
  );
}
