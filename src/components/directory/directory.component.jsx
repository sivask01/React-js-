import React from 'react';
import { connect } from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
// components
import MenuItem from "../menu-item/menu-item.component";
// styles
import './directory.styless.scss';

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {
      sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id.toString()} {...otherSectionProps} />
      ))
    }
  </div>
)
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);