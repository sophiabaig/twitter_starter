import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox({setTweets, userProfile, tweetText = "", setTweetText}) {
  const disabled = tweetText.length == 0 || tweetText.length > 140
  const charactersLeft = 140 - tweetText.length
  const handleOnTweetTextChange = (event) => {
    setTweetText(event.target.value)
  }
  const handleOnSubmit = () => {
    const newTweet = {
      name: userProfile.name,
      handle: userProfile.handle,
      text: tweetText,
      comments: 0,
      retweets: 0,
      likes: 0
    }
    setTweets((oldTweets) => [...oldTweets, { ...newTweet, id: oldTweets.length}]) // updating the tweets array to include the new tweet
    setTweetText("")
  }

  return (
    <div className="tweet-box">
       <TweetInput value={tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={tweetText} charactersLeft={charactersLeft}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} disabled={disabled}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount({tweetText, charactersLeft}) {
  // ADD CODE HERE
  var color = ""
  if (tweetText.length > 140) {
    color = "red"
  }
  if (tweetText.length == 0) {
    charactersLeft = ""
  }
  return <span className={color}>{charactersLeft}</span>
}

export function TweetSubmitButton({handleOnSubmit, disabled}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit} disabled={disabled}>Tweet</button>
    </div>
  )
}
