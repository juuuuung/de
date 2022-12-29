import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <div> loading...</div>
      ) : (
        <div>
          <h1>Detail</h1>
          <img alt="Detail" src={detail.background_image} />
          <p>{detail.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
