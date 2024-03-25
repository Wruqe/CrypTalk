import { useEffect } from 'react';
import ThoughtBlog from '../thoughtBlog';
import { useDispatch, useSelector } from 'react-redux';
import { RENDER_THOUGHTS } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ThoughtList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { loading, data } = useQuery(QUERY_THOUGHTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: RENDER_THOUGHTS,
        thoughts: data.thoughts,
      });
      data.thoughts.forEach((thought) => {
        idbPromise('thoughts', 'put', thought);
      });
    } else if (!loading) {
      idbPromise('thoughts', 'get').then((thoughts) => {
        dispatch({
          type: RENDER_THOUGHTS,
          products: thoughts,
        });
      });
    }
  }, [data, loading, dispatch]);

  return (
    <div className="my-2">
      <h2>Blogs:</h2>
      {state.thoughts.length ? (
        <div className="flex-row">
          {state.thoughts.map((thought) => (
            <ThoughtBlog
              key={thought._id}
              thoughtText={thought.thoughtText}
              username={thought.username}
              createdAt={thought.createdAt}
            />
          ))}
        </div>
      ) : (
        <h3>No Blogs</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ThoughtList;
