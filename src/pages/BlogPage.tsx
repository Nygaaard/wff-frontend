import imageOne from "../assets/images/insta2.png";
import imageTwo from "../assets/images/insta3.png";

const blogPosts = [
  {
    image: imageOne,
    title: "En fantastisk vinupplevelse i Åre",
    date: "24 april 2025",
    content: `
      Vi hade en magisk kväll med vinprovning i fjällen där vi testade några av våra nya favoriter. 
      Smakerna gifte sig med den kalla fjälluften och sällskapet var på topp. 
      Det blev en kväll att minnas – både för smakerna och stämningen. Vi rekommenderar varmt vår nya Amarone från Valpolicella!
    `,
  },
  {
    image: imageTwo,
    title: "Nyheter från vingårdarna i Toscana",
    date: "12 april 2025",
    content: `
      Under vår senaste resa till Italien fick vi en unik inblick i hur de toskanska vingårdarna jobbar med hållbarhet.
      Vi besökte små familjeägda gårdar där vinmakarna brinner för både tradition och innovation.
      Det kommer att påverka vårt sortiment – håll utkik efter nya ekologiska tillskott!
    `,
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h1>Blogg</h1>

      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <div className="post-content">
              <h2>{post.title}</h2>
            </div>
            <img src={post.image} alt={`Bloggbild ${index + 1}`} />
            <p className="text">{post.content}</p>
            <p className="date">{post.date}</p>
            {index < blogPosts.length - 1 && <hr className="section-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
