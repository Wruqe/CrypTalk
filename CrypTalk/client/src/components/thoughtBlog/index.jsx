

export default function ThoughtBlog({ thoughtText, key }) {
  return (
    <div>
        <p key={key}>{thoughtText}</p>
    </div>
  )
}
