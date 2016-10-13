import React, { PropTypes, Component } from 'react';

// import local css as s. 
import s from './styles.css';
// import global css as gs
import gs from './../../styles/grid.css'

class Article extends Component {
  render() {
    return (
      <div className={gs.container}>
        <div className={gs.line}>
          <div className={s.articleHeadline}>Idiotic Tree Keeps Trying To Plant Seeds On Sidewalk</div>
        </div>
        <div className={gs.line}>
          <div className={s.articleBody}>
            PORTLAND, OR—Pointing out that the total dipshit had dropped dozens of acorns all along the length of pavement, sources confirmed Thursday that a completely idiotic tree keeps trying to plant seeds on the sidewalk. “Come on, you fucking moron, what are you doing? That’s concrete,” said local pedestrian Frank Brogden, who shook his head while pondering why the dumbshit California black oak was stupid enough to believe its saplings could grow in an area devoid of soil, nutrients, and water. “Oh, yeah, I can’t wait to see the tree sprouting right up in the middle of 5-inch-thick cement. The dirt’s that way, Einstein.” At press time, Brogden was reportedly overheard muttering “What the fuck?” under his breath as the tree attempted to plant a seed on a parked car.
          </div>
        </div>
      </div>
    )
  }
}

export default Article;
