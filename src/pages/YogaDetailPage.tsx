import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../lib/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

export default function YogaDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const singleYogaQuery = useQuery({
    queryKey: ["supabase", "yoga", id],
    queryFn: async () => {
      if (!id) {
        return null;
      }
      const result = await supabase
        .from("yoga")
        .select(
          `*,
            favorites(
            id
            )
            `
        )
        .eq("id", id)
        .single();
      if (result.error) {
        throw result.error;
      }
      return result.data;
    },
  });

  if (singleYogaQuery.isPending) {
    return "...loading Yoga";
  }
  if (singleYogaQuery.isError || !singleYogaQuery.data) {
    return "...can't fetch Yoga!";
  }

  const handleFavoriteClick = async () => {
    if (!id) {
      console.error("No ID found!");
      return;
    }
    if (yogaPose.favorites.length > 0) {
      await supabase.from("favorites").delete().eq("yoga_id", id);
    } else {
      await supabase.from("favorites").insert({ yoga_id: id });
    }
    queryClient.invalidateQueries({ queryKey: ["supabase", "yoga"] });
  };

  const yogaPose = singleYogaQuery.data;

  return (
    <div className="yoga-dp-page">
      <div>
        <div
          className="yoga-dp"
          style={{
            backgroundImage: `url(${yogaPose.video_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "400px",
          }}
        >
          <ReactPlayer
            className="react-video-player"
            url={yogaPose.video_url}
            controls={false}
            loop={true}
            playing={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="content-margin">
          <div className="yoga-dp-info">
            <h1>{yogaPose.name}</h1>
            <p className="difficulty">{yogaPose.difficulty}</p>
            <p className="description">{yogaPose.description}</p>
          </div>
          <div className="back-fav">
            <button className="back" onClick={() => navigate(-1)}>
              <img src="/src/assets/img/arrow-left-circle-3.svg" alt="back" />
            </button>
            {/* <button className="fav-btn" onClick={handleFavoriteClick}>
              {yogaPose.favorites.length > 0 ? "❤️" : "♡"}
            </button> */}
            <button
              className="fav-btn"
              onClick={handleFavoriteClick}
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: "0",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {yogaPose.favorites.length > 0 ? (
                <img
                  src="/src/assets/img/full-heart.png" // Bild für "Favorit"
                  alt="Remove from favorites"
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "none",
                  }}
                />
              ) : (
                <img
                  src="/src/assets/img/empty-heart.png" // Bild für "Nicht Favorit"
                  alt="Add to favorites"
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "none",
                  }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
