import { buildQueries } from '@testing-library/react';
import React from 'react';
import ColumnFragment from "./ColumnFragment"
import './TableFragment.css'
import styles from "./TableFragment.module.css"
const heading={
    backgroundColor:'blue',fontSize:"40px",color:"yellow"
}
export default function TableFragment() {
  return  <>
    <h2 className='error'>heading tag</h2>
    <h3 className={styles.success}>Success Class from css module</h3>
    <p style={heading}>hello this is a para.</p>
    <h1 style={{color:'pink'}}>fhvfhgf</h1>
      <table className='table table-bordered'>
          <thead>
              <tr>
                  <ColumnFragment/>
              </tr>
          </thead>
      </table>
  </>;
}
