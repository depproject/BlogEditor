import Topics from './Topics';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
            <Topics title={blog.title} keywords={blog.keywords} id={blog.id} />
        
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;