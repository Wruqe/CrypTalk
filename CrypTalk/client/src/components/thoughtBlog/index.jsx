/* eslint-disable react/prop-types */


export default function ThoughtBlog({ thoughtText, key, username, createdAt}) {
  return (
    <div>
        <p key={key}>{thoughtText}</p> 
        <p>User: {username}</p>
        <p>Created On: {createdAt}</p>
    </div>
  )
}
