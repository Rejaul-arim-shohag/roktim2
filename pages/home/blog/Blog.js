import BlogStyle from '../../../styles/Blog.module.scss';
import PageBlog from '../../../components/Layouts/blog/PageBlog.js';

const Blog = () => {
	return (
		<>
			<section className={BlogStyle.background}>
				<h1 className="text-center pt-5 pb-3 text-light font-Corda display-1">Blogs</h1>
				<div className="container">
					<PageBlog />
				</div>
			</section>
		</>
	);
};

export default Blog;
