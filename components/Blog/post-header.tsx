import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
  content
}) {
  return (
    <>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className='row justify-content-end'>
        <div className='col-xl-10'>
          <div className='postBox' style={{marginTop:`-100px`,background:`#fff`}}>
            <PostTitle>{title}</PostTitle>
            <div className="max-w-2xl mx-auto">
              <div className="block md:hidden mb-6">
                <Avatar author={author} />
              </div>
              <div className="mb-6 text-lg">
                Posted <Date dateString={date} />
                <Categories categories={categories} />
              </div>
              <div dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
