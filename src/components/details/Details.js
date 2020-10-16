import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Details.css';
import { getTitle, getDescription, getChannelTitle } from '../../store/selectors';

const Details = ({ title, description, channelName }) => {
  return (
    <div className="container-details">
      <div className="details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{channelName}</p>
      </div>
    </div>
  );
};

Details.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  channelName: PropTypes.string,
};

const mapStateToProps = state => ({
  title: getTitle(state),
  description: getDescription(state),
  channelName: getChannelTitle(state),
});

export default connect(mapStateToProps)(Details);
