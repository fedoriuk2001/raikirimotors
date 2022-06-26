import * as React from "react"
import { Helmet } from "react-helmet";
import { Link } from "gatsby"
// import { ga404 } from '../utils/ga'

import * as styles from './404.module.scss';

// markup
const NotFoundPage = () => {
  return (
    <>
      <Helmet
        bodyAttributes={{
          'data-page': 'page-404',
        }}
      />
      <div className={styles.root}>
        <div className="container">
          <div className={styles.content}>
            
            <div className={styles.innerContent}>
              <h1>looks like you step out of <br />the path..</h1>
              <Link to="/" className={styles.link} 
              // onClick={() => ga404('Go Home')}
              >Go Home</Link>
            </div>

            <span className={styles.text404}>404</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
