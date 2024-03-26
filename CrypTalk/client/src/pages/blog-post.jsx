import { useParams } from 'react-router-dom';

export default function BlogPost() {
    const { blogId } = useParams();
  return (
    <div>
        <h1>Work in progress Blogpage blogId: {blogId}</h1>
    </div>
  )
}
