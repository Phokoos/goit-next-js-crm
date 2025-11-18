'use client';

import React from 'react';
import { Field } from 'formik';

export default function Button({ label, id, ...rest }) {
  return (
    <div className={'flex flex-col'}>
      {label && (
        <label htmlFor={id} className={'mb-2 text-base text-gray-900 '}>
          {label}
        </label>
      )}
      <Field
        id={id}
        {...rest}
        className={'p-3 h-11 text-sm border border-gray-300 shadow'}
      />
    </div>
  );
}
