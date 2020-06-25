import React from "react";
import useAxios from "../useAxios";

const About = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts-proxy.now.sh/list_movies.json",
  });
  console.log(loading, error, data);
  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div onClick={refetch}>
          {data.data.data.movies.map((movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default About;
