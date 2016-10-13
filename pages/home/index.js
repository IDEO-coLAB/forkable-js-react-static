/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.line}>
          <div className={s.lastUnit}>
            <div className={s.size1of4}>
              <h1>kern tek r j   tnew krjt erkjt ewjrt erjt ejwrt ewjrth jerh jer jewhr tejrht ewrjht rje t rejht ejrht erjht </h1>
            </div> 
          </div> 
        </div> 
      </div>
    );
  }

}

export default HomePage;
