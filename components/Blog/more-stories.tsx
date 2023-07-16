import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className='container'>
      <div className='row mt-5 pt-5'>
        <div className='col-md-8'>
          {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            More Stories
          </h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            {posts.map(({ node }) => (
              <PostPreview
                key={node.slug}
                title={node.title}
                coverImage={node.featuredImage}
                date={node.date}
                author={node.author}
                slug={node.slug}
                excerpt={node.excerpt}
              />
            ))}
          </div>
        </div>
        <div className='col-md-4'>
          sidebar
        </div>
      </div>
    </section>
  )
}
