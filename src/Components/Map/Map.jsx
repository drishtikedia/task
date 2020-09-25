import React from 'react';
import MapContainer from './MapContainer';
export const Map = () => (
  <div class='columns mt-5'>
    <div class='column is-two-fifths'>
    <h1 className='title is-size-2'>MAP VIEW</h1>
      <div class="section  is-square"><MapContainer/></div>
    </div>
    <div class='column is-three-fifths'>
      <table class='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
        <thead>
          <tr>
            <th>One</th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>Six</td>
          </tr>
          <tr>
            <td>Seven</td>
            <td>Eight</td>
          </tr>
          <tr>
            <td>Nine</td>
            <td>Ten</td>
          </tr>
          <tr>
            <td>Eleven</td>
            <td>Twelve</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
