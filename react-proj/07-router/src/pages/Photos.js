import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Photos() {
  const [image, setImage] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const limit = 10;
  const offset = (page - 1) * limit;

  const slicePhotos = (images) => {
    const slicedPhotos = images.slice(offset, offset + limit);
    return slicedPhotos;
  };
  console.log("배열자르기", slicePhotos);

  const changePage = (newPage) => {
    setPage(newPage);
    navigate(`/photos?page=${newPage}`);
  };

  const getPhotos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const img = await res.json();
    setImage(img);
    // console.log(setImage);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div>Router 실습</div>

      {image ? (
        <>
          {image.map((value) => (
            <ul key={value.id}>
              <li>이미지 아이디: {value.id}</li>
              <li>이미지 타이틀: {value.title}</li>
              <img src={`${value.thumbnailUrl}`} />
            </ul>
          ))}

          <button>이전</button>
          <button>다음</button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
