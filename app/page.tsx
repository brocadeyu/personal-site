import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Brocadeyu
      </h1>
      <p className="mb-4">{`我是一个热爱代码和咖啡的前端开发工程师，擅长把创意变成炫酷网页。白天写代码，晚上捉bug，代码即生活，bug即乐趣。喜欢探索新技术，追求极致用户体验，期待与您共同创造精彩!`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
