// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onclickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onclickBtn = () => {
    onclickEmoji(id)
  }
  return (
    <li className="list-items">
      <div className="btn-container">
        <button type="button" className="btn-image" onClick={onclickBtn}>
          <img src={emojiUrl} alt={emojiName} className="size-image" />
        </button>
      </div>
    </li>
  )
}
export default EmojiCard
