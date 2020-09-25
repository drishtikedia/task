import React from 'react';

export const FormInput = ({ label, placeholder, setValue, text, value }) => (
  <div class='field mt-5'>
    <label class='label'>{label}</label>
    <div class='control has-icons-left has-icons-right'>
      <input
        class='input is-success'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <span class='icon is-small is-left'></span>
      <span class='icon is-small is-right'></span>
    </div>
    <p class='help is-success'>{text}</p>
  </div>
);
