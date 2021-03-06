var VideoListEntry = ({video, onTitleClicked}) => {
  const {title, description} = video.snippet;
  const {url} = video.snippet.thumbnails.default;
  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick = {() => onTitleClicked(video)} >{title}</div>
        <div className="video-list-entry-detail">{description}</div>
      </div>
    </div>
  );
}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
