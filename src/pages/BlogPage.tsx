import { useEffect, useState } from "react";
import { BlogPost } from "../types/Interfaces-wp/BlogPost";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost/wine_for_friends/wp-json/wp/v2/posts"
        );
        const data = await response.json();

        const postsWithImages = await Promise.all(
          data.map(async (post: BlogPost) => {
            if (post.featured_media) {
              const mediaResponse = await fetch(
                `http://localhost/wine_for_friends/wp-json/wp/v2/media/${post.featured_media}`
              );
              const mediaData = await mediaResponse.json();
              return { ...post, imageUrl: mediaData.source_url };
            }
            return post;
          })
        );

        setBlogPosts(postsWithImages);
      } catch (err) {
        console.error("Fel vid hämtning av blogginlägg:", err);
        setError("Kunde inte hämta blogginlägg.");
      } finally {
        setLoading(false);
      }
    };

    window.scrollTo(0, 0);
    fetchBlogPosts();
  }, []);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="blog-page">
      <h1>Blogg</h1>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <div className="post-content">
              <h2>{post.title.rendered}</h2>

              {post.imageUrl && (
                <div className="post-image">
                  <img
                    src={post.imageUrl}
                    alt={`Bild för inlägg ${post.title.rendered}`}
                  />
                </div>
              )}

              <div
                className="post-text"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />

              <p className="date">{new Date(post.date).toLocaleDateString()}</p>
            </div>

            <hr className="section-divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
