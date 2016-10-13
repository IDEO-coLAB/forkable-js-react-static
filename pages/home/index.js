import React, { PropTypes, Component } from 'react';

// import local css as s. 
import s from './styles.css';
// import global css as gs
import gs from './../../styles/grid.css'
import Card from './../../components/Card/Card'

class HomePage extends Component {

  render() {
    return (
      <div className={gs.container}>
        <div className={gs.line}>
          <div className={s.cardContainer}>
            <Card target="/stupid-tree" header="Idiotic Tree Keeps Trying To Plant Seeds On Sidewalk" body="PORTLAND, OR—Pointing out that the total dipshit had dropped dozens of acorns all along the length of pavement, sources confirmed Thursday that a completely idiotic tree keeps trying to plant seeds on the sidewalk. “Come on, you fucking moron, what are you doing? That’s concrete"/>
          </div>
          <div className={s.cardContainer}>
            <Card target="/stupid-tree" header="Idiotic Tree Keeps Trying To Plant Seeds On Sidewalk" body="PORTLAND, OR—Pointing out that the total dipshit had dropped dozens of acorns all along the length of pavement, sources confirmed Thursday that a completely idiotic tree keeps trying to plant seeds on the sidewalk. “Come on, you fucking moron, what are you doing? That’s concrete"/>
          </div>
          <div className={s.cardContainer}>
            <Card target="/stupid-tree" header="Idiotic Tree Keeps Trying To Plant Seeds On Sidewalk" body="PORTLAND, OR—Pointing out that the total dipshit had dropped dozens of acorns all along the length of pavement, sources confirmed Thursday that a completely idiotic tree keeps trying to plant seeds on the sidewalk. “Come on, you fucking moron, what are you doing? That’s concrete"/>
          </div>
          <div className={s.cardContainer}>
            <Card target="/stupid-tree" header="Idiotic Tree Keeps Trying To Plant Seeds On Sidewalk" body="PORTLAND, OR—Pointing out that the total dipshit had dropped dozens of acorns all along the length of pavement, sources confirmed Thursday that a completely idiotic tree keeps trying to plant seeds on the sidewalk. “Come on, you fucking moron, what are you doing? That’s concrete"/>
          </div>
        </div>
      </div>
    )
  }

}

export default HomePage;
