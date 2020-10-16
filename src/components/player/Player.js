import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import './Player.css';
import { getLoading, getVideoUrl } from '../../store/selectors';
import Nav from './Nav';
import NoResults from './NoResults';
import LoadingSpinner from '../common/LoadingSpinner';

const Player = ({ url, isLoading }) => {
  const [playing, setPlaying] = useState(false);
  const player = useRef();

  const onPlayVideo = e => {
    setPlaying(true);
  };

  const togglePlay = () => {
    setPlaying(playing => !playing);
  };

  const onPauseVideo = () => {
    setPlaying(false);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container-content">
      <div className="container-player">
        {Boolean(url) ? (
          <ReactPlayer
            ref={player}
            url={url}
            width="100%"
            height="100%"
            onPlay={onPlayVideo}
            onPause={onPauseVideo}
            playing={playing}
          />
        ) : (
          <NoResults />
        )}
      </div>
      {Boolean(url) && <Nav playing={playing} togglePlay={togglePlay} />}
    </div>
  );
};

Player.propTypes = {
  url: PropTypes.string,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  url: getVideoUrl(state),
  isLoading: getLoading(state),
});

export default connect(mapStateToProps)(Player);
